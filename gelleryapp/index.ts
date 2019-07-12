import { app, BrowserWindow } from 'electron'

let win = null

function createWindow() {
  win = new BrowserWindow({width: 1024, height: 800})
  win.setTitle('CSUBU Lecturers')
  win.loadFile('index.html')
  win.on('closed', () => { win = null })
}

app.on('ready', () => {
    console.log('ready us');
    createWindow()
})

// สำหรับ macOS 
app.on('window-all-closed', function () {
  // ถ้าหน้าต่างทุกอันปิด
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ถ้ากด icon ของ app ใหม่
app.on('activate', function () {
    console.log('open us');
  if (win == null) {
    createWindow()
  }
})
