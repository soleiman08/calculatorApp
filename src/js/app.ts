let app = angular.module("calculatorApp", []);
app.controller("CalculatorHp", CalculatorHp);

function CalculatorHp(){
    this.resultValue = 0;
    this.ButtonClicked = function(button) {
        this.selectedOperation = button;
    }
    this.calculateResult = function(){
        let number1 = parseFloat(this.input1);
        let number2 = parseFloat(this.input2);
        if (this.selectedOperation === '+'){
            this.resultValue = number1 + number2;
        }

        else if (this.selectedOperation === '-') {
            this.resultValue = number1 - number2;
        }

        else if (this.selectedOperation === '*') {
            this.resultValue = number1 * number2;
        }

        else if (this.selectedOperation === '/') {
            this.resultValue = number1 / number2;
        }
    


    }

}