// function openBox() {
//     var box = document.getElementById("box");
//     var btn = document.getElementById("btn");
//     box.classList.toggle("open");
//     btn.classList.toggle("active");
//     // btn.click();
// }

function init() {
    $(".btn").on('click', function() {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
    });
}

init();