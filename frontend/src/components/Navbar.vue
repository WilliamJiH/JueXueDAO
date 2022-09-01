<template>
  <div>
    <div v-for="(item, index) in navItems" v-bind:key="index">
      <el-menu
        :default-active="item.index"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div>
          <el-menu-item :index="item.index">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navItems: Array,
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
