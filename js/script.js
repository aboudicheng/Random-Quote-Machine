$(document).ready(function() {
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  $("#new-quote").on("click", function() {
    $.ajax({
      method: 'GET',
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success : function(data, textStatus) {
        console.log('success');

        $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(data.quote);
        });

        $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(data.author);
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


    .done(function(output) {
          $("#text").html(output[0].content);
          $("#author").html(output[0].title);
        });
  });
});
