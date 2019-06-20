// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
// var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");

// JQuery selectors
var projectName = ".showHideToggle";

// setting hover
$(".hoverable").hover(mouseover, mouseaway);

function mouseover() {
    $(this).find(projectName).show();
}
function mouseaway() {
    $(this).find(projectName).hide();
}


$("#myImg").on("click", function () {
    window.location.href = "https://evgeniasemez.github.io/TriviaGame/";
});
$("#myImg1").on("click", function () {
    window.location.href = "https://evgeniasemez.github.io/Project-1/";
});
$("#myImg2").on("click", function () {
    window.location.href = "https://evgeniasemez.github.io/Train-Scheduler/";
});
$("#myImg3").on("click", function () {
    window.location.href = "https://github.com/evgeniasemez/liri-node-app-";
});
$("#myImg4").on("click", function () {
    window.location.href = "https://github.com/evgeniasemez/Friend-Finder---Node-and-Express-Servers";
});
$("#myImg5").on("click", function () {
    window.location.href = "https://github.com/evgeniasemez/Constructor-Word-Guess";
});
$("#myImg6").on("click", function () {
    window.location.href = "https://github.com/evgeniasemez/Project-2";
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}