var UI = require('./views/ui');

var app = function(){
  var url = "http://localhost:3000/quotes";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return ;
  var quoteString = this.responseText;
  var quotes = JSON.parse(quoteString);
  var ui = new UI(quotes);
}

window.onload = app;