import baseConfig from "./baseConfig.js";

const PlanAnnotationsPlugin = {
  name: "planAnnotations",
  addToWindows: ["plan"],
  button: {
    position: "right",
    keepOpen: true,
    tooltip: "planAnnotations.tooltip",
    icon: {
      component: "BIMDataIcon",
      options: { name: "location", size: "m" },
    },
  },
  i18n: {
    fr: {
      tooltip: "Annotations PDF",
    },
  },
  component: {
    data() {
      return {
        index: 0
      };
    },
    render() {
      return null;
    },
    onOpen() {
      const state = this.$viewer.state;
      const context = this.$viewer.localContext;
      context.startAnnotationMode(({ x, y }) => {
        const annotation = state.addAnnotation({
          component: PlanAnnotation,
          props: {
            index: ++this.index,
            moveTo: position => Object.assign(annotation, position),
            remove: () => state.removeAnnotation(annotation),
          },
          x,
          y,
          z: 0,
        });
        context.stopAnnotationMode();
        this.$close();
      });
    },
  },
};

const PlanAnnotation = {
  template: `
    <div
      class="plan-annotation"
      :class="{ grabbing }"
      ref="marker"
      tabindex="0"
      @keyup.delete="remove"
    >
      {{ index }}
    </div>
  `,
  props: {
    localContext: Object,
    index: Number,
    moveTo: Function,
    remove: Function,
  },
  data() {
    return {
      grabbing: false,
    };
  },
  mounted() {
    this.$refs.marker.addEventListener("mousedown", this.onMouseDown);
  },
  beforeUnmount() {
    this.$refs.marker.removeEventListener("mousedown", this.onMouseDown);
  },
  methods: {
    onMouseDown() {
      this.grabbing = true;
      document.addEventListener("mouseup", this.onMouseUp);
      document.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseUp() {
      this.grabbing = false;
      document.removeEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(event) {
      const engine2d = this.localContext.viewer.viewer;
      const { x: cx, y: cy } = engine2d.canvas.getBoundingClientRect();
      const { x, y } = this.$refs.marker.getBoundingClientRect();

      const { movementX, movementY } = event;

      const position = engine2d.camera.getPosition({
        x: (x - cx) + movementX,
        y: (y - cy) + movementY,
      });

      this.moveTo(position);
    }
  },
};

export default function(viewerId) {
  const config = {
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
      modelIds: [1173804],
    },
    plugins: {
      ...baseConfig.plugins,
      plan: {
        help: false,
        modelLoader: "hidden",
      },
    }
  };

  const viewer = makeBIMDataViewer(config);

  viewer.registerPlugin(PlanAnnotationsPlugin);

  viewer.mount(viewerId, "plan");
}
