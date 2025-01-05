var menu_icon = document.getElementById("menu-icon");
var menu_item = document.getElementById("navBar");

menu_icon.addEventListener("click", function () {
    menu_item.classList.toggle("active");
});