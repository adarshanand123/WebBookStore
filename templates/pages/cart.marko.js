// Compiled using marko@4.9.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/webbookstore$0.1.0/templates/pages/cart.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeScript = marko_helpers.xs;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<script src=\"https://www.paypalobjects.com/api/checkout.js\"></script><button style=\"margin-bottom: 20px\" class=\"btn btn-primary\" id=\"emptyCard\">Empty Cart</button><table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\">Title</th><th scope=\"col\">Quantity</th><th scope=\"col\">Total</th></tr></thead><tbody>");

  marko_forEach(input.pageData, function(singleItem) {
    out.w("<tr><td>" +
      marko_escapeXml(singleItem.title) +
      "</td><td>" +
      marko_escapeXml(singleItem.quantity) +
      "</td><td>" +
      marko_escapeXml(singleItem.price) +
      "</td></tr>");
  });

  out.w("</tbody></table><div style=\"padding-top:10px,padding-bottom:10px\"><p>Total: $ " +
    marko_escapeXml(input.pageData.total) +
    "</p></div><div id=\"paypal-button\"></div><script>\r\n\tpaypal.Button.render({\r\n      env: 'sandbox', // or production\r\n\r\n\t    client: {\r\n\t        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',\r\n\t        production: '<insert production client id>'\r\n\t    },\r\n\r\n      commit: true, // Show a 'Pay Now' button\r\n\r\n      style: {\r\n        color: 'gold',\r\n        size: 'small'\r\n      },\r\n\t          // payment() is called when the button is clicked\r\n\t    payment: function(data, actions) {\r\n\r\n\t        // Make a call to the REST api to create the payment\r\n\t        return actions.payment.create({\r\n\t            payment: {\r\n\t                transactions: [\r\n\t                    {\r\n\t                        amount: { total: " +
    marko_escapeScript(input.pageData.total) +
    ", currency: 'USD' }\r\n\t                    }\r\n\t                ]\r\n\t            }\r\n\t        });\r\n\t    },\r\n\r\n\t    // onAuthorize() is called when the buyer approves the payment\r\n\t    onAuthorize: function(data, actions) {\r\n\r\n\t        // Make a call to the REST api to execute the payment\r\n\t        return actions.payment.execute().then(function() {\r\n\t            window.alert('Payment Complete!');\r\n\t        });\r\n\t    }\r\n      },'#paypal-button');\r\n</script><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"/js/manageCart.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/webbookstore$0.1.0/templates/pages/cart.marko"
  };
