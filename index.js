const css = hexo.extend.helper.get("css").bind(hexo);

// css cdn
const style_css = "https://cdn.jsdelivr.net/npm/hexo-tag-plugins-heimu@latest/style.css";

// 注入 css
hexo.extend.injector.register(
    "head_end",
    () => css(style_css),
)

// 注册标签
hexo.extend.tag.register(
    "heimu",
    function (args) {
        // {% heimu content [title] [style] %}
        let {content, title, style} = {content: "默认内容", title: "你知道的太多了", style: ""};
        switch (args.length) {
            case 1:
                content = args[0];
                break;
            case 2:
                [content, title] = args;
                break;
            case 3:
                [content, title, style] = args;
                break;
        }
        return `<span class=heimu style="${style}" title=${title}>${content}</span>`;
    },
)

hexo.extend.tag.register(
    "heimux",
    function (args) {
        // {% heimu content [title] [style] %}
        let {content, title, style} = {content: "默认内容", title: "你知道的太多了", style: "" };
        switch (args.length) {
            case 1:
                content = args[0];
                break;
            case 2:
                [content, title] = args;
                break;
            case 3:
                [content, title, style] = args;
                break;
        }
        return `<span class="heimu heimu_delete_line" style="${style}" title=${title}>${content}</span>`;
    },
)