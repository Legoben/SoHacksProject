
var populate = function() {

    for (var i = 1; i < 50 ; i++) {
        var listing = "<li id=\"" + i + "\">Today I learned <span id=\"til" + i + "\"><a href=\"http://thecatapi.com\"><img src=\"http://thecatapi.com/api/images/get?format=src&type=gif\"></a></span><hr></li>";
        $('#listings').prepend(listing);
    };
}
window.onload = populate;