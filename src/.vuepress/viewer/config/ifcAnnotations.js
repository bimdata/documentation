import baseConfig from "./baseConfig.js";

const IfcAnnotationsPlugin = {
  name: "ifcAnnotations",
  addToWindows: ["2d", "3d"],
  button: {
    position: "right",
    keepOpen: true,
    tooltip: "ifcAnnotations.tooltip",
    icon: {
      component: "BIMDataIcon",
      options: { name: "location", size: "m" },
    },
  },
  i18n: {
    en: {
      tooltip: "Add Annotations",
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
      context.startAnnotationMode(({ x, y, z }) => {
        const annotation = state.addAnnotation({
          component: IfcAnnotation,
          props: {
            index: ++this.index,
            moveTo: position => Object.assign(annotation, position),
            remove: () => state.removeAnnotation(annotation),
          },
          x,
          y,
          z,
        });
        context.stopAnnotationMode();
        this.$close();
      });
    },
  },
};

const IfcAnnotation = {
  template: `
    <div
      class="ifc-annotation"
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
      let position;

      const windowName = this.localContext.window.name;

      if (windowName === "3d") {
        const { clientX, clientY } = event;

        const xeokit = this.localContext.viewer.xeokit;
        const { x, y } = xeokit.scene.canvas.canvas.getBoundingClientRect();

        const pickResult = xeokit.scene.pick({
          pickSurface: true,
          canvasPos: [clientX - x, clientY - y],
        });

        const [p0, p1, p2] = pickResult?.worldPos ?? [0, 0, 0];
        position = { x: p0, y: p2, z: p1 }; // xeokit is y-up
      } else {
        const { movementX, movementY } = event;

        const engine2d = this.localContext.viewer.viewer;
        const { x: cx, y: cy } = engine2d.canvas.getBoundingClientRect();
        const { x, y } = this.$refs.marker.getBoundingClientRect();

        position = engine2d.camera.getPosition({
          x: (x - cx) + movementX,
          y: (y - cy) + movementY,
        });
      }

      this.moveTo(position);
    }
  },
};

export default function(viewerId) {
  const viewer = makeBIMDataViewer({
    ...baseConfig,
    api: {
      accessToken: "fZ5CP4g2QQlj2KBXxqdl2jTNokiESIde",
      cloudId: 11520,
      projectId: 245620,
      modelIds: [1203414],
    },
    plugins: {
      ...baseConfig.plugins,
      viewer2d: {
        compass: false,
        help: false,
        modelLoader: "hidden",
        storeySelectorAutoOpen: false,
      }
    }
  });

  viewer.registerPlugin(IfcAnnotationsPlugin);

  viewer.mount(viewerId, {
    ratios: [50, 50],
    children: ["2d", "3d"]
  });
}
