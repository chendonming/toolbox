<template>
  <div>
    <canvas id="canvas"/>
  </div>
</template>

<script>
import { desktopCapturer, ipcRenderer } from 'electron'

export default {
  name: 'GlobalColorPicker',
  created () {
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
      for (const source of sources) {
        if (source.name === 'Entire Screen') {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: false,
              video: {
                mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: source.id
                }
              }
            })
            this.handleStream(stream)
          } catch (e) {
            this.handleError(e)
          }
          return
        }
      }
    })
  },
  methods: {
    handleStream (stream) {
      const video = document.createElement('video')
      video.srcObject = stream
      video.onloadedmetadata = (e) => {
        video.play()
        video.style.width = video.videoHeight + 'px'
        video.style.width = video.videoWidth + 'px'
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        const size = ipcRenderer.sendSync('getLayoutSize')
        if (size) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
          video.remove()
          ipcRenderer.sendSync('fullscreen')
        }
      }
    },
    handleError (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped></style>
