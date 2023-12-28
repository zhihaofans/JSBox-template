try {
  require("/scripts/app").run();
} catch (error) {
  $console.error(error);
  $ui.alert({
    title: "Error",
    message: error.message || "未知错误",
    actions: [
      {
        title: "exit",
        disabled: false, // Optional
        handler: () => $app.close()
      }
    ]
  });
} finally {
  $console.info("main finally");
}
