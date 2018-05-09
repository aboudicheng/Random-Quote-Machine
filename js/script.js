var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';

function getQuote() {
  $.ajax({
    method: 'GET',
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function (data, textStatus) {
      console.log("success");
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      currentQuote = data[0].content;
      currentAuthor = data[0].title;
      var color = Math.floor(Math.random() * colors.length);

      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".quote-button").animate({
        backgroundColor: colors[color]
      }, 1000);

      $(".quote-text").animate({
        height: 'hide'
      }, 1000,
        function () {
          $(this).animate({
            height: 'show'
          }, 500);
          $('#text').html(currentQuote);
        });

      $(".quote-author").animate({
        height: 'hide'
      }, 1000,
        function () {
          $(this).animate({
            height: 'show'
          }, 500);
          $('#author').html(currentAuthor);
        });

    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('error');
    },
    cache: false,
  })
}

$(document).ready(function () {
  getQuote();
  $("#new-quote").on("click", getQuote);
});
