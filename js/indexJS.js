var score = 0;


$("#score").html(score + '$');




function on(param) {
    $(param).css({"border":"4px solid #855411","border-radius":"13px","color":"#855411"});
    console.log(param);
}
function out(param) {
    $(param).css({"border":"3px solid #c3761a","border-radius":"5px","color":"#c3761a"});
    console.log(param);
}

$("#stSelc").hover(
    function() {
        on("#stSec");
    }, function() {
        out("#stSec");
    }
);
$("#ndSelc").hover(
    function() {
        on("#ndSec");
    }, function() {
        out("#ndSec");
    }
);
$("#rdSelc").hover(
    function() {
        on("#rdSec");
    }, function() {
        out("#rdSec");
    }
);
$("#fthSelc").hover(
    function() {
        on("#fthSec");
    }, function() {
        out("#fthSec");
    }
);
$("#fithSelc").hover(
    function() {
        on("#fithSec");
    }, function() {
        out("#fithSec");
    }
);
$("#sthSelc").hover(
    function() {
        on("#sthSec");
    }, function() {
        out("#sthSec");
    }
);

//------------------------------------Fieldy-----------------------------------------



$("#fithSelc").click(
    function() {
        $("#title").css({"display":"none"});
        $("#fieldy").css({"display":"block"});
    }
);
/*var a;
var b = 0;
setInterval(
function() {
    a = Math.floor((Math.random() * 10) + 1);
    b = Math.floor((Math.random() * 26) + 1);
    if (a == 1) {a = "a"};
    if (a == 2) {a = "b"};
    if (a == 3) {a = "c"};
    if (a == 4) {a = "d"};
    if (a == 5) {a = "e"};
    if (a == 6) {a = "f"};
    if (a == 7) {a = "g"};
    if (a == 8) {a = "h"};
    if (a == 9) {a = "i"};
    if (a == 10) {a = "j"};
    $('#' + a + b).css({"background-color":"blue"});
    console.log(a + '/' + b);
}, 1000);*/


function row(a) {
    if (a == 1) { return a = "a"};
    if (a == 2) { return a = "b"};
    if (a == 3) { return a = "c"};
    if (a == 4) { return a = "d"};
    if (a == 5) { return a = "e"};
    if (a == 6) { return a = "f"};
    if (a == 7) { return a = "g"};
    if (a == 8) { return a = "h"};
    if (a == 9) { return a = "i"};
    if (a == 10) { return a = "j"};
}

function unRow(a) {
    if (a == "a") { return a = 1};
    if (a == "b") { return a = 2};
    if (a == "c") { return a = 3};
    if (a == "d") { return a = 4};
    if (a == "e") { return a = 5};
    if (a == "f") { return a = 6};
    if (a == "g") { return a = 7};
    if (a == "h") { return a = 8};
    if (a == "i") { return a = 9};
    if (a == "j") { return a = 10};
}

var c;
var i = 0;

perso = {
    name: "perso",
    pMove: 4,
    skin: "blue",
    drag: "grey",
    x: 1,
    y: 1,
    alive: true,
    move: function() {
        $('#' + row(this.y) + this.x).css({"background-color":this.drag});
        c = Math.floor((Math.random() * this.pMove) + 1);
        if (c == 2 && this.x < 26) {
            this.x++;
        } else if (c == 4 && this.x > 1) {
            this.x--;
        } else if (c == 1 && this.y > 1) {
            this.y--;
        } else if (c == 3 && this.y < 10) {
            this.y++;
        }
        $('#' + row(this.y) + this.x).css({"background-color":this.skin});
        //console.log(row(this.y) + '/' + this.x);
        //console.log(c);
    },
    meet: function(type, inter){
        $('#' + row(this.y) + this.x).css({"background-color":this.drag});
        this.y = Math.floor((Math.random() * 10) + 1);
        this.x = Math.floor((Math.random() * 26) + 1);
        $('#' + row(this.y) + this.x).css({"background-color":this.skin});
    }
};



function meeting(type, inter){
    $("#navBarF > h1").after("<h2 id=\"haha\">" + type + "</h2>");
    clearInterval(gameInt);
    setTimeout(
            function() {
                console.log(2);
                $("#haha").remove()
                robertPi.meet();
                theta.meet();
                i++;
                console.log(i);
                game();
            }, inter
        );
}


var robertPi = Object.create(perso);

var theta = Object.create(perso);
theta.pMove = 6;
theta.skin = "green";
theta.drag = "aqua";

var child = Object.create(perso);
child.skin = "black";
child.drag = "grey";
child.pMove = 8;
child.x = 0;
child.y = 0;

var child1 = Object.create(perso);
child1.skin = "white";
child1.drag = "grey";
child1.pMove = 8;
child1.x = 27;
child1.y = 11;

var gameInt;
game();

function game(){
    gameInt = setInterval(
        function(){
            robertPi.move();
            theta.move();
            if (i >= 1){child.move();}
            if (i >= 2){child1.move();}
            if (robertPi.x == theta.x && robertPi.y == theta.y) {
                meeting("match", 5000);
                console.log(1);
                }
            if ((robertPi.x == child.x && robertPi.y == child.y) || (theta.x == child.x && theta.y == child.y)) {
                meeting("love child", 2000);
                console.log(3);
            }
            if (child.x == child1.x && child.y == child1.y){
                meeting("friendly", 3000);
                console.log(4);
            }
        }, 200
    );
}

