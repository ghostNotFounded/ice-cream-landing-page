var r = document.querySelector(':root');

function mint() {
    document.getElementById("mint").style.opacity = "1";
    document.getElementById("chocolate").style.opacity = "0";
    document.getElementById("strawberry").style.opacity = "0";
    document.getElementById("tmint").style.opacity = "1";
    document.getElementById("tchocolate").style.opacity = "0";
    document.getElementById("tstrawberry").style.opacity = "0";
    document.getElementById("main").style.background = "linear-gradient(-35deg, #8BC901, #004A01)";
    r.style.setProperty('--var', '#004A01');
}

function chocolate() {
    document.getElementById("chocolate").style.opacity = "1";
    document.getElementById("mint").style.opacity = "0";
    document.getElementById("strawberry").style.opacity = "0";
    document.getElementById("tchocolate").style.opacity = "1";
    document.getElementById("tmint").style.opacity = "0";
    document.getElementById("tstrawberry").style.opacity = "0";
    document.getElementById("main").style.background = "linear-gradient(-35deg, #72564B, #110809)";
    r.style.setProperty('--var', '#72564B');
}

function strawberry() {
    document.getElementById("strawberry").style.opacity = "1";
    document.getElementById("mint").style.opacity = "0";
    document.getElementById("chocolate").style.opacity = "0";
    document.getElementById("tstrawberry").style.opacity = "1";
    document.getElementById("tmint").style.opacity = "0";
    document.getElementById("tchocolate").style.opacity = "0";
    document.getElementById("main").style.background = "linear-gradient(-35deg, #DF393F, #920000)";
    r.style.setProperty('--var', '#DF393F');
}