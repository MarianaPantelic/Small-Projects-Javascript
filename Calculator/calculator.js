	// This code is working just for one operation at the time. For more successive operations just use the calculate() function with 'eval' commented below
	
	'use strict';
	
	let digits = document.getElementsByClassName("button");
    let screen = document.getElementsByClassName("calc-operation")[0];
    let result = document.getElementsByClassName("calc-typed")[0];
    let arr = [];
    
    for (let i = 0; i < digits.length; i++) {

            if (digits[i].innerHTML !== "=") {
                
                digits[i].addEventListener("click", print(i));
            }
    }

    function print(i){
		
        return () => { screen.innerHTML += digits[i].innerHTML};
    }
    
    
    function empty() {
            screen.innerHTML = "";
            result.innerHTML = "";
    }
    
    /*
    function calculate() {
         return () => { result.innerHTML = eval(screen.innerHTML) }
    }   
    */

    

    function calculate() {

        switch (true) {
            case screen.innerHTML.includes("+"):
                addition();
                break;
            case screen.innerHTML.includes("-"):
                subtraction();
                break;
            case screen.innerHTML.includes("*"):
                multiplication();
                break;
            case screen.innerHTML.includes("/"):
                division();
                break;
            case screen.innerHTML.includes("%"):
                percentage();
                break;
            case screen.innerHTML.includes("P"):
                power();
                break;
        }

        return result.innerHTML;

        }

    function addition(){
        
        arr = screen.innerHTML.split("+");
        result.innerHTML = Number(arr[0]) + Number(arr[1]);
        
    }

    function subtraction(){

        arr = screen.innerHTML.split("-");
        result.innerHTML = Number(arr[0]) - Number(arr[1]);

    }


    function multiplication() {

        arr = screen.innerHTML.split("*");
        result.innerHTML = Number(arr[0]) * Number(arr[1]);

    }

    function division() {

        arr = screen.innerHTML.split("/");
        result.innerHTML = Number(arr[0]) / Number(arr[1]);

    }

    function percentage() {

        arr = screen.innerHTML.split("%");
        result.innerHTML = Number(arr[0]) / 100 * Number(arr[1]);

    }

    function power() {
        
        arr = screen.innerHTML.split("P");
        result.innerHTML = Math.pow(Number(arr[0]), Number(arr[1]));

    }

    