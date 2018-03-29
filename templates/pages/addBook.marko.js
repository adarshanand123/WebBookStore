// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/addBook.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var pageData = input.pageData;

  var action;

  if(pageData && pageData.category) {
  	action = `/manageBooks/${pageData.id}`
  } else {
  	action =  "/manageBooks/add"
  }

  out.w("<form" +
    marko_attr("action", action) +
    " method=\"post\" enctype=\"multipart/form-data\"><div class=\"form-group\"><label for=\"title\">Title</label><input class=\"form-control\" type=\"text\" name=\"title\" id=\"title\"" +
    marko_attr("value", pageData && pageData.title) +
    "></div><div class=\"form-group\"><label for=\"author\">Author</label><input type=\"text\" class=\"form-control\" name=\"author\" id=\"author\"" +
    marko_attr("value", pageData && pageData.author) +
    "></div><div class=\"form-group\"><label for=\"publisher\">Publisher</label><input type=\"text\" class=\"form-control\" name=\"publisher\" id=\"publisher\"" +
    marko_attr("value", pageData && pageData.publisher) +
    "></div><div class=\"form-group\"><label for=\"price\">Price</label><input type=\"number\" class=\"form-control\" name=\"price\" id=\"price\"" +
    marko_attr("value", pageData && pageData.price) +
    "></div><div class=\"form-group\"><label for=\"category\">Category</label><select class=\"form-control\" name=\"category\" id=\"category\">");

  marko_forEach(pageData.categoryArray, function(value) {
    out.w("<option" +
      marko_attr("selected", value == pageData.category) +
      marko_attr("value", value) +
      ">" +
      marko_escapeXml(value) +
      "</option>");
  });

  out.w("</select></div><div class=\"form-group\"><label for=\"description\">Description</label><input class=\"form-control\" type=\"text\" name=\"description\" id=\"description\"" +
    marko_attr("value", pageData && pageData.description) +
    "></div><div class=\"form-group\"><label for=\"coverurl\">CoverUrl</label><input class=\"form-control\" type=\"file\" name=\"coverurl\" id=\"coverurl\"" +
    marko_attr("value", pageData && pageData.coverurl) +
    "></div><input id=\"submitform\" class=\"btn btn-primary\" type=\"submit\" value=\"Add Book\"> </form><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"/js/manageBooks.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/addBook.marko"
  };
