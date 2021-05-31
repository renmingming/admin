<script>
export default {
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      if (icon.include("el-icon")) {
        vnodes.push(<i class={[icon, "sub-el-icon"]} />);
      } else {
        vnodes.push(<svg-icon icon-class={icon} />);
      }
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
