<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="sidebar-el-menu"
        default-active=""
        :collapse="isCollapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        router
      >
        <sidebar-item
          v-for="route in leftList"
          :key="route.name"
          :item="route"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "@/components/Sidebar/SidebarItem.vue";
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        {
          id: 1,
          icon: "el-icon-s-home",
          index: "/",
          title: "系统首页",
        },
        {
          id: 2,
          icon: "el-icon-user-solid",
          index: "operator",
          title: "管理员",
          children: [
            {
              id: 3,
              index: "groups",
              title: "分组列表",
            },
            {
              id: 4,
              index: "list",
              title: "管理员列表",
            },
            {
              id: 5,
              index: "log",
              title: "操作日志",
            },
          ],
        },
        {
          id: 6,
          icon: "el-icon-s-grid",
          index: "table",
          title: "基础表格",
        },
      ],
    };
  },
  ...mapGetters(["leftList"]),
  components: {
    SidebarItem,
  },
  methods: {},
  mounted() {
    console.log(this.leftList);
  },
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
