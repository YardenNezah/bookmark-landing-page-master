var oneclick = document.querySelector('.one-click-div').style;
var intelligent = document.querySelector('.intelligent-div').style;
var share = document.querySelector('.share-bookmarks-div').style;
var firsthr = document.querySelector('.first-hr').style;
var secondhr = document.querySelector('.second-hr').style;
var thirdhr = document.querySelector('.third-hr').style;
var button = document.querySelector('.blue-button').style;

function openFeature(hide1, hide2, show, white1, white2, red) {
    hide1.display = "none";
    hide2.display = "none";
    show.display = "grid";
    white1.backgroundColor = "white";
    white2.backgroundColor = "white";
    red.backgroundColor = "#fa585c";
}
function opensimple() {
    openFeature(share, intelligent, oneclick, secondhr, thirdhr, firsthr);
}

function openspeedy() {
    openFeature(share, oneclick, intelligent, thirdhr, firsthr, secondhr);
}

function openeasy() {
    openFeature(intelligent, oneclick, share, secondhr, firsthr, thirdhr);
}


var firstAnswer = document.querySelector('.answer1').style;
var secondAnswer = document.querySelector('.answer2').style;
var thirdAnswer = document.querySelector('.answer3').style;
var fourthAnswer = document.querySelector('.answer4').style;


function openAnswers(close1, close2, close3, open) {
    close1.display = "none";
    close2.display = "none";
    close3.display = "none";
    open.display = "grid";
}

function ans1() {
    openAnswers(secondAnswer, thirdAnswer, fourthAnswer, firstAnswer);
}

function ans2() {
    openAnswers(thirdAnswer, fourthAnswer, firstAnswer, secondAnswer);
}

function ans3() {
    openAnswers(secondAnswer, fourthAnswer, firstAnswer, thirdAnswer);
}

function ans4() {
    openAnswers(secondAnswer, thirdAnswer, firstAnswer, fourthAnswer);
}

function openNav() {
    var links = document.getElementById("links").style;
    var nav = document.querySelector(".right-nav").style;

    if (links.display === "grid") {
        links.display = "none";
    } else {
        nav.display = "none";
        links.display = "grid";
        links.color = "black";
    }
}
