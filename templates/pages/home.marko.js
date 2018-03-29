// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  if (input.pageData) {
    out.w("<div class=\"row\">");

    marko_forEach(input.pageData, function(bookData) {
      out.w("<div class=\" col-4 bookContainer\">");

      var src = `/uploads/${bookData.coverurl}`

      out.w("<img style=\"width:60%\"" +
        marko_attr("src", src) +
        "><h5>" +
        marko_escapeXml(bookData.title) +
        "</h5><p>" +
        marko_escapeXml(bookData.description) +
        "</p><p>Buy it for $ " +
        marko_escapeXml(bookData.price) +
        "</p>");

      var href = `/bookDetails/${bookData.id}`

      out.w("<a class=\"btn btn-primary\"" +
        marko_attr("href", href) +
        ">View Details</a></div>");
    });

    out.w("</div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/home.marko"
  };
