
var frzT = document.getElementById("frzT");
var emfT = document.getElementById("emfT");
var orbT = document.getElementById("orbT");
var boxT = document.getElementById("boxT");
var writeT = document.getElementById("writeT");
var printT = document.getElementById("printT");

var frzF = document.getElementById("frzF");
var emfF = document.getElementById("emfF");
var orbF = document.getElementById("orbF");
var boxF = document.getElementById("boxF");
var writeF = document.getElementById("writeF");
var printF = document.getElementById("printF");




// Phantom
var ph1 = document.getElementById("ph1");
var ph2 = document.getElementById("ph2");
var ph3 = document.getElementById("ph3");
var ph4 = document.getElementById("ph4");

// Banshee
var ba1 = document.getElementById("ba1");
var ba2 = document.getElementById("ba2");
var ba3 = document.getElementById("ba3");
var ba4 = document.getElementById("ba4");

// Mare
var ma1 = document.getElementById("ma1");
var ma2 = document.getElementById("ma2");
var ma3 = document.getElementById("ma3");
var ma4 = document.getElementById("ma4");

// Yurei
var yu1 = document.getElementById("yu1");
var yu2 = document.getElementById("yu2");
var yu3 = document.getElementById("yu3");
var yu4 = document.getElementById("yu4");

// Demon
var de1 = document.getElementById("de1");
var de2 = document.getElementById("de2");
var de3 = document.getElementById("de3");
var de4 = document.getElementById("de4");

// Wraith
var wr1 = document.getElementById("wr1");
var wr2 = document.getElementById("wr2");
var wr3 = document.getElementById("wr3");
var wr4 = document.getElementById("wr4");

// Jinn
var ji1 = document.getElementById("ji1");
var ji2 = document.getElementById("ji2");
var ji3 = document.getElementById("ji3");
var ji4 = document.getElementById("ji4");

// Shade
var sh1 = document.getElementById("sh1");
var sh2 = document.getElementById("sh2");
var sh3 = document.getElementById("sh3");
var sh4 = document.getElementById("sh4");

// Oni
var on1 = document.getElementById("on1");
var on2 = document.getElementById("on2");
var on3 = document.getElementById("on3");
var on4 = document.getElementById("on4");

// Revenant
var re1 = document.getElementById("re1");
var re2 = document.getElementById("re2");
var re3 = document.getElementById("re3");
var re4 = document.getElementById("re4");

// Poltergeist
var po1 = document.getElementById("po1");
var po2 = document.getElementById("po2");
var po3 = document.getElementById("po3");
var po4 = document.getElementById("po4");

// Spirit
var sp1 = document.getElementById("sp1");
var sp2 = document.getElementById("sp2");
var sp3 = document.getElementById("sp3");
var sp4 = document.getElementById("sp4");


var defaultColor = "white"
var cancelColor = "#46485d"



function check() {

    // reset


    


    // .style.color = defaultColor;
    // .style.color = cancelColor

    // Phantom
    ph1.style.color = defaultColor;
    ph2.style.color = defaultColor;
    ph3.style.color = defaultColor;
    ph4.style.color = defaultColor;

    // Banshee
    ba1.style.color = defaultColor;
    ba2.style.color = defaultColor;
    ba3.style.color = defaultColor;
    ba4.style.color = defaultColor;

    // Mare
    ma1.style.color = defaultColor;
    ma2.style.color = defaultColor;
    ma3.style.color = defaultColor;
    ma4.style.color = defaultColor;

    // Yurei
    yu1.style.color = defaultColor;
    yu2.style.color = defaultColor;
    yu3.style.color = defaultColor;
    yu4.style.color = defaultColor;

    // Demon
    de1.style.color = defaultColor;
    de2.style.color = defaultColor;
    de3.style.color = defaultColor;
    de4.style.color = defaultColor;

    // Wraith
    wr1.style.color = defaultColor;
    wr2.style.color = defaultColor;
    wr3.style.color = defaultColor;
    wr4.style.color = defaultColor;

    // Jinn
    ji1.style.color = defaultColor;
    ji2.style.color = defaultColor;
    ji3.style.color = defaultColor;
    ji4.style.color = defaultColor;

    // Shade
    sh1.style.color = defaultColor;
    sh2.style.color = defaultColor;
    sh3.style.color = defaultColor;
    sh4.style.color = defaultColor;

    // Oni
    on1.style.color = defaultColor;
    on2.style.color = defaultColor;
    on3.style.color = defaultColor;
    on4.style.color = defaultColor;

    // Revenant
    re1.style.color = defaultColor;
    re2.style.color = defaultColor;
    re3.style.color = defaultColor;
    re4.style.color = defaultColor;

    // Poltergeist
    po1.style.color = defaultColor;
    po2.style.color = defaultColor;
    po3.style.color = defaultColor;
    po4.style.color = defaultColor;

    // Spirit
    sp1.style.color = defaultColor;
    sp2.style.color = defaultColor;
    sp3.style.color = defaultColor;
    sp4.style.color = defaultColor;



    if (frzT.checked == true){

            // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;

    // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;

    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;

    // Poltergeist
    po1.style.color = cancelColor;
    po2.style.color = cancelColor;
    po3.style.color = cancelColor;
    po4.style.color = cancelColor;

    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;

    } 
    
    if (emfT.checked == true){

        // Mare
    ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

    // Yurei
    yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Demon
    de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;

    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

     // Poltergeist
     po1.style.color = cancelColor;
    po2.style.color = cancelColor;
    po3.style.color = cancelColor;
    po4.style.color = cancelColor;

    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;

    } 

    if (orbT.checked == true){

        // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

        // Demon
    de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;
        
    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

        // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;

    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;
      
    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;

    }

    if (boxT.checked == true) {

        // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

    // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

    // Yurei
    yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;


    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;


    }

    if (writeT.checked == true) {

        // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

    // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

    // Mare
    ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

    // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;


    // Poltergeist
    po1.style.color = cancelColor;
    po2.style.color = cancelColor;
    po3.style.color = cancelColor;
    po4.style.color = cancelColor;


    }

    if (printT.checked == true) {

    // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

     // Mare
     ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

     // Yurei
     yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Demon
    de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;


    // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;

    // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;



    }


    if (frzF.checked == true){

        // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

    // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

    // Mare
    ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

    // Yurei
    yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Demon
    de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;

    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

    } 

    if (emfF.checked == true){

        // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

    // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

    // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;

    // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;

    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;

    } 

    if (orbF.checked == true){ 

         // Phantom
    ph1.style.color = cancelColor;
    ph2.style.color = cancelColor;
    ph3.style.color = cancelColor;
    ph4.style.color = cancelColor;

    // Mare
    ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

    // Yurei
    yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;

    // Poltergeist
    po1.style.color = defaultColor;
    po2.style.color = defaultColor;
    po3.style.color = defaultColor;
    po4.style.color = defaultColor;
    }

    if (boxF.checked == true) {

         // Mare
    ma1.style.color = cancelColor;
    ma2.style.color = cancelColor;
    ma3.style.color = cancelColor;
    ma4.style.color = cancelColor;

     // Demon
     de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;

    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

    // Jinn
    ji1.style.color = cancelColor;
    ji2.style.color = cancelColor;
    ji3.style.color = cancelColor;
    ji4.style.color = cancelColor;

    // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;

     // Poltergeist
     po1.style.color = cancelColor;
    po2.style.color = cancelColor;
    po3.style.color = cancelColor;
    po4.style.color = cancelColor;

    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;

    }

    if (writeF.checked == true) {

         // Yurei
    yu1.style.color = cancelColor;
    yu2.style.color = cancelColor;
    yu3.style.color = cancelColor;
    yu4.style.color = cancelColor;

    // Demon
    de1.style.color = cancelColor;
    de2.style.color = cancelColor;
    de3.style.color = cancelColor;
    de4.style.color = cancelColor;

    // Shade
    sh1.style.color = cancelColor;
    sh2.style.color = cancelColor;
    sh3.style.color = cancelColor;
    sh4.style.color = cancelColor;

    // Oni
    on1.style.color = cancelColor;
    on2.style.color = cancelColor;
    on3.style.color = cancelColor;
    on4.style.color = cancelColor;

    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;

    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;


    }

    if (printF.checked == true) {

        // Banshee
    ba1.style.color = cancelColor;
    ba2.style.color = cancelColor;
    ba3.style.color = cancelColor;
    ba4.style.color = cancelColor;

    // Wraith
    wr1.style.color = cancelColor;
    wr2.style.color = cancelColor;
    wr3.style.color = cancelColor;
    wr4.style.color = cancelColor;

    // Revenant
    re1.style.color = cancelColor;
    re2.style.color = cancelColor;
    re3.style.color = cancelColor;
    re4.style.color = cancelColor;

    // Poltergeist
    po1.style.color = cancelColor;
    po2.style.color = cancelColor;
    po3.style.color = cancelColor;
    po4.style.color = cancelColor;

    // Spirit
    sp1.style.color = cancelColor;
    sp2.style.color = cancelColor;
    sp3.style.color = cancelColor;
    sp4.style.color = cancelColor;

    }



}





var acc = document.getElementsByClassName("accordion");
var i;



for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.border = "2px solid transparent";
            // acc.style.marg = "0px";
            // panel.style.marg = "0px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.border = "2px solid #1F4068";
            // acc.style.marg = "10px";
            // panel.style.marg = "10px";
        }
    });
}




// var reset = document.getElementById("reset")
// var evidence = document.getElementById("evidence")

// reset.style.width = evidence.style.width


// document.write(evidence.style.width)
// document.write("evidence") 