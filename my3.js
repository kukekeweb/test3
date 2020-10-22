function play_se2(){
    var 替え歌 海の幽霊 = new Audio('替え歌 海の幽霊.mp3');
    替え歌 海の幽霊.play();
}


$(function(){
    $('#3曲目').click(play_se2);
});