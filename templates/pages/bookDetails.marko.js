// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/bookDetails.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  var pageData = input.pageData;

  var src = `/uploads/${pageData.coverurl}`

  out.w("<div style=\"width:25%;display:inline-block\"><img style=\"width:100%\"" +
    marko_attr("src", src) +
    "></div><div class=\"bookDetails\"><h2>" +
    marko_escapeXml(pageData.title) +
    "</h2><ul><li>Category: " +
    marko_escapeXml(pageData.category) +
    "</li><li>Author: " +
    marko_escapeXml(pageData.author) +
    "</li><li>Publisher: " +
    marko_escapeXml(pageData.publisher) +
    "</li></ul><h5>$ " +
    marko_escapeXml(pageData.price) +
    "</h5><p>" +
    marko_escapeXml(pageData.description) +
    "</p><a class=\"btn btn-primary\"" +
    marko_attr("data-item", pageData) +
    " id=\"addToCart\">Add To Cart</a></div>");

  var cartid = `${pageData.id}`

  out.w("</div><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"/js/manageCart.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/bookDetails.marko"
  };
