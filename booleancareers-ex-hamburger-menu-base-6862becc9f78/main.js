// var icon = $(".header-right");
// var close = $(".close");
//
// var menu = $(".hamburger-menu");
//
// //apri menu
// icon.click(showMenu);
//
// //chiudi menu
// close.click(hideMenu);


$('i.fas.fa-bars').click(function(){
   $('.hamburger-menu').addClass("active");
});
$('i.fas.fa-times').click(function(){
   $('.hamburger-menu').removeClass("active");
});












// // functions
// function showMenu() {
//    menu.fadeIn(500);
// }
// function hideMenu(){
//    menu.fadeOut(500);
// }
