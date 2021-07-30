$(document).ready(function () {

    var getAQuote = function () {
        $.ajaxSetup({ cache: false });
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (json) {
            $("#quote-text,#source").fadeOut(400, function () {
                $("#quote-text").html(json[0].content.replace(/<\/?[^>]+>/gi, "") + '"').fadeIn();
                $("#source").html("- " + json[0].title.replace(/<\/?[^>]+>/gi, "")).fadeIn();
                var tweet = $("<div/>").html("https://twitter.com/intent/tweet?text=" + json[0].content.replace(/<\/?[^>]+>/gi, "") + " - " + json[0].title).text();
                $("#tweetIt").attr("href", tweet);
            });
        });
    }

    $("#newQuote").click(getAQuote);
    getAQuote();
});