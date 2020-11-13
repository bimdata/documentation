export default function(id) {
  const viewer = makeBIMDataViewer({
    locale: "fr",
    ui: {
      windowManager: false,
    },
    plugins: {
      header: false,
    },
  });

  const emitterPlugin = {
    name: "emitter",
    component: {
      data() {
        return {
          message: "no message",
        };
      },
      methods: {
        sendMessage() {
          this.$viewer.globalContext.hub.emit("message", this.message);
        },
      },
      template: ` <div style="height: 100%; display: flex; justify-content:center; align-items:center;">
      <div style="text-align:center;">
        <p>Message to send through global context message event :</p>
        <div><input type="text" v-model="message"></div>
        <div><button type="button" :disabled="!message" @click="sendMessage">Send message</button></div>
      </div>
    </div>`,
    },
  };

  const listenerPlugin = {
    name: "listener",
    component: {
      data() {
        return {
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
        this.$viewer.globalContext.hub.on(
          "message",
          (message) => (this.message = message)
        );
      },
      template: ` <div style="height: 100%; display: flex; justify-content:center; align-items:center;">
                    <div style="text-align:center;">
                      <p>Listen to global context message event :</p>
                      <p>{{ message || "no message" }}</p>
                    </div>
                  </div>`,
    },
  };

  viewer.registerPlugin(listenerPlugin);
  viewer.registerPlugin(emitterPlugin);

  viewer.registerWindow({
    name: "window1",
    plugins: ["emitter"],
  });

  viewer.registerWindow({
    name: "window2",
    plugins: ["listener"],
  });

  viewer.mount(id, {
    ratios: [50, 50],
    direction: "row",
    children: ["window1", "window2"],
  });
}
