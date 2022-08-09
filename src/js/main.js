function notificClick() {
    let element = document.getElementsByClassName("notification");
    let rightBlock = document.getElementsByClassName("right-menu");
    console.log(element);
    element[0].classList.toggle("notification-active");
    rightBlock[0].classList.toggle("open");
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