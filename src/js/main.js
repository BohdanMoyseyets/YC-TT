function notificClick() {
    let element = document.getElementsByClassName("notification");
    let rightBlock = document.getElementsByClassName("right-menu");
    let rmcb = document.getElementsByClassName("right-menu__close-btn");
    console.log(element);
    element[0].classList.toggle("notification-active");
    rightBlock[0].classList.toggle("open");
    rmcb[0].classList.toggle("active");
}

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tablink_active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tablink_active";
}
function msgClick() {
    let popup = document.getElementsByClassName("popup");
    let popup_bg = document.getElementsByClassName("popup_bg");
    popup[0].classList.toggle("popup__open");
    popup_bg[0].classList.toggle("popup__open");
    
}
function closePopupClick() {
    let popup = document.getElementsByClassName("popup");
    let popup_bg = document.getElementsByClassName("popup_bg");
    popup[0].classList.remove("popup__open");
    popup_bg[0].classList.remove("popup__open");
    
}
function closeLeftClick() {
    let left = document.getElementsByClassName("leftbar");
    left[0].classList.toggle("hide");
    
}