<template>
  <div v-if="!item?.hidden">
    <template v-if="hasOneShowingChild(item.children, item)"> </template>
    <el-submenu :index="item.index" :key="item.index">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.meta?.title }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.name"
          :item="child"
        ></sidebar-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      console.log(parent);
      const showingChild = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChild.length == 1) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    console.log(this.item);
  },
};
</script>

<style></style>
