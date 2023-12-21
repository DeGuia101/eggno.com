// sidebar

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("sidebar").style.display = "block";

    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("sidebar").style.display = "none";

    }
}