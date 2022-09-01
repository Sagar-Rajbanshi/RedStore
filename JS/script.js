// for nabbar show and hide
let res_links = document.getElementById("res_links");
res_links.style.maxHeight = "0px";

function showNav() {
    if (res_links.style.maxHeight === "0px") {
        res_links.style.maxHeight = "160px";
    } else {
        res_links.style.maxHeight = "0px";
    }
}

function hideNav() {
    if (res_links.style.maxHeight === "160px") {
        res_links.style.maxHeight = "0px";
    }
}
// ---------------cart page js---------------
$(".tableRow").find(".detail_btn").click(function() {
    $(this).parent().parent().parent().parent().next().toggleClass("d-none");
    $(this).children().toggleClass("bi-caret-up");
});
