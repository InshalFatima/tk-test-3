// // write your JS code here

function add() {
    let txtNumber = document.getElementById("txtNumber");
    let newNumber = parseInt(txtNumber.value) + 1;
    txtNumber.value = newNumber;
    document.querySelector(".timer").innerHTML = newNumber * 2;
}

function subtract() {
    let txtNumber = document.getElementById("txtNumber");
    let newNumber = parseInt(txtNumber.value) - 1;
    txtNumber.value = newNumber;
    if (newNumber < 0){
        newNumber = 0;
       document.querySelector(".timer").innerHTML = newNumber * 4; 
    }
    Numbersub.value = newNumber;
    document.querySelector(".timer").innerHTML = newNumber * 4;
}





