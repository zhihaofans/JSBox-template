const { AppKernel, ModLoader } = require("CoreJS"),
  $ = require("$"),
  modList = ["example.js"];
class App extends AppKernel {
  constructor({ appId, modDir, l10nPath }) {
    super({ appId, modDir, l10nPath });
    this.modLoader = new ModLoader({ modDir, app: this });
  }
  init() {
    try {
      this.initModList();
    } catch (error) {
      $console.error(error);
    } finally {
      $.info(`启动耗时${new Date().getTime() - this.START_TIME}ms`);
    }
  }
  initModList() {
    this.modLoader.addModsByList(modList);

    this.modLoader.showGridModList();
  }
}

function run() {
  try {
    const app = new App({
      appId: "zhihaofans.template",
      modDir: "/scripts/mods/",
      l10nPath: "/strings/l10n.js"
    });
    app.init();
  } catch (error) {
    $console.error(error);
    $ui.alert({
      title: "app.js throw",
      message: error.name + "\n" + error.message,
      actions: [
        {
          title: "OK",
          disabled: false, // Optional
          handler: () => $app.close()
        }
      ]
    });
  }
}
module.exports = { run };
