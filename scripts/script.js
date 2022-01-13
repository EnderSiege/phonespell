/*******************************
 
 1 (no letters)
 2 ABC
 3 DEF
 4 GHI
 5 JKL
 6 MNO
 7 PQRS
 8 TUV
 9 WXYZ
 0 (no letters)
  
*******************************/ 

const inputField = document.getElementById("user-input");
const outputField = document.getElementById("output");
const optionsField = document.getElementById("options");
const messageField = document.getElementById("message");

// Ensure only numerals are entered
// src: https://stackoverflow.com/a/50419031/16762399
function numberOnly(id) {
    // Get element by id which passed as parameter within HTML element event
    var element = document.getElementById(id);
    // This removes any other character but numbers as entered by user
    element.value = element.value.replace(/[^0-9]/gi, "");
}

// Take the value from the input element
inputField.addEventListener("keyup", function(event) {
    // On Enter
    if (event.key === `Enter`) {
        console.clear();
        console.log("Got Enter!");
        clearOutputFields();
        messageField.innerHTML = "Generating...";
        let input = getInput();
        let arr = getCombinations(input);
        printIterations(arr);
        clearInputField();
    }
})

function clearInputField() {
    inputField.value = "";
}

function clearOutputFields() {
    outputField.innerHTML = "";
    optionsField.innerHTML = "";
}

function getInput() {
    console.log("Got Input!")
    const input = inputField.value;
    populateOutputField(input);
    return input;
}

// Print the div#output section

function populateOutputField(val) {
    for (let i = 0 ; i < val.length ; i++ ) {
        printOutputFieldDivs(val[i]);
        console.log("Populated Output Field!");
    } 
}

function printOutputFieldDivs(val) {
    switch (val) {
        case "0":
            printDiv0();
            break;
        case "1":
            printDiv1();
            break;
        case "2":
            printDiv2();
            break;
        case "3":
            printDiv3();
            break;
        case "4":
            printDiv4();
            break;
        case "5":
            printDiv5();
            break;
        case "6":
            printDiv6();
            break;
        case "7":
            printDiv7();
            break;
        case "8":
            printDiv8();
            break;
        case "9":
            printDiv9();
            break;
        default:
            console.log("something went wrong...");
            break;
    }
}

function printDiv0() {
    outputField.innerHTML += `
        <div class="key">
            <p>0</p>
            <p></p>
        </div>
    `;
}

function printDiv1() {
    outputField.innerHTML += `
        <div class="key">
            <p>1</p>
            <p></p>
        </div>
    `;
}

function printDiv2() {
    outputField.innerHTML += `
        <div class="key">
            <p>2</p>
            <p>ABC</p>
        </div>
    `;
}

function printDiv3() {
    outputField.innerHTML += `
        <div class="key">
            <p>3</p>
            <p>DEF</p>
        </div>
    `;
}

function printDiv4() {
    outputField.innerHTML += `
        <div class="key">
            <p>4</p>
            <p>GHI</p>
        </div>
    `;
}

function printDiv5() {
    outputField.innerHTML += `
        <div class="key">
            <p>5</p>
            <p>JKL</p>
        </div>
    `;
}

function printDiv6() {
    outputField.innerHTML += `
        <div class="key">
            <p>6</p>
            <p>MNO</p>
        </div>
    `;
}

function printDiv7() {
    outputField.innerHTML += `
        <div class="key">
            <p>7</p>
            <p>PQRS</p>
        </div>
    `;
}

function printDiv8() {
    outputField.innerHTML += `
        <div class="key">
            <p>8</p>
            <p>TUV</p>
        </div>
    `;
}

function printDiv9() {
    outputField.innerHTML += `
        <div class="key">
            <p>9</p>
            <p>WXYZ</p>
        </div>
    `;
}

// Generate all iterations
// src:  https://dev.to/seanpgallivan/solution-letter-combinations-of-a-phone-number-1n91#description

const phoneKeys = {
    '1':"1",
    '2':"abc",
    '3':"def",
    '4':"ghi",
    '5':"jkl",
    '6':"mno",
    '7':"pqrs",
    '8':"tuv",
    '9':"wxyz",
    '0':"0"
}

function getCombinations(val) {
    let len = val.length, ans = []
    if (!len) return []
    const bfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = phoneKeys[val[pos]]
            for (let i = 0; i < letters.length; i++)
                bfs(pos+1,str+letters[i]);
        }
    }
    bfs(0,"");
    return ans;
};

function printIterations(arr) {
    const array = arr;
    let printP = "";
    let count = 0;
    for (let i = 0 ; i < array.length ; i++) {
        printP += `<p>${array[i]}</p>`;
        count++;
    }
    messageField.innerHTML = `There are ${count} iterations`;
    optionsField.innerHTML = printP;
}