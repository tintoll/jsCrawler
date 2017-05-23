// 호출 
download('http://jpub.tistory.com/539','spring.html',function(){
    console.log('Ok spring.html');
});
download('http://jpub.tistory.com/537','angular.html',function(){
    console.log('Ok angular.html');
});


// url을 받아서 savepath에 다운로드 하는 함수
function download(url, savepath, callback) {
    var http = require('http');
    var fs = require('fs');

    var outfile = fs.createWriteStream(savepath);

    http.get(url, function(res){
        res.pipe(outfile); // 다운로드한 데이터를 저장하도록 지정
        res.on('end', function(){
            outfile.close();
            callback();
        })

    });
}
