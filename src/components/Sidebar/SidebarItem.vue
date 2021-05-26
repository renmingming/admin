<template>
  <div v-if="!item.hidden">
    <el-submenu :index="item.index" :key="item.index">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.name"
        :item="child"
      ></sidebar-item>
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
  methods: {},
  mounted() {},
};
</script>

<style></style>
