values = [];

function addValue() {
    let currentInput = Number(document.getElementById("textInput").value);
    if (isNaN(currentInput)) {
        alert("The value inputted must be a number");
    }
    else {
        values.push(currentInput);
        displayArray();
    }
}

function removeValue() {
    let currentInput = Number(document.getElementById("textInput").value);
    if (isNaN(currentInput)) {
        alert("The value inputted must be a number");
    }
    else {
        if (values.includes(currentInput)) {
            values.splice(values.indexOf(currentInput), 1);
            displayArray();
        }
        else {
            alert("The value inputted is not in the array");
        }
    }
}

function displayArray() {
    output = '<p>';

    for (i = 0; i < values.length; i++) {
        output += values[i];
        if (i != (values.length - 1)) {
            output += ', ';
        }
    }

    output += '</p>';
    document.getElementById('dataOutput').innerHTML = output;
}

function calculateMean() {
    let sum = 0;

    for (i = 0; i < values.length; i++) {
        sum += values[i];
    }
    let mean = sum / values.length;
    output = '<p>' + 'Mean: ' + mean + '</p>';
    document.getElementById('meanOutput').innerHTML = output;
}