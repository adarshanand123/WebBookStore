// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/cart.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<button style=\"margin-bottom: 20px\" class=\"btn btn-primary\" id=\"emptyCard\">Empty Cart</button><table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\">Title</th><th scope=\"col\">Quantity</th><th scope=\"col\">Total</th></tr></thead><tbody>");

  marko_forEach(input.pageData, function(singleItem) {
    out.w("<tr><td>" +
      marko_escapeXml(singleItem.title) +
      "</td><td>" +
      marko_escapeXml(singleItem.quantity) +
      "</td><td>" +
      marko_escapeXml(singleItem.price) +
      "</td></tr>");
  });

  out.w("</tbody></table><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"/js/manageCart.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/cart.marko"
  };
