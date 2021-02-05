<template>
  <menu-list :data="data"/>
</template>

<script>
import MenuList from '@/components/MenuList'

export default {
  name: 'HomeMenu',
  components: { MenuList },
  data () {
    return {
      data: [
        { title: 'JSON格式化' },
        { title: 'Mock数据' },
        { title: '图片压缩' },
        { title: '解密/加密' },
        { title: '自定义代码生成' },
        { title: '全局取色器', path: '/globalColorPicker' },
        { title: 'Principal Implementation Officer' },
        { title: 'Future Accountability Coordinator' },
        { title: 'Lead Markets Facilitator' },
        { title: 'Principal Implementation Officer' },
        { title: 'Future Accountability Coordinator' },
        { title: 'Lead Markets Facilitator' },
        { title: 'Principal Implementation Officer' },
        { title: 'Principal Implementation Officer' }
      ]
    }
  }
}
</script>

<style scoped></style>
