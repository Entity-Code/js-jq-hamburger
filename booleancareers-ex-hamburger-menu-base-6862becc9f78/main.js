var icon = $(".header-right > a");
var close = $(".close");

var menu = $(".hamburger-menu");

//apri menu
icon.click(showMenu);

//chiudi menu
close.click(hideMenu);














// functions
function showMenu() {
   menu.fadeIn(500);
}
function hideMenu(){
   menu.fadeOut(500);
}
