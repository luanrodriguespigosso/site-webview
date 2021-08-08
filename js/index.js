window.addEventListener("scroll", function(event) {

    var scroll = this.scrollY;

    console.log(scroll);
    if (scroll >= 92) {
        document.getElementById("menu").style.background = "rgba(255, 255, 255, 0.95)";
        document.getElementById("menu").style.transition = "0.7s";
        document.getElementById("menu").style.borderBottom = "1px solid rgba(32, 19, 77, 0.2)";
        document.getElementById("logo-2").style.opacity = "0";

        /* Muda cor dos links do menu */
        document.getElementById("menuitem-1").style.color = "#20134D";
        document.getElementById("menuitem-2").style.color = "#20134D";
        document.getElementById("menuitem-3").style.color = "#20134D";
        document.getElementById("menuitem-4").style.color = "#20134D";
        document.getElementById("menuitem-5").style.color = "#20134D";
    } else if (scroll < 92) {
        document.getElementById("menu").style.background = "rgba(32, 19, 77, 0.0)";
        document.getElementById("menu").style.transition = "0.7s";
        document.getElementById("menu").style.borderBottom = "0px solid rgba(32, 19, 77, 0.2)";
        document.getElementById("logo-2").style.opacity = "1";

        /* Muda cor dos links do menu */
        document.getElementById("menuitem-1").style.color = "#FFFFFF";
        document.getElementById("menuitem-2").style.color = "#FFFFFF";
        document.getElementById("menuitem-3").style.color = "#FFFFFF";
        document.getElementById("menuitem-4").style.color = "#FFFFFF";
        document.getElementById("menuitem-5").style.color = "#FFFFFF";
    }
});
