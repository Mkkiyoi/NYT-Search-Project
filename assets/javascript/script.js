var term;

// fq=source:(“The New York Times”)
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=zbzkmBYIuRrtoA4mQv0dQh6jZt4pObby&q=' + term + '&fq=source:(“The New York Times”)'

$.ajax({
   url: queryURL,
   method: 'GET'
}).then(function(response){
   console.log(response)
});