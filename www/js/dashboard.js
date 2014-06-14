var json = [{"id":"3","username":"Ben","userid":"539b8d2092d6c","text":"Test","tags":"Test,tester","geoloc":"{\"latitude\":29.5083464,\"longitude\":-98.394077}","likedby":"0","example":""},{"id":"4","username":"Ben2","userid":"539be1a799fec","text":"Firmmmmmmmmmmst Test","tags":"tnk","geoloc":"{\"latitude\":29.508391300000003,\"longitude\":-98.3940331}","likedby":"0","example":""},{"id":"5","username":"Ben2","userid":"539be1a799fec","text":"agweigwk Test","tags":"tnk","geoloc":"{\"latitude\":29.508372299999998,\"longitude\":-98.3941035}","likedby":"0","example":""}]
var pos;
var loc;

function getLocation() { //Get the user's GeoLocation
    navigator.geolocation.getCurrentPosition(function (position) { // on success
        var currentPosition = position;
        console.log(currentPosition.timestamp);
        console.log(position);
        loc = position;
        pos = JSON.stringify({"latitude":loc.coords.latitude, "longitude":loc.coords.longitude})
    }, function () { // on failure
        console.log("Phone Gap location API failed");
        console.log("code: " + error.code);
        console.log("message: " + error.message);
    });
}


var populate = function() {
    
    getLocation();
    
    $('#listings')="";
    for (var i = 1; i < json.length + 1 ; i++) {
        var listing = "<li id=\"" + i + "\"><span class=\"content\" id=\"til" + i + "\">" + (json[i].text) + "</span><hr></li>";
        $('#listings').prepend(listing);
    };
}

function makeList(){
    $('#listings')="";
    for (var i = 1; i < json.length + 1 ; i++) {
        var listing = "<li id=\"" + i + "\"><span class=\"content\" id=\"til" + i + "\">" + (json[i].text) + "</span><hr></li>";
        $('#listings').prepend(listing);
    }
}

function getAll(){
    var data;
    $.ajax({async: false, url:"http://til.helloben.co/server/getposts.php?by=all", success:function(d){data = d}})
    return data;
    makeList();
}


function getID(ids){
    var data;
    $.ajax({async: false, url:"http://localhost/SoHacksProject/server/getposts.php?by=id", data: {'id':ids}, type: 'post', complete:function(d){data = d;console.log(d)}})
    return data;
    makeList();
}

function getUser(uid){
    var data;
    $.ajax({async: false, url:"http://localhost/SoHacksProject/server/getposts.php?by=user", data: {'userid':uid}, type: 'post', complete:function(d){data = d;console.log(d)}})

    return data;
    makeList();
}

function getGeo(){
    var data;
    $.ajax({async: false, url:"http://til.helloben.co/server/getposts.php?by=geo", data:{"geo":pos}, type:"post", success:function(d){data = d}})
    return data;   
    makeList();
}

function getTag(tag){
    var data;
    $.ajax({async: false, url:"http://til.helloben.co/server/getposts.php?by=tag&tag="+tag, success:function(d){data = d}})
    return data;
    makeList();
}



window.onload = populate;