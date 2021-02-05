import { ipcMain, app, screen } from 'electron'

export default function (win, renderer) {
  ipcMain.on('quit', () => {
    app.quit()
    // dialog.showMessageBox({
    //   type: 'warning',
    //   title: '温馨提示',
    //   message: '是否退出?',
    //   buttons: ['取消', '确定']
    // }).then((res) => {
    //   if (res.response === 1) {
    //     app.quit()
    //   }
    // })
  })

  ipcMain.on('fullscreen', () => {
    win.setFullScreen(true)
  })

  ipcMain.on('getLayoutSize', event => {
    event.returnValue = {
      width: screen.getPrimaryDisplay().workAreaSize.width,
      height: screen.getPrimaryDisplay().workAreaSize.height
    }
  })

  ipcMain.on('hide', () => {
    win.setBackgroundColor('rgba(0,0,0,0)')
  })

  ipcMain.on('show', () => {
    win.setBackgroundColor('#fff')
  })
}
