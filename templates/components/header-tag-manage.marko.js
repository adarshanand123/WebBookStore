// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/components/header-tag-manage.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\"><div class=\"container-fluid\"><ul class=\"navbar-nav \"><li class=\"active nav-item\"><a class=\"nav-link\" href=\"/manage\">DashBoard</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/manageBooks\">Books</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/manageCategories\">Categories</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">View Website</a></li></ul></div></nav>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/components/header-tag-manage.marko"
  };
