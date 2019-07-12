"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 1024, height: 800 });
    win.setTitle('CSUBU Lecturers');
    win.loadFile('index.html');
    win.on('closed', function () { win = null; });
}
electron_1.app.on('ready', function () {
    console.log('ready us');
    createWindow();
});
// สำหรับ macOS 
electron_1.app.on('window-all-closed', function () {
    // ถ้าหน้าต่างทุกอันปิด
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// ถ้ากด icon ของ app ใหม่
electron_1.app.on('activate', function () {
    console.log('open us');
    if (win == null) {
        createWindow();
    }
});
