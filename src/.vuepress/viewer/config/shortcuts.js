export default function(id) {
  const viewer = makeBIMDataViewer({
    locale: "fr",
    ui: {
      windowManager: false,
    },
    plugins: {
      header: false
    }
  });

  const makePlugin = (name, context) => ({
    name,
    component: {
      data() {
        return {
          context,
          message: null,
        };
      },
      watch: {
        message(value) {
          if (value) {
            setTimeout(() => (this.message = null), 2000);
          }
        },
      },
      created() {
        this.$viewer[context].registerShortcut({
          name: "message",
          key: "m",
          // altKey: true,
          execute: () => (this.message = `${context} shortcut executed.`),
        });
      },
      template: ` <div style="height: 100%; display: flex; justify-content:center; align-items:center;">
                    <div style="text-align:center;">
                      <p>Listen to {{ context }} shortcuts :</p>
                      <p>{{ message || "no message" }}</p>
                    </div>
                  </div>`,
    },
  });

  viewer.registerPlugin(makePlugin("plugin1", "globalContext"));
  viewer.registerPlugin(makePlugin("plugin2", "localContext"));

  viewer.registerWindow({
    name: "window1",
    plugins: ["plugin1"],
  });

  viewer.registerWindow({
    name: "window2",
    plugins: ["plugin2"],
  });

  viewer.mount(id, {
    ratios: [50, 50],
    direction: "row",
    children: ["window1", "window2"],
  });
}
