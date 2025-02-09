const css = hexo.extend.helper.get("css").bind(hexo);

// css cdn
const style_css = "https://cdn.jsdelivr.net/npm/heimu-js@1.0.0/style.css";

// 注入 css
hexo.extend.injector.register(
    "head_end",
    () => css(style_css),
)

// 注册标签
hexo.extend.tag.register(
    "heimu",
    function (args) {
        // {% heimu content [, title] %}
        content = args[0];
        if (args.length > 1) {
            title = args[1];
        } else {
            title = "你知道的太多了";
        }
        return `<span class=heimu title=${title}>${content}</span>`;
    },
)