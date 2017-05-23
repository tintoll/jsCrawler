var client = require('cheerio-httpcli');

var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function(err, $, res){
	if(err) {
		console.log('error : '+err);
		return;
	}

	var body = $.html();
	console.log(body);
});