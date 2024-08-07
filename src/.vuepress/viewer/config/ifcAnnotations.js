import baseConfig from "./baseConfig.js";

const IfcAnnotationsPlugin = {
  name: "ifcAnnotations",
  addToWindows: ["2d", "3d"],
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
      context.startAnnotationMode(({ x, y, z }) => {
        state.addAnnotation({
          component: IfcAnnotation,
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
