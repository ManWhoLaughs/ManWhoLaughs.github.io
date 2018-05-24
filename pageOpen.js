let trig = 0;            
function openPage(pageName, elmnt, color) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; ++i) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; ++i) {
            tablinks[i].style.backgroundColor = "";
        }
        if (elmnt.style.opacity == "") {
            return;
        }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();




function exchange(x) {
    x.classList.toggle("change");
    OpCl();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("bg").style.display = "";
    document.getElementById("bg").style.animation = 'fadeEff 1s';
    document.getElementById("bg").style.opacity = 1;
    document.getElementsByClassName("btn-group")[0].style.display = "block";
    trig = 1;
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "10%";
    document.getElementById("bg").style.opacity = 0;
    document.getElementById("bg").style.animation = 'defade 0.5s';
    document.getElementsByClassName("btn-group")[0].style.display = "none";
    trig = 0;
}

function OpCl() {
    if (trig === 1) {
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; ++i) {
            tablinks[i].style.opacity = 0;
            tablinks[i].style.cursor = "";
        }
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; ++i) {
            tabcontent[i].style.opacity = 0;
            tabcontent[i].style.display = "none";
        }
        closeNav();            
        document.getElementById("bg").style.display = "none";
    } else {
        openNav();
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; ++i) {
            tablinks[i].style.opacity = 1;
            tablinks[i].style.cursor = "pointer";
        }
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; ++i) {
            tabcontent[i].style.opacity = 1;
        }
        document.getElementById("defaultOpen").click();
    }
}

