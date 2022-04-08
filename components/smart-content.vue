<script>
export default {
  render: function (createElement) {
    let html = this.html.replace(/\s\s+/g, " "); // replace double space
    let array = [...html.matchAll(/<img.* src=\"(.*?)\"/g)];
    array.forEach((match) => {
      const imgUrl = this.$img(match[1]);
      html = html.replace(match[1], imgUrl);
    });
    return createElement(
      "div", // tag namegs
      {
        attrs: {
          id: "foo",
        },
        domProps: {
          innerHTML: this.html ? html : "",
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
