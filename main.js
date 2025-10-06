// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    transparent: true,
    frame: false,
    backgroundColor: "#00000000", // fully transparent

    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // optional
      nodeIntegration: true,
      contextIsolation: false,
    },
  });


  if (process.env.NODE_ENV === "development") {
    // win.loadURL("http://localhost:5173");
    win.loadFile("index.html");

  } else {
    console.log(path.join(__dirname, "frontend/dist/index.html"));
    win.loadFile(path.join(__dirname, "frontend/dist/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

