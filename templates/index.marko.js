// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    header_tag_home_template = marko_loadTemplate(require.resolve("./components/header-tag-home.marko")),
    header_tag_home_tag = marko_loadTag(header_tag_home_template),
    header_tag_manage_template = marko_loadTemplate(require.resolve("./components/header-tag-manage.marko")),
    header_tag_manage_tag = marko_loadTag(header_tag_manage_template),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><title>Book Store</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/bootstrap.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/app.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"mainContainer\">");

  if (input.homeFlag) {
    out.w("<h1>TekBook</h1>");

    header_tag_home_tag({}, out, __component, "8");
  } else {
    out.w("<h1>TekBook Manager</h1>");

    header_tag_manage_tag({}, out, __component, "10");
  }

  var filePath = require(input.filename);

  out.w("<div class=\"bodyContainer\">");

  include_tag({
      _target: filePath,
      _arg: {
          pageData: input.pageData
        }
    }, out, __component, "12");

  out.w("</div>");

  if (input.homeFlag) {
    out.w("<footer class=\"footer\"><a href=\"/manage\">Manage</a></footer>");
  }

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "15");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "./components/header-tag-home.marko",
      "./components/header-tag-manage.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
