function onClientLoad() {
    gapi.client.load('youtube', 'v3', youtube);
}
function youtube() {
    gapi.client.setApiKey('AIzaSyBqoezH3uCdrv3fOpiBPT7W8Js6HX54RuY');
}
function search() {
    var x = document.getElementById('query').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: x,
        type: 'video'
    });
    request.execute(function (response) {
        var str = JSON.stringify(response.result,'',10);
        var test = JSON.parse(str);
        var playlist = [];
        for (var i = 0; i <5; i++) {
            debugger;
            var result = test.items[i].id.videoId;
            var url = "https://www.youtube.com/embed/" + result;
            // url.link("url");
            playlist.push(url);
            //if(result &&)
            // document.getElementById('video1').src = url;

        }
        var OuRHtml = "";
        var successurl = playlist;
        var OuRHtml = "";
        var data = [];
        for (var itm in successurl) {
            
            var url = successurl[itm];
            OuRHtml += '<div class="innerdiv">' + '<img src="' + test.items[itm].snippet.thumbnails.default.url + '" alt = "youtube Tutorial"  style="margin-left:10px;margin-top:5px;width:140;height:auto" />' + '</br>' + '<p>&nbsp;&nbsp;channel Name : ' + test.items[itm].snippet.title + '</p>' + '</br>' + '&nbsp;&nbsp;Published At :' + test.items[itm].snippet.publishedAt + '</br>' + '&nbsp;&nbsp;<a href="' + url + '"target="_blank"style="width:140px height:140px;word-wrap:breakword">' + test.items[itm].snippet.channelTitle + '</a>' + '</div>';
           
            if (i % 4 == 0) {
                i = 1;
                //alert(wrapper.innerHTML);
                data.push(OuRHtml);
                OuRHtml = " ";
            }
            
        }
        document.write(OuRHtml);

    });

}


