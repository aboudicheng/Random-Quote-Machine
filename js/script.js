var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';

function getQuote() {
  $.ajax({
    method: 'GET',
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success : function(data, textStatus) {

      if (typeof data === 'string') {
       data = JSON.parse(data); 
     }
     currentQuote = data[0].content;
     currentAuthor = data[0].title;

     $(".quote-text").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').html(currentQuote);
    });

     $(".quote-author").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#author').html(currentAuthor);
    });

     var color = Math.floor(Math.random() * colors.length);
     $("html body").animate({
      backgroundColor: colors[color],
      color: colors[color]
    }, 1000);
     $(".button").animate({
      backgroundColor: colors[color]
    }, 1000);
   },
   error : function(xhr, textStatus, errorThrown) {
    console.log('error');
  },
  cache: false,
  })
}

$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote); 


    // .done(function(output) {
    //   $("#text").html(output[0].content);
    //   $("#author").html(output[0].title);
    // });

  });
