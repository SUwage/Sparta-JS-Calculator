
var input;
var text;
var output;

var firstInput;
var secondInput;

var input = prompt("Type 1 for Basic Calculator or 2 for Advanced Calculator");

switch(input) {
        case '1':
            text = prompt("You have selected Basic: Type 1 for Addition, 2 for Subtraction, 3 for Multiplication or 4 Division ");

            switch (text) {
                    case '1':
                        firstInput = prompt("You have selected Addition: Enter first value");
                        secondInput = prompt("Enter second value");
                        output = alert(parseInt(firstInput) + parseInt(secondInput));
                        break;

                    case '2':
                        firstInput = prompt("You have selected Subtraction: Enter first value");
                        secondInput = prompt("Enter second value");
                        output = alert(parseInt(firstInput) - parseInt(secondInput));
                        break;

                    case '3':
                        firstInput = prompt("You have selected Multiplication: Enter first value");
                        secondInput = prompt("Enter second value");
                        output = alert(parseInt(firstInput) * parseInt(secondInput));
                        break;

                    case '4':
                        firstInput = prompt("You have selected Division: Enter first value");
                        secondInput = prompt("Enter second value");
                        output = alert(parseInt(firstInput) / parseInt(secondInput));
                        break;

                    default:
                        output = alert("Please enter a value that is suggested on the prompt");
                      }
        break;

        case "2":
        text = prompt("You have selected Advanced: Type 1 for Power or 2 for Square Root");

        switch (text) {
                case '1':
                    firstInput = prompt("You have selected Power: Enter first value");
                    secondInput = prompt("Enter power value");
                    output = alert(Math.pow(parseInt(firstInput), parseInt(secondInput)));
                    break;

                case '2':
                    firstInput = prompt("You have selected Square Root: Enter your value");
                    output = alert(Math.sqrt(parseInt(firstInput)));
                    break;

                default:
                    input = alert("Please enter a value that is suggested on the prompt");
                  }
            break;

        default:
        output = alert("Please enter a value that is suggested on the prompt");
    }
