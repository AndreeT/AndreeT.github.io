var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfBoxes=0;
var sumOfCredits=0;

init();

function init() {
    generateButton.addEventListener("click", generate); //se apeleaza o functie in momentul apasarii click-ului
    calculateButton.addEventListener("click", calculateCredits);//event-handlere
}

function createInputBox(elementID) {

    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementID;

    var labelElem=document.createElement("label");
    var text = document.createTextNode("Credit");
    labelElem.appendChild(text);
    labelElem.appendChild(inputElem);

    inputContainerElement.appendChild(labelElem);


}

function createBoxes(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {
    numberOfBoxes = document.getElementById("numberOfBoxes").value;//document=obiectul cel mai sus din dom(ceva cu html)
    createBoxes(numberOfBoxes);
}

function calculateCredits(){

    for(var i=1;i<=numberOfBoxes;i++)
    {

        var inputElemValue= document.getElementById("input"+i).value;
        sumOfCredits+=parseInt(inputElemValue);
        console.log(inputElemValue);

    }
    console.log(sumOfCredits);


}




