/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var maxsnowflakes = 40;

var snowflakes =new Array();
var snowflakes_speed =new Array();


function createSnowFlake(id){    
    var uj=0;
    if (id==""||id==null){
        id="snow"+parseInt(snowflakes.length);
        uj=1;
    }       
    var kockaszel=Math.floor(Math.random() * 30) + 23;
    console.log(screen.height+" - "+screen.width);
    var top=Math.floor(Math.random()-300);
    var left=Math.floor(Math.random() * screen.width);
    var speed=Math.floor(Math.random() * 25000)+20000;
    var ani_delay=Math.random() * 3;
    //var ani_duri=Math.round((speed/15000*3)*10)/10-3;
    var ani_duri="2";
    var style="width:"+kockaszel+"px;height:"+kockaszel+"px;top:"+top+"px;left:"+left+"px;animation-delay:"+ani_delay+"s;animation-duration:"+ani_duri+"s";
    var snow = "<div id='"+id+"' class='snow' style='"+style+"'>";
    snow+="<img src=\"img/snowflakes02.png\"/>";
    snow+="</div>";
    $('body').append(snow);
    if (uj==1){
        snowflakes.push(id); 
        snowflakes_speed.push(speed);
    }
}


function createMoreSnowFlakes(){
    for (var i=0;i<maxsnowflakes;i++){
        createSnowFlake();
    }
}


function mozgatSnowflake(id,speed){
    var top = parseInt($('#'+id).css("top"));
    var left = parseInt($('#'+id).css("left"));
    
    $('#'+id).animate({
        "top" : screen.height+"px"        
    },speed,function(){
        $('#'+id).remove();
        createSnowFlake(id);
        mozgatSnowflake(id,speed);
    });
    
}

function initSnowFlakes(){
    createMoreSnowFlakes();
    for (var i=0;i<snowflakes.length;i++){
        mozgatSnowflake(snowflakes[i],snowflakes_speed[i]);
    }
}

