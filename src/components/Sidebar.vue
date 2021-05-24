<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      default-active=""
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in items" :key="item.index">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs" :key="subItem.index">
              <el-menu-item :index="subItem.index">{{
                subItem.title
              }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <el-menu-item v-else :index="item.index">
          <i :class="item.icon"></i>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        {
          icon: "el-icon-s-home",
          index: "home",
          title: "系统首页",
        },
        {
          icon: "el-icon-user-solid",
          index: "operator",
          title: "管理员",
          subs: [
            {
              index: "groups",
              title: "分组列表",
            },
            {
              index: "list",
              title: "管理员列表",
            },
            {
              index: "log",
              title: "操作日志",
            },
          ],
        },
        {
          icon: "el-icon-s-grid",
          index: "table",
          title: "基础表格",
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
