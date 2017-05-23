var url = 'http://jpub.tistory.com';

var savepath = 'test.html';

var http = require('http');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function(res){
    res.pipe(outfile); // 다운로드한 데이터를 저장하도록 지정
    res.on('end', function(){
        outfile.close();
        console.log('ok');
    })

});
