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

var frzP = document.getElementById("frzP");
var emfP = document.getElementById("emfP");
var orbP = document.getElementById("orbP");
var boxP = document.getElementById("boxP");
var writeP = document.getElementById("writeP");
var printP = document.getElementById("printP");


var pha = document.getElementById("pha");
var ban = document.getElementById("ban")
var mar = document.getElementById("mar");
var yur = document.getElementById("yur");
var dem = document.getElementById("dem");
var wra = document.getElementById("wra");
var jin = document.getElementById("jin");
var sha = document.getElementById("sha");
var oni = document.getElementById("oni");
var rev = document.getElementById("rev");
var pol = document.getElementById("pol");
var spi = document.getElementById("spi");


var defaultColor = "white"
var cancelColor = "#323342"





let phantom = {
    name: "phantom",
    visible: true,
    frz: true,
    emf: true,
    orb: true,
    box: false,
    write: false,
    print: false,
}

let banshee = {
    name: "banshee",
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: false,
    write: false,
    print: true,
}

let mare = {
    name: "mare",
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: false,
}

let yurei = {
    name: "yurei",
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: false,
    write: true,
    print: false,
}

let demon = {
    name: "demon",
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: false,
}

let wraith = {
    name: "wraith",
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: false,
    print: true,
}

let jinn = {
    name: "jinn",
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: true,
    write: false,
    print: false,
}

let shade = {
    name: "shade",
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: false,
    write: true,
    print: false,
}

let ooni = {
    name: "oni",
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: true,
    write: true,
    print: false,
}

let revenant = {
    name: "revenant",
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: false,
    write: true,
    print: true,
}

let poltergeist = {
    name: "poltergeist",
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: true,
}

let spirit = {
    name: "spirit",
    visible: true,
    frz: false,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: true,
}




let GhostLibrary = 
[
    phantom, banshee, mare, yurei, demon, wraith, jinn, shade, ooni, revenant, poltergeist, spirit
]

let VarLibrary =
[
    pha, ban, mar, yur, dem, wra, jin, sha, oni, rev, pol, spi,
]
let PerVarLibrary = 
[
    frzP, emfP, orbP, boxP, writeP, printP
]





function visibility(){

    for(i = 0; i < GhostLibrary.length; i++) {

        if (GhostLibrary[i].visible == false) {

            VarLibrary[i].style.color = cancelColor

        }

        if (GhostLibrary[i].visible == true) {

            VarLibrary[i].style.color = defaultColor

        }

    }

}


function reset() {

    for(i = 0; i < GhostLibrary.length; i++) {

        GhostLibrary[i].visible = true

    }

}


function calculate() {

    let visTally = 0

    let frzTally = 0
    let emfTally = 0
    let orbTally = 0
    let boxTally = 0
    let writeTally = 0
    let printTally = 0

    for(i = 0; i < GhostLibrary.length; i++) {

        if(GhostLibrary[i].visible == true) {

            visTally++

            if(GhostLibrary[i].frz == true) {frzTally++}
            if(GhostLibrary[i].emf == true) {emfTally++}
            if(GhostLibrary[i].orb == true) {orbTally++}
            if(GhostLibrary[i].box == true) {boxTally++}
            if(GhostLibrary[i].write == true) {writeTally++}
            if(GhostLibrary[i].print == true) {printTally++}

        }
    }




    frzP.innerHTML = Math.round((frzTally/visTally)*100)
    emfP.innerHTML = Math.round((emfTally/visTally)*100)
    orbP.innerHTML = Math.round((orbTally/visTally)*100)
    boxP.innerHTML = Math.round((boxTally/visTally)*100)
    writeP.innerHTML = Math.round((writeTally/visTally)*100)
    printP.innerHTML = Math.round((printTally/visTally)*100)


    for(i = 0; i < PerVarLibrary.length; i++) {



        if (PerVarLibrary[i].innerHTML > 70 ) {

            PerVarLibrary[i].style.color = '#4d744e'
        }

        else if (PerVarLibrary[i].innerHTML > 50 ) {

            PerVarLibrary[i].style.color = '#797d3e'
        }

        else if (PerVarLibrary[i].innerHTML > 30 ) {

            PerVarLibrary[i].style.color = '#b8711a'
        }

        else if (PerVarLibrary[i].innerHTML > 10 ) {

            PerVarLibrary[i].style.color = '#843312'
        }
        else if (PerVarLibrary[i].innerHTML < 10 ) {

            PerVarLibrary[i].style.color = '#4F2926'
        }

        PerVarLibrary[i].innerHTML += "%"

    }

}
calculate()



function check() {

    // reset

    visibility()

    reset()


    if (frzT.checked == true){

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].frz == false) {

                GhostLibrary[i].visible = false

            }

        }

    } 


    if (emfT.checked == true){

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].emf == false) {

                GhostLibrary[i].visible = false

            }

        }

    } 

    if (orbT.checked == true){

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].orb == false) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (boxT.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].box == false) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (writeT.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].write == false) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (printT.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].print == false) {

                GhostLibrary[i].visible = false

            }

        }

    }


    if (frzF.checked == true){

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].frz == true) {

                GhostLibrary[i].visible = false

            }

        }
    } 

    if (emfF.checked == true){

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].emf == true) {

                GhostLibrary[i].visible = false

            }

        }

    } 

    if (orbF.checked == true){ 

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].orb == true) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (boxF.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].box == true) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (writeF.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].write == true) {

                GhostLibrary[i].visible = false

            }

        }

    }

    if (printF.checked == true) {

        for(i = 0; i < GhostLibrary.length; i++) {

            if (GhostLibrary[i].print == true) {

                GhostLibrary[i].visible = false

            }

        }

    }


    visibility()

    calculate()

}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
  
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



