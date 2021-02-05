<template>
  <div class="menulist">
    <div v-for="(item, index) in data" class="menulist-item" :key="index" @click="goTo(item)">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    data: Array
  },
  methods: {
    goTo (row) {
      this.$router.push({ path: row.path })
    }
  }
}
</script>

<style scoped>
.menulist {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.menulist-item {
  display: flex;
  background: #41bb99;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  transition: all .3s;
}

.menulist-item:hover {
  font-size: 1.5rem;
}

@media screen and (min-width: 640px) {
  .menulist {
    padding: 20px;
    display: block;
    font-size: 0;
  }

  .menulist-item {
    width: 200px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: 5px;
  }
}

</style>
