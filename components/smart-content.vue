<script>
export default {
  render: function (createElement) {
    return createElement(
      "div", // tag name
      {
        attrs: {
          id: "foo",
        },
        domProps: {
          innerHTML: this.html ? this.html.replace(/\s\s+/g, " ") : "", // replace double space
        },
        directives: [
          {
            name: "tooltip",
          },
        ],
      }
    );
  },
  props: {
    html: {
      default: "",
      required: true,
    },
  },
};
</script>
