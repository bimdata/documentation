import baseConfig from "./baseConfig.js";

const PlanAnnotationsPlugin = {
  name: "planAnnotations",
  addToWindows: ["plan"],
  button: {
    position: "right",
    keepOpen: true,
    tooltip: "Annotations",
    icon: {
      component: "BIMDataIcon",
      options: { name: "location", size: "m" },
    },
  },
  component: {
    render() {
      return null;
    },
    onOpen() {
      const state = this.$viewer.state;
      const context = this.$viewer.localContext;
      context.startAnnotationMode(({ x, y }) => {
        state.addAnnotation({
          component: PlanAnnotation,
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
      @dblclick="remove"
    >
      {{ annotation.id }}
    </div>
  `,
  props: {
    annotation: Object,
  },
  methods: {
    remove() {
      this.$viewer.state.removeAnnotation(this.annotation);
    },
  },
};

export default function(viewerId) {
  const config = {
    ...baseConfig,
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
      "window-manager": false,
    }
  };

  const viewer = makeBIMDataViewer(config);

  viewer.registerPlugin(PlanAnnotationsPlugin);

  viewer.mount(viewerId, "plan");
}
