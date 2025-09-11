const { app, BrowserWindow } = require("electron");
const path = require("path");
const AutoLaunch = require("electron-auto-launch");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    alwaysOnTop: true,   // keeps it above all windows
    frame: false,        // removes title bar
    transparent: true,   // optional
    icon: path.join(__dirname, "assets", "trddy.ico"), // 👈 Add this
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("todo.html");
}

app.whenReady().then(() => {
  // Auto-launch setup
  let todoAutoLauncher = new AutoLaunch({
    name: "Todo App",
    path: process.execPath,
  });
  todoAutoLauncher.enable();

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
