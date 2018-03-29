// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/manageBook.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h2>Manage Books</h2><a href=\"/manageBooks/add\">Add Book</a><table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\">Id</th><th scope=\"col\">Book</th><th scope=\"col\">Category</th><th scope=\"col\"></th><th scope=\"col\"></th></tr></thead><tbody>");

  marko_forEach(input.pageData, function(bookData) {
    out.w("<tr><td>" +
      marko_escapeXml(bookData.id) +
      "</td><td>" +
      marko_escapeXml(bookData.title) +
      "</td><td>" +
      marko_escapeXml(bookData.category) +
      "</td>");

    var href = `/manageBooks/${bookData.id}`

    var bookId = `${bookData.id}`

    out.w("<td><a class=\"btn btn-primary\"" +
      marko_attr("href", href) +
      ">Edit </a></td><td class=\"deleteBook\"><button" +
      marko_attr("book-id", bookId) +
      " class=\"btn btn-danger\">Delete</button></td></tr>");
  });

  out.w("</tbody></table><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"/js/manageBooks.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/manageBook.marko"
  };
