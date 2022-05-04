<script>
import _siteconfig from "../config/_siteconfig";
const contentModules = _siteconfig.contentModules;

function updateinternalLinks(html, modules) {
  modules.forEach((module) => {
    //set title to prevent double slashes (//)
    const title = module.routeName ? module.title : module.title + "/";
    const re = new RegExp(title, "g");
    html = html.replace(re, module.routeName);
  });
  return html;
}
export default {
  render: function (createElement) {
    let html = this.html ? this.html.replace(/\s\s+/g, " ") : ""; // replace double space
    html = updateinternalLinks(html, contentModules);

    let array = [...html.matchAll(/<img.* src=\"(.*?)\"/g)];
    array.forEach((match) => {
      const imgUrl = this.$img(match[1]);
      html = html.replace(match[1], imgUrl);
    });
    return createElement(
      "div", // tag namegs
      {
        attrs: {
          id: "content-id",
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
