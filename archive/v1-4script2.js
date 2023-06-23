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


var ghosts = 
[
"phantom", "banshee", "mare", "yurei", "demon", "wraith", 
"jinn", "shade", "oni", "revenant", "poltergeist", "spirit"
]

var frzG = 
[
"phantom", "banshee", "mare", "yurei", "demon", "wraith"
]

var emfG = 
[
"phantom", "banshee", "jinn", "shade", "oni", "revenant",
]

var orbG = 
[
"phantom", "mare", "yurei", "jinn", "shade", "poltergeist"
]

var boxG = 
[
"mare", "demon", "wraith", "shade", "oni", "poltergeist", "spirit"
]

var writeG = 
[
"yurei", "demon", "shade", "oni", "revenant", "spirit"
]

var printG = 
[
"banshee", "wraith", "revenant", "poltergeist", "spirit"
]

var newGhosts = 
[
"phantom", "banshee", "mare", "yurei", "demon", "wraith", 
"jinn", "shade", "oni", "revenant", "poltergeist", "spirit"
]






let phantom = {
    visible: true,
    frz: true,
    emf: true,
    orb: true,
    box: false,
    write: false,
    print: false,
}

let banshee = {
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: false,
    write: false,
    print: true,
}

let mare = {
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: false,
}

let yurei = {
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: false,
    write: true,
    print: false,
}

let demon = {
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: false,
}

let wraith = {
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: false,
    print: true,
}

let jinn = {
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: true,
    write: false,
    print: false,
}

let shade = {
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: false,
    write: true,
    print: false,
}

let ooni = {
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: true,
    write: true,
    print: false,
}

let revenant = {
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: false,
    write: true,
    print: true,
}

let poltergeist = {
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: true,
}

let spirit = {
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
phantom, banshee, mare, yurei, demon, wraith, jinn, shade, oni, revenant, poltergeist, spirit
]







function calculate() {

    //initial percentages

    newGhosts = 
    [
    "phantom", "banshee", "mare", "yurei", "demon", "wraith", 
    "jinn", "shade", "oni", "revenant", "poltergeist", "spirit"
    ]

    frzP.innerHTML = Math.round((frzG.length/ghosts.length)*100) + "%"
    emfP.innerHTML = Math.round((emfG.length/ghosts.length)*100) + "%"
    orbP.innerHTML = Math.round((orbG.length/ghosts.length)*100) + "%"
    boxP.innerHTML = Math.round((boxG.length/ghosts.length)*100) + "%"
    writeP.innerHTML = Math.round((writeG.length/ghosts.length)*100) + "%"
    printP.innerHTML = Math.round((printG.length/ghosts.length)*100) + "%"


    if (frzT.checked == true) {

        console.log("newGhosts before: ", newGhosts)
        compare(frzG, newGhosts, 1)
        console.log("newGhosts after: ", newGhosts)


    }

    if (emfT.checked == true) {

        console.log("newGhosts before: ", newGhosts)
        compare(emfG, newGhosts, 1)
        console.log("newGhosts after: ", newGhosts)


    }


}




//calculate()


function check() {

    // reset

    calculate()

    pha.style.color = defaultColor
    ban.style.color = defaultColor
    mar.style.color = defaultColor
    yur.style.color = defaultColor
    dem.style.color = defaultColor
    wra.style.color = defaultColor
    jin.style.color = defaultColor
    sha.style.color = defaultColor
    oni.style.color = defaultColor
    rev.style.color = defaultColor
    pol.style.color = defaultColor
    spi.style.color = defaultColor
    
    if (frzT.checked == true){

        jin.style.color = cancelColor
        sha.style.color = cancelColor
        oni.style.color = cancelColor
        rev.style.color = cancelColor
        pol.style.color = cancelColor
        spi.style.color = cancelColor

    } 
    
    
    if (emfT.checked == true){

        mar.style.color = cancelColor
        yur.style.color = cancelColor
        dem.style.color = cancelColor
        wra.style.color = cancelColor
        pol.style.color = cancelColor
        spi.style.color = cancelColor
        
    } 

    if (orbT.checked == true){

        ban.style.color = cancelColor
        dem.style.color = cancelColor
        wra.style.color = cancelColor
        oni.style.color = cancelColor
        rev.style.color = cancelColor
        spi.style.color = cancelColor

    }

    if (boxT.checked == true) {

       pha.style.color = cancelColor
       ban.style.color = cancelColor
       yur.style.color = cancelColor
       sha.style.color = cancelColor
       sha.style.color = cancelColor
       rev.style.color = cancelColor

    }

    if (writeT.checked == true) {

        pha.style.color = cancelColor
        ban.style.color = cancelColor
        mar.style.color = cancelColor
        wra.style.color = cancelColor
        jin.style.color = cancelColor
        pol.style.color = cancelColor

    }

    if (printT.checked == true) {

        pha.style.color = cancelColor
        mar.style.color = cancelColor
        yur.style.color = cancelColor
        dem.style.color = cancelColor
        jin.style.color = cancelColor
        sha.style.color = cancelColor
        oni.style.color = cancelColor
    
    }


    if (frzF.checked == true){

        pha.style.color = cancelColor
        ban.style.color = cancelColor
        mar.style.color = cancelColor
        yur.style.color = cancelColor
        dem.style.color = cancelColor
        wra.style.color = cancelColor

    } 

    if (emfF.checked == true){

        pha.style.color = cancelColor
        ban.style.color = cancelColor
        jin.style.color = cancelColor
        sha.style.color = cancelColor
        oni.style.color = cancelColor
        rev.style.color = cancelColor
    
    } 

    if (orbF.checked == true){ 

        pha.style.color = cancelColor
        mar.style.color = cancelColor
        yur.style.color = cancelColor
        jin.style.color = cancelColor
        sha.style.color = cancelColor
        pol.style.color = cancelColor

    }

    if (boxF.checked == true) {

        mar.style.color = cancelColor
        dem.style.color = cancelColor
        wra.style.color = cancelColor
        jin.style.color = cancelColor
        oni.style.color = cancelColor
        pol.style.color = cancelColor
        spi.style.color = cancelColor
      
    }

    if (writeF.checked == true) {
    
        yur.style.color = cancelColor
        dem.style.color = cancelColor
        sha.style.color = cancelColor
        oni.style.color = cancelColor
        rev.style.color = cancelColor
        spi.style.color = cancelColor
    
    }

    if (printF.checked == true) {

        ban.style.color = cancelColor
        wra.style.color = cancelColor
        rev.style.color = cancelColor
        pol.style.color = cancelColor
        spi.style.color = cancelColor

    }



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



