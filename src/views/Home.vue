<template>
  <div class="container">
    <div class="header">
      <div class="btn-back" v-if="$route.name !== 'homemenu'" @click="goback"><i class="cdmfont cdmai207"></i>返回</div>
      <div style="-webkit-app-region: drag" class="title">Clever Tool Box</div>
      <div class="cdmfont cdmguanbi" @click="quit"></div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'Home',
  methods: {
    quit () {
      ipcRenderer.send('quit')
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  height: 56px;
  line-height: 56px;
  padding: 0 10px;
  background: #2774d7;
  color: #fff;
  cursor: pointer;
}

.header .title {
  flex: 1;
  transition: all .3s;
}

.content {
  flex: 1;
  height: 0;
}

.cdmguanbi {
  transition: all .3s;
}

.cdmguanbi:hover {
  transform: rotate(180deg);
}

.btn-back {
  transition: all .3s;
  width: 80px;
}

.cdmai207 {
  padding-right: 5px;
}
</style>
