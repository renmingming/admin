<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-men
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opend="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-men>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import Logo from "./Logo";
import variables from "@/styles/variables.scss";
export default {
  name: "SidebarIndex",
  data() {
    return {};
  },
  components: {
    SidebarItem,
    Logo,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$route.options.routes;
    },
    variables() {
      return variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return true;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
