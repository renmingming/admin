<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate";
export default {
  name: "SidebarLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isExternal() {
      return isExternal(this.to);
    },
    type() {
      if (this.isExternal) {
        return "a";
      }
      return "route-link";
    },
  },
  components: {},
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        to,
      };
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
