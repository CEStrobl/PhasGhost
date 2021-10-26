var frzT = document.getElementById("frzT");
var emfT = document.getElementById("emfT");
var orbT = document.getElementById("orbT");
var boxT = document.getElementById("boxT");
var writeT = document.getElementById("writeT");
var printT = document.getElementById("printT");
var dotT = document.getElementById("dotT");

var frzF = document.getElementById("frzF");
var emfF = document.getElementById("emfF");
var orbF = document.getElementById("orbF");
var boxF = document.getElementById("boxF");
var writeF = document.getElementById("writeF");
var printF = document.getElementById("printF");
var dotF = document.getElementById("dotF");

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


var defaultColor = "white";
var cancelColor = "#323342";





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





let GhostLibrary = 
[
    phantom, banshee, mare, yurei, demon, wraith, jinn, shade, ooni, revenant, poltergeist, spirit, hantu, yokai, goryo, myling, onryo, twins, raiju, obake
];

let VarLibrary =
[
    pha, ban, mar, yur, dem, wra, jin, sha, oni, rev, pol, spi, han, yok, gor, myl, onr, twi, rai, oba
];

let PerVarLibrary = 
[
    frzP, emfP, orbP, boxP, writeP, printP, dotP
];

let CheckBoxLibrary = 
[
    frzT, frzF, emfT, emfF, orbT, orbF, boxT, boxF, writeT, writeF, printT, printF, dotT, dotF
];

let EvidenceLibrary =
[
    "frz", "emf", "orb", "box", "write", "print", "dot"
];

let GhostVarLibrary = 
[
    "pha", "ban", "mar", "yur", "dem", "wra", "jin", "sha", "oni", "rev", "pol", "spi", "han", "yok", "gor", "myl", "onr", "twi", "rai", "oba"
];

let GhostNameLibrary = 
[
    "phantom", "banshee", "mare", "yurei", "demon", "wraith", "jinn", "shade", "oni", "revenant", "poltergeist", "spirit", "hantu", "yokai", "goryo", "myling", "onryo", "twins", "raiju", "obake"
];















function pageReset() {

    reset()
    visibility()

    for(i = 0; i < CheckBoxLibrary.length; i++) {

        CheckBoxLibrary[i].checked = false;

    };

    calculate()

    //unorder()
    //initiateOrder()
    //resetOrder()

    visibility()

};



function visibility(){

    for(i = 0; i < GhostLibrary.length; i++) {

        if (GhostLibrary[i].visible == false) {

            VarLibrary[i].style.color = cancelColor;

            emojiRemove(i);

        };

        if (GhostLibrary[i].visible == true) {

            VarLibrary[i].style.color = defaultColor;

            emojiBringBack(i);
            
        };

    };

};

function emojiRemove(g) {
    
    for(e = 0; e < EvidenceLibrary.length; e++) {

        if(document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]) != null) {

            if(EvidenceLibrary[e] == "frz") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "Freezing"};
            if(EvidenceLibrary[e] == "emf") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "EMF 5"};
            if(EvidenceLibrary[e] == "orb") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "Orbs"};
            if(EvidenceLibrary[e] == "box") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "Spirit Box"};
            if(EvidenceLibrary[e] == "write") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "Writing"};
            if(EvidenceLibrary[e] == "print") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "Fingerprints"};
            if(EvidenceLibrary[e] == "dot") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "D.O.T.S"};


        };

    };
    
};

function emojiBringBack(g) {
    
    for(e = 0; e < EvidenceLibrary.length; e++) {

        if(document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]) != null) {

            if(EvidenceLibrary[e] == "frz") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "❄️Freezing"};
            if(EvidenceLibrary[e] == "emf") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "🚥EMF 5"};
            if(EvidenceLibrary[e] == "orb") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "✨Orbs"};
            if(EvidenceLibrary[e] == "box") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "📟Spirit Box"};
            if(EvidenceLibrary[e] == "write") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "📖Writing"};
            if(EvidenceLibrary[e] == "print") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "🖐️Fingerprints"};
            if(EvidenceLibrary[e] == "dot") {document.getElementById(GhostVarLibrary[g]+EvidenceLibrary[e]).innerText = "❇️D.O.T.S"};


        };

    };
    
};


function reset() {

    for(i = 0; i < GhostLibrary.length; i++) {

        GhostLibrary[i].visible = true;

    };

    visibility()

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

        

        if (PerVarLibrary[i].innerHTML > 70 ) {
            
            PerVarLibrary[i].style.color = '#4d744e';
        }

        else if (PerVarLibrary[i].innerHTML > 50 ) {
            
            PerVarLibrary[i].style.color = '#797d3e';
        }

        else if (PerVarLibrary[i].innerHTML > 30 ) {

            PerVarLibrary[i].style.color = '#b8711a';
        }

        else if (PerVarLibrary[i].innerHTML > 10 ) {

            PerVarLibrary[i].style.color = '#843312';
        }
        else if (PerVarLibrary[i].innerHTML < 10 ) {

            PerVarLibrary[i].style.color = '#4F2926';
        };

        PerVarLibrary[i].innerHTML += "%";
    };

};

calculate()


function check() {

    // reset
    reset()

    visibility()

    
    checkboxes()
    

    visibility()

    calculate()

    //generateOrder()

};


function checkboxes() {

    if (frzT.checked == true) {

        frzF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].frz == false) {GhostLibrary[i].visible = false};
        };
    };
    
    if (emfT.checked == true) {

        emfF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].emf == false) {GhostLibrary[i].visible = false};
        };
        
    }; 

    if (orbT.checked == true) {

        orbF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].orb == false) {GhostLibrary[i].visible = false };
        };

    };

    if (boxT.checked == true) {

        boxF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].box == false) { GhostLibrary[i].visible = false};
        };

    };

    if (writeT.checked == true) {

        writeF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].write == false) {GhostLibrary[i].visible = false};
        };

    };

    if (printT.checked == true) {

        printF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].print == false) {GhostLibrary[i].visible = false};
        };
    
    };

    if (dotT.checked == true) {

        dotF.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].dot == false) {GhostLibrary[i].visible = false};
        };
    
    };





    if (frzF.checked == true) {

        frzT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].frz == true) {GhostLibrary[i].visible = false};
        };
    } 

    if (emfF.checked == true) {

        emfT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].emf == true) { GhostLibrary[i].visible = false};
        };
    
    } 

    if (orbF.checked == true) { 

        orbT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].orb == true) {GhostLibrary[i].visible = false};
        };

    };

    if (boxF.checked == true) {

        boxT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].box == true) {GhostLibrary[i].visible = false};
        };
      
    };

    if (writeF.checked == true) {

        writeT.checked = false
    
        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].write == true) {GhostLibrary[i].visible = false};
        };
    
    };

    if (printF.checked == true) {

        printT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].print == true) {GhostLibrary[i].visible = false};
        };

    };

    if (dotF.checked == true) {

        dotT.checked = false

        for(i = 0; i < GhostLibrary.length; i++) {
            if (GhostLibrary[i].dot == true) {GhostLibrary[i].visible = false};
        };

    };

};







function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    //if its open then close it
    if(document.getElementById(cityName).style.display == "block") {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        };
    
        tablinks = document.getElementsByClassName("tablinks");
    
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        };
    } else {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        };
    
        tablinks = document.getElementsByClassName("tablinks");
    
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        };
    
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    };
  
    
};






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

            console.log(GhostLibrary[r].name,GhostLibrary[r].index, " placed in row ", newOrder.length);

        };
        
    };

    for (let i = 0; i < GhostLibrary.length; i++) {
        
        //put all the rest of these losers in last
        if(GhostLibrary[i].visible == false) {

            newOrder.push(GhostLibrary[i].index);

            console.log(GhostLibrary[i].name,GhostLibrary[i].index, " placed in row ", newOrder.length);
        };
        
    };

    console.log("[ generate order ] ", newOrder);

    initiateOrder()

    
};




function initiateOrder() {

    if (newOrder.length == 16) {

        var wrapper = document.getElementsByClassName("tab");
        var items = wrapper[0].children;
        var elements = document.createDocumentFragment()



        newOrder.forEach(function(idx) {
    	    elements.appendChild(items[idx].cloneNode(true));
        });
    
        wrapper[0].innerHTML = null;
        wrapper[0].appendChild(elements);


        //code 2
        // let wrapper=document.querySelector(".tab");
        // let children=wrapper.children;

        // for(let i=0;i<newOrder.length;i++){
        //     for(let j=0;j<newOrder.length;j++){
        //         if(i==newOrder[j]){
        //             //console.log(i, " == ", newOrder[j], children[j].id)
        //             wrapper.appendChild(children[j]);
        //             break;
        //         };
        //     };
        // };

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

    console.log(" unOrdered: ", newOrder, "\n"
                ," to ", newNewOrder);
    newOrder = newNewOrder;
    
};

function resetOrder() {

    //reset order

    // newOrder=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    newOrder = [];

};

