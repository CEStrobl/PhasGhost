var frzT1 = document.getElementById("frzT1");
var emfT1 = document.getElementById("emfT1");
var orbT1 = document.getElementById("orbT1");
var boxT1 = document.getElementById("boxT1");
var writeT1 = document.getElementById("writeT1");
var printT1 = document.getElementById("printT1");
var dotT1 = document.getElementById("dotT1");

var frzT2 = document.getElementById("frzT2");
var emfT2 = document.getElementById("emfT2");
var orbT2 = document.getElementById("orbT2");
var boxT2 = document.getElementById("boxT2");
var writeT2 = document.getElementById("writeT2");
var printT2 = document.getElementById("printT2");
var dotT2 = document.getElementById("dotT2");

var frzF1 = document.getElementById("frzF1");
var emfF1 = document.getElementById("emfF1");
var orbF1 = document.getElementById("orbF1");
var boxF1 = document.getElementById("boxF1");
var writeF1 = document.getElementById("writeF1");
var printF1 = document.getElementById("printF1");
var dotF1 = document.getElementById("dotF1");


var frzP = document.getElementById("frzP");
var emfP = document.getElementById("emfP");
var orbP = document.getElementById("orbP");
var boxP = document.getElementById("boxP");
var writeP = document.getElementById("writeP");
var printP = document.getElementById("printP");
var dotP = document.getElementById("dotP");


var pha = document.getElementById("pha");
var ban = document.getElementById("ban");
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
var han = document.getElementById("han");
var yok = document.getElementById("yok");
var gor = document.getElementById("gor");
var myl = document.getElementById("myl");
var onr = document.getElementById("onr");
var twi = document.getElementById("twi");
var rai = document.getElementById("rai");
var oba = document.getElementById("oba");
var mim = document.getElementById("mim");
var mor = document.getElementById("mor");
var tha = document.getElementById("tha");
var deo = document.getElementById("deo");


var defaultColor = "white";
var cancelColor = "#323342";
var crossColor = "#708C79"





let phantom = {
    name: "phantom",
    index: 2,
    visible: true,
    frz: false,
    emf: false,
    orb: false,
    box: true,
    write: false,
    print: true,
    dot: true
};

let banshee = {
    name: "banshee",
    index: 4,
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: false,
    write: false,
    print: true,
    dot: true
};

let mare = {
    name: "mare",
    index: 6,
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: true,
    write: true,
    print: false,
    dot: false
};

let yurei = {
    name: "yurei",
    index: 10,
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: false,
    write: false,
    print: false,
    dot: true
};

let demon = {
    name: "demon",
    index: 9,
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: false,
    write: true,
    print: true,
    dot: false
};

let wraith = {
    name: "wraith",
    index: 1,
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: true,
    write: false,
    print: false,
    dot: true
};

let jinn = {
    name: "jinn",
    index: 5,
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: false,
    write: false,
    print: true,
    dot: false
};

let shade = {
    name: "shade",
    index: 8,
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: false,
    write: true,
    print: false,
    dot: false
};

let ooni = {
    name: "oni",
    index: 11,
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: false,
    write: false,
    print: false,
    dot: true
};

let revenant = {
    name: "revenant",
    index: 7,
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: false,
    write: true,
    print: false,
    dot: false
};

let poltergeist = {
    name: "poltergeist",
    index: 3,
    visible: true,
    frz: false,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: true,
    dot: false
};

let spirit = {
    name: "spirit",
    index: 0,
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: true,
    write: true,
    print: false,
    dot: false
};

let hantu = {
    name: "hantu",
    index: 13,
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: false,
    write: false,
    print: true,
    dot: false
};

let yokai = {
    name: "yokai",
    index: 12,
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: false,
    dot: true
};

let goryo = {
    name: "goryo",
    index: 14,
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: false,
    write: false,
    print: true,
    dot: true
};

let myling = {
    name: "myling",
    index: 15,
    visible: true,
    frz: false,
    emf: true,
    orb: false,
    box: false,
    write: true,
    print: true,
    dot: false
};

let onryo = {
    name: "onryo",
    index: 16,
    visible: true,
    frz: true,
    emf: false,
    orb: true,
    box: true,
    write: false,
    print: false,
    dot: false
};

let twins = {
    name: "twins",
    index: 17,
    visible: true,
    frz: true,
    emf: true,
    orb: false,
    box: true,
    write: false,
    print: false,
    dot: false
};

let raiju = {
    name: "raiju",
    index: 18,
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: false,
    write: false,
    print: false,
    dot: true
};
let obake = {
    name: "obake",
    index: 19,
    visible: true,
    frz: false,
    emf: true,
    orb: true,
    box: false,
    write: false,
    print: true,
    dot: false
};
let mimic = {
    name: "mimic",
    index: 20,
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: false,
    print: true,
    dot: false
};
let moroi = {
    name: "moroi",
    index: 21,
    visible: true,
    frz: true,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: false,
    dot: false
};
let thaye = {
    name: "thaye",
    index: 22,
    visible: true,
    frz: false,
    emf: false,
    orb: true,
    box: false,
    write: true,
    print: false,
    dot: true
};
let deogen = {
    name: "deogen",
    index: 23,
    visible: true,
    frz: false,
    emf: false,
    orb: false,
    box: true,
    write: true,
    print: false,
    dot: true
};


let GhostLibraryOLD = 
[
    phantom, banshee, mare, yurei, demon, wraith, jinn, shade, ooni, revenant, poltergeist, spirit, hantu, yokai, goryo, myling, onryo, twins, raiju, obake
];
let VarLibraryOLD =
[
    pha, ban, mar, yur, dem, wra, jin, sha, oni, rev, pol, spi, han, yok, gor, myl, onr, twi, rai, oba
];

let GhostVarLibraryOLD = 
[
    "pha", "ban", "mar", "yur", "dem", "wra", "jin", "sha", "oni", "rev", "pol", "spi", "han", "yok", "gor", "myl", "onr", "twi", "rai", "oba"
];

let GhostNameLibraryOLD = 
[
    "phantom", "banshee", "mare", "yurei", "demon", "wraith", "jinn", "shade", "oni", "revenant", "poltergeist", "spirit", "hantu", "yokai", "goryo", "myling", "onryo", "twins", "raiju", "obake"
];
let PerVarLibrary = 
[
    frzP, emfP, orbP, boxP, writeP, printP, dotP
];

let CheckBoxLibraryd = 
[
    frzT1, frzT2, emfT1, emfT2, orbT1, orbT2, boxT1, boxT2, 
    writeT1, writeT2, printT1, printT2, dotT1, dotT2,
    frzF1, emfF1, orbF1, boxF1, writeF1, printF1, dotF1,
];

let CheckBoxLibrary = 
[
    frzT1, emfT1,orbT1, boxT1, 
    writeT1, printT1, dotT1,
    frzF1, emfF1, orbF1, boxF1, writeF1, printF1, dotF1,
];

let EvidenceLibrary =
[
    "frz", "emf", "orb", "box", "write", "print", "dot"
];

let GhostLibrary = 
[
    phantom, banshee, mare, yurei, demon, wraith, jinn, shade, ooni, revenant, 
    poltergeist, spirit, hantu, yokai, goryo, myling, onryo, twins, raiju, 
    obake, mimic, moroi, thaye, deogen
];

let VarLibrary =
[
    pha, ban, mar, yur, dem, wra, jin, sha, oni, rev, pol, spi, han, yok, gor, 
    myl, onr, twi, rai, oba, mim, mor, tha, deo
];


let GhostVarLibrary = 
[
    "pha", "ban", "mar", "yur", "dem", "wra", "jin", "sha", "oni", "rev", "pol", 
    "spi", "han", "yok", "gor", "myl", "onr", "twi", "rai", "oba", "mim", "mor", 
    "tha", "deo"
];

let GhostNameLibrary = 
[
    "phantom", "banshee", "mare", "yurei", "demon", "wraith", "jinn", "shade", 
    "oni", "revenant", "poltergeist", "spirit", "hantu", "yokai", "goryo", 
    "myling", "onryo", "twins", "raiju", "obake",  "mimic", "moroi", "thaye", 
    "deogen"
];






function saveBox() {
    // for (let i = 0; i < CheckBoxLibrary.length; i++) {
    //     let g = CheckBoxLibrary[i]
    //     if (localStorage.g == "true") {
    //         CheckBoxLibrary[i].checked = true
    //     } else if (localStorage.CheckBoxLibrary[i] == "false") {
    //         CheckBoxLibrary[i].checked = false
    //     }
    
    // }

    if(localStorage.frzT1 == "true") {frzT1.checked = true}
    if(localStorage.emfT1 == "true") {emfT1.checked = true}
    if(localStorage.orbT1 == "true") {orbT1.checked = true}
    if(localStorage.dotT1 == "true") {dotT1.checked = true}
    if(localStorage.printT1 == "true") {printT1.checked = true}
    if(localStorage.writeT1 == "true") {writeT1.checked = true}
    if(localStorage.boxT1 == "true") {boxT1.checked = true}

    if(localStorage.frzF1 == "true") {frzF1.checked = true}
    if(localStorage.emfF1 == "true") {emfF1.checked = true}
    if(localStorage.orbF1 == "true") {orbF1.checked = true}
    if(localStorage.dotF1 == "true") {dotF1.checked = true}
    if(localStorage.printF1 == "true") {printF1.checked = true}
    if(localStorage.writeF1 == "true") {writeF1.checked = true}
    if(localStorage.boxF1 == "true") {boxF1.checked = true}

    check()
}







function pageReset() {

    for(i = 0; i < CheckBoxLibrary.length; i++) {

        CheckBoxLibrary[i].checked = false;

    };

    localStorage.removeItem("frzT1")
    localStorage.removeItem("emfT1")
    localStorage.removeItem("orbT1")
    localStorage.removeItem("boxT1")
    localStorage.removeItem("writeT1")
    localStorage.removeItem("printT1")
    localStorage.removeItem("dotT1")

    localStorage.removeItem("frzF1")
    localStorage.removeItem("emfF1")
    localStorage.removeItem("dotF1")
    localStorage.removeItem("boxF1")
    localStorage.removeItem("orbF1")
    localStorage.removeItem("printF1")
    localStorage.removeItem("writeF1")

    reset()
    calculate()

    unorder()
    initiateOrder()
    resetOrder()

    getXCount() 
    visibility()

};



function visibility(){

    getXCount() 
    checkXGhost()

    for(i = 0; i < GhostLibrary.length; i++) {

        if (GhostLibrary[i].visible == false) {
           
            VarLibrary[i].style.color = cancelColor;
            hide(document.getElementById(GhostVarLibrary[i]))
            emojiRemove(i);
            // for(e = 0; e < EvidenceLibrary.length; e++) {
            //     let ev = document.getElementById(GhostVarLibrary[i]+EvidenceLibrary[e])
            //     if(ev != null) {unCrossOut(ev); ev.style.color = cancelColor};
            // };
            // unCrossOut(VarLibrary[i])

        };

        if (GhostLibrary[i].visible == true) {
            // for(e = 0; e < EvidenceLibrary.length; e++) {
            //     let ev = document.getElementById(GhostVarLibrary[i]+EvidenceLibrary[e])
            //     if(ev != null) {ev.style.color=defaultColor};
            // };
            VarLibrary[i].style.color = defaultColor;
            show(document.getElementById(GhostVarLibrary[i]))
            emojiBringBack(i);
            
        };

    };

    //console.log("✨Visibility✨")

};

function emojiRemove(g) {
    
    for(e = 0; e < EvidenceLibrary.length; e++) {

        if(document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]) != null) {

            hideSymbol(g)

            let ev = document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e])

            if(EvidenceLibrary[e] == "frz") {ev.innerText = "Freezing"};
            if(EvidenceLibrary[e] == "emf") {ev.innerText = "EMF 5"};
            if(EvidenceLibrary[e] == "orb") {ev.innerText = "Orbs"};
            if(EvidenceLibrary[e] == "box") {ev.innerText = "Spirit Box"};
            if(EvidenceLibrary[e] == "write") {ev.innerText = "Writing"};
            if(EvidenceLibrary[e] == "print") {ev.innerText = "Fingerprints"};
            if(EvidenceLibrary[e] == "dot") {ev.innerText = "D.O.T.S"};


        };

    };
    
};

function emojiBringBack(g) {
    
    for(e = 0; e < EvidenceLibrary.length; e++) {

        if(document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]) != null) {

            showSymbol(g)

            let ev = document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e])

            if(EvidenceLibrary[e] == "frz") {ev.innerText = "❄️Freezing"};
            if(EvidenceLibrary[e] == "emf") {ev.innerText = "🚥EMF 5"};
            if(EvidenceLibrary[e] == "orb") {ev.innerText = "✨Orbs"};
            if(EvidenceLibrary[e] == "box") {ev.innerText = "📟Spirit Box"};
            if(EvidenceLibrary[e] == "write") {ev.innerText = "📖Writing"};
            if(EvidenceLibrary[e] == "print") {ev.innerText = "🖐️Fingerprints"};
            if(EvidenceLibrary[e] == "dot") {ev.innerText = "❇️D.O.T.S"};


        };

    };
    
};


function reset() {

    for(i = 0; i < GhostLibrary.length; i++) {

        GhostLibrary[i].visible = true;

    };

    visibility()

};



function check() {

    // reset
    reset()
    
    checkboxes()

    visibility()

    calculate()

    generateOrder()

    visibility()

};


function checkboxes() {

    if (frzT1.checked == true) {

        frzF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].frz == false) {GhostLibrary[i].visible = false};
        };
    };
    
    if (emfT1.checked == true) {

        emfF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].emf == false) {GhostLibrary[i].visible = false};
        };
    }; 

    if (orbT1.checked == true) {

        orbF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].orb == false) {GhostLibrary[i].visible = false };
        };
    };

    if (boxT1.checked == true) {

        boxF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].box == false) { GhostLibrary[i].visible = false};
        };
    };

    if (writeT1.checked == true) {

        writeF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].write == false) {GhostLibrary[i].visible = false};
        };
    };

    if (printT1.checked == true) {

        printF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].print == false) {GhostLibrary[i].visible = false};
        };
    
    };

    if (dotT1.checked == true) {

        dotF1.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].dot == false) {GhostLibrary[i].visible = false};
        };
    };

    // for (let i = 0; i < CheckBoxLibrary.length; i++) {
    //     if (CheckBoxLibrary[i].checked == true) {
    //         localStorage.CheckBoxLibrary[i] = true
    //     } else if (CheckBoxLibrary[i].checked == false) {
    //         localStorage.CheckBoxLibrary[i] = false
    //     }
        
    // }

    if (frzT1.checked == true) {localStorage.frzT1 = true}
    if (emfT1.checked == true) {localStorage.emfT1 = true}
    if (orbT1.checked == true) {localStorage.orbT1 = true}
    if (boxT1.checked == true) {localStorage.boxT1 = true}
    if (dotT1.checked == true) {localStorage.dotT1 = true}
    if (printT1.checked == true) {localStorage.printT1 = true}
    if (writeT1.checked == true) {localStorage.writeT1 = true}

    if (frzF1.checked == true) {localStorage.frzF1 = true}
    if (emfF1.checked == true) {localStorage.emfF1 = true}
    if (orbF1.checked == true) {localStorage.orbF1 = true}
    if (boxF1.checked == true) {localStorage.boxF1 = true}
    if (dotF1.checked == true) {localStorage.dotF1 = true}
    if (printF1.checked == true) {localStorage.printF1 = true}
    if (writeF1.checked == true) {localStorage.writeF1 = true}

    if (frzT1.checked == false) {localStorage.frzT1 = false}
    if (emfT1.checked == false) {localStorage.emfT1 = false}
    if (orbT1.checked == false) {localStorage.orbT1 = false}
    if (boxT1.checked == false) {localStorage.boxT1 = false}
    if (dotT1.checked == false) {localStorage.dotT1 = false}
    if (printT1.checked == false) {localStorage.printT1 = false}
    if (writeT1.checked == false) {localStorage.writeT1 = false}

    if (frzF1.checked == false) {localStorage.frzF1 = false}
    if (emfF1.checked == false) {localStorage.emfF1 = false}
    if (orbF1.checked == false) {localStorage.orbF1 = false}
    if (boxF1.checked == false) {localStorage.boxF1 = false}
    if (dotF1.checked == false) {localStorage.dotF1 = false}
    if (printF1.checked == false) {localStorage.printF1 = false}
    if (writeF1.checked == false) {localStorage.writeF1 = false}



};

function calculate() {

    let visTally = 0;

    let frzTally = 0;
    let emfTally = 0;
    let orbTally = 0;
    let boxTally = 0;
    let writeTally = 0;
    let printTally = 0;
    let dotTally = 0;

    for(i = 0; i < GhostLibrary.length; i++) {

        if(GhostLibrary[i].visible == true) {

            visTally++

            if(GhostLibrary[i].frz == true) {frzTally++};
            if(GhostLibrary[i].emf == true) {emfTally++};
            if(GhostLibrary[i].orb == true) {orbTally++};
            if(GhostLibrary[i].box == true) {boxTally++};
            if(GhostLibrary[i].write == true) {writeTally++};
            if(GhostLibrary[i].print == true) {printTally++};
            if(GhostLibrary[i].dot == true) {dotTally++};

        };
    };




    frzP.innerHTML = Math.round((frzTally/visTally)*100);
    emfP.innerHTML = Math.round((emfTally/visTally)*100);
    orbP.innerHTML = Math.round((orbTally/visTally)*100);
    boxP.innerHTML = Math.round((boxTally/visTally)*100);
    writeP.innerHTML = Math.round((writeTally/visTally)*100);
    printP.innerHTML = Math.round((printTally/visTally)*100);
    dotP.innerHTML = Math.round((dotTally/visTally)*100);


    for(i = 0; i < PerVarLibrary.length; i++) {

        

        if (PerVarLibrary[i].innerHTML >= 70 ) {
            
            PerVarLibrary[i].style.color = '#4d744e';
        }
        else if (PerVarLibrary[i].innerHTML >= 60 ) {
            
            PerVarLibrary[i].style.color = '#737D3E';
        }

        else if (PerVarLibrary[i].innerHTML >= 50 ) {
            
            PerVarLibrary[i].style.color = '#7B883A';
        }
        else if (PerVarLibrary[i].innerHTML >= 40 ) {

            PerVarLibrary[i].style.color = '#A89B25';
        }

        else if (PerVarLibrary[i].innerHTML >= 30 ) {

            PerVarLibrary[i].style.color = '#B08620';
        }
        else if (PerVarLibrary[i].innerHTML >= 20 ) {

            PerVarLibrary[i].style.color = '#9E5216';
        }

        else if (PerVarLibrary[i].innerHTML >= 10 ) {

            PerVarLibrary[i].style.color = '#843312';
        }
        else if (PerVarLibrary[i].innerHTML <= 10 ) {

            PerVarLibrary[i].style.color = '#4F2926';
        };

        PerVarLibrary[i].innerHTML += "%";
    };

};

calculate()

let newOrder=[];

function generateOrder() {

    unorder()
    initiateOrder()
    resetOrder()



    //redefine order

    for (let r = 0; r < GhostLibrary.length; r++) {
        
        //find whats visible, put it in the array first
        if(GhostLibrary[r].visible == true) {

            newOrder.push(GhostLibrary[r].index);

            //console.log(GhostLibrary[r].name,GhostLibrary[r].index, " placed in row ", newOrder.length);

        };
        
    };

    for (let i = 0; i < GhostLibrary.length; i++) {
        
        //put all the rest of these losers in last
        if(GhostLibrary[i].visible == false) {

            newOrder.push(GhostLibrary[i].index);

            //console.log(GhostLibrary[i].name,GhostLibrary[i].index, " placed in row ", newOrder.length);
        };
        
    };

    //console.log("[ generate order ] ", newOrder);
    //console.log("[ generate order ] ", showMeOrder(newOrder));

    initiateOrder()

    
};

function showMeOrder(myOrder) {

    if(myOrder.length === GhostLibrary.length){

        let finalMessage = ""

        for(i = 0; i < GhostLibrary.length; i++){

            finalMessage += (" [" + myOrder[i] + " " + GhostLibrary[myOrder[i]].name + "] ")

        }

        return finalMessage

    } else {

        return myOrder

    }

}




function initiateOrder() {

    if (newOrder.length == GhostLibrary.length) {

        var wrapper = document.getElementsByClassName("tab");
        var items = wrapper[0].children;
        var elements = document.createDocumentFragment()

        newOrder.forEach(function(idx) {
    	    elements.appendChild(items[idx].cloneNode(true));
        });
    
        wrapper[0].innerHTML = null;
        wrapper[0].appendChild(elements);
    };
};

let newNewOrder = [];

function unorder() {

    

    //plan: take the weird jumbled newOrder array,
    // and reorder it so that the ghosts are in the right order

    //double for loops
    //one for normal counting
    //one to go through the index of the array
    //if count == number in the array
    //then put the index of that number in a new array


    newNewOrder = [];


    //normal count
    for (let count = 0; count < newOrder.length; count++) {
        
        //array cycle
        for (let i = 0; i < newOrder.length; i++) {
            
            if(count == newOrder[i]) {

                newNewOrder.push(i);

            };
            
        };
        
    };

    ////console.log(" unOrdered: ", newOrder, "\n"
    //            ," to ", newNewOrder
    //);
    
    //console.log(" unOrdered: ", showMeOrder(newOrder), "\n"
    //             ," to ", showMeOrder(newNewOrder)
    // );
    newOrder = newNewOrder;
    
};

function resetOrder() {

    //reset order

    // newOrder=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    newOrder = [];

};



function show(ghost) {

    //let ghost = document.getElementById(document.getElementById("ghostInput").value)

    //console.log(ghost)

    ghost.style.color = defaultColor
    emojiBringBack(ghost);

}

function hide(ghost) {

    //let ghost = document.getElementById(document.getElementById("ghostInput").value)

    //console.log(ghost)

    ghost.style.color = cancelColor
    emojiRemove(ghost);

}


function showButton() {

    let ghost = document.getElementById(document.getElementById("ghostInput").value)

    ghost.style.color = defaultColor
    emojiBringBack(ghost);

}

function hideButton() {

    let ghost = document.getElementById(document.getElementById("ghostInput").value)

    ghost.style.color = cancelColor
    emojiRemove(ghost);

}



function hideSymbol(a) {

    let yn = ["No", "Yes"]

    for (let i = 0; i < yn.length; i++) {

        let id = GhostVarLibrary[a]+yn[i]
       
        if(document.getElementById(id) != null) {document.getElementById(id).innerHTML = ""}
    }

}

function showSymbol(a) {

    let yn = ["No", "Yes"]

    for (let i = 0; i < yn.length; i++) {

        let id = GhostVarLibrary[a]+yn[i]

        //console.log(id)
       
        if(document.getElementById(id) != null) {
            if(yn[i] == "Yes") {
                document.getElementById(id).innerHTML = "✅"
            }
            if(yn[i] == "No") {
                document.getElementById(id).innerHTML = "⚠️"
            }
        }
    }

}

function getXCount() {
    let xCount = 0
    if (frzF1.checked == true) {xCount++};
    if (emfF1.checked == true) {xCount++};
    if (orbF1.checked == true) {xCount++};
    if (boxF1.checked == true) {xCount++};
    if (writeF1.checked == true) {xCount++};
    if (printF1.checked == true) {xCount++};
    if (dotF1.checked == true) {xCount++};

    //console.log(xCount)

    return xCount
}

function getXs() {
    let Xs = []
    if (frzF1.checked == true) {Xs.push("frz")};
    if (emfF1.checked == true) {Xs.push("emf")};
    if (orbF1.checked == true) {Xs.push("orb")};
    if (boxF1.checked == true) {Xs.push("box")};
    if (writeF1.checked == true) {Xs.push("write")};
    if (printF1.checked == true) {Xs.push("print")};
    if (dotF1.checked == true) {Xs.push("dot")};

    return Xs
}


function checkXGhost() {

    if(getXCount() >= 2) {
        
        let Xs = []
        if (frzF1.checked == true) {Xs.push("frz")};
        if (emfF1.checked == true) {Xs.push("emf")};
        if (orbF1.checked == true) {Xs.push("orb")};
        if (boxF1.checked == true) {Xs.push("box")};
        if (writeF1.checked == true) {Xs.push("write")};
        if (printF1.checked == true) {Xs.push("print")};
        if (dotF1.checked == true) {Xs.push("dot")};

        for (let i = 0; i < GhostLibrary.length; i++) {
            let ghost = GhostLibrary[i];
            
            for (let o = 0; o < Xs.length; o++) {
                let ev1 = Xs[o];

                if(ev1 == "frz") {
                    if(ghost.frz == true) {part2(ghost, Xs, "frz");}
                }
                if(ev1 == "emf") {
                    if(ghost.emf == true) {part2(ghost, Xs, "emf")}
                }
                if(ev1 == "orb") {
                    if(ghost.orb == true) {part2(ghost, Xs, "orb")}
                }
                if(ev1 == "box") {
                    if(ghost.box == true) {part2(ghost, Xs, "box")}
                }
                if(ev1 == "print") {
                    if(ghost.print == true) {part2(ghost, Xs, "print")}
                }
                if(ev1 == "write") {
                    if(ghost.write == true) {part2(ghost, Xs, "write")}
                }
                if(ev1 == "dot") {
                    if(ghost.dot == true) {part2(ghost, Xs, "dot")}
                }
                
            }
            
        }

    }

    
}


function part2(ghost, Xs, part1) {

    for (let u = 0; u < Xs.length; u++) {

        let ev1 = Xs[u];
        //console.log("part 2 for...", ev1)

        if(ev1 == "frz" && ev1 != part1) {
            if(ghost.frz == true) {ghost.visible = false}
        }
        if(ev1 == "emf" && ev1 != part1) {
            if(ghost.emf == true) {ghost.visible = false}
        }
        if(ev1 == "orb" && ev1 != part1) {
            if(ghost.orb == true) {ghost.visible == false}
        }
        if(ev1 == "box" && ev1 != part1) {
            if(ghost.box == true) {ghost.visible = false}
        }
        if(ev1 == "print" && ev1 != part1) {
            if(ghost.print == true) {ghost.visible = false}
        }
        if(ev1 == "write" && ev1 != part1) {
            if(ghost.write == true) {ghost.visible = false}
        }
        if(ev1 == "dot" && ev1 != part1) {
            if(ghost.dot == true) {ghost.visible = false}
        }
                            
        
    }

    
}

function crossOut(id) {
    id.style.textDecoration = "line-through"
    //console.log(id.id, id.style.textDecoration)
}

function unCrossOut(id) {
    //console.log(id.id, id.style.textDecoration)
    id.style.textDecoration = "none"
}

function elim(short, i) {
    // if (short.style.color != "rgb(50, 51, 66)") {
    //     if(short.style.textDecoration == "" || short.style.textDecoration == "none"){
    //         crossOut(short)
    //         for(e = 0; e < EvidenceLibrary.length; e++) {
    //             let ev = document.getElementById(GhostVarLibrary[i]+EvidenceLibrary[e])
    //             if(ev != null) {crossOut(ev)};
    //         };
    //         emojiRemove(i)
    //     } else if (short.style.textDecoration == "line-through") {
    //         for(e = 0; e < EvidenceLibrary.length; e++) {
    //             let ev = document.getElementById(GhostVarLibrary[i]+EvidenceLibrary[e])
    //             if(ev != null) {unCrossOut(ev)};
    //         };
    //         unCrossOut(short)
    //         emojiBringBack(i)
    //     } else {console.log("[ERROR]  style = ", short.style.textDecoration)}
    // }
}


