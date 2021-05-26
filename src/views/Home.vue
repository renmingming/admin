<template>
  <div class="home">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from "@/components/Header.vue";
import vSidebar from "@/components/Sidebar/Index.vue";

export default {
  name: "Home",
  components: {
    vHeader,
    vSidebar,
  },
};
</script>
