// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
// var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
// setting hover
$("#mouseoverImg").hover(mouseover, mouseaway);
$("#mouseoverImg1").hover(mouseover1, mouseaway1);
$("#mouseoverImg2").hover(mouseover2, mouseaway2);

function mouseover() {
    $("#firstImg").show();
}
function mouseaway() {
    $("#firstImg").hide();
}
function mouseover1() {
    $("#firstImg1").show();
}
function mouseaway1() {
    $("#firstImg1").hide();
}
function mouseover2() {
    $("#firstImg2").show();
}
function mouseaway2() {
    $("#firstImg2").hide();
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

// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}