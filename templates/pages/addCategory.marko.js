// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/addCategory.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var pageData = input.pageData;

  var action;

  if(pageData) {
  	action = `/manageCategories/${pageData.id}`
  } else {
  	action =  "/manageCategories/add"
  }

  out.w("<form" +
    marko_attr("action", action) +
    " method=\"post\"><div class=\"form-group\"><label for=\"category\">Category Name</label><input type=\"text\" class=\"form-control\" id=\"category\" name=\"category\"" +
    marko_attr("value", pageData && pageData.category) +
    "></div><input type=\"submit\" value=\"Add Category\"></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/addCategory.marko"
  };
