export function buildSeoHead(content) {
    if (!content) {
      return;
    }
    return {
      title: content.yoast_head_json.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: content.yoast_head_json.description,
        },
      ],
    };
  }