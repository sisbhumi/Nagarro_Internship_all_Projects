let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}

// $(document).ready(function(){

//     var res = 0;
//     var num1 = 0;
//     var num2 = 0;
//     var operator = "";
//     $("#9").on("click",function(){
//         if(operator === "")
//             num2 = 9;
//         else
//             num1 = 9; 
//         console.log(res,typeof(res));
//     })
//     $("#8").on("click",function(){
//         if(operator === "")
//             num2 = 8;
//         else
//             num1 = 8;
//     })
//     $("#7").on("click",function(){
//         if(operator === "")
//         num2 = 7;
//     else
//         num1 = 7;
//     })
//     $("#6").on("click",function(){
//         if(operator === "")
//             num2 = 6;
//         else
//             num1 = 6;
//     })
//     $("#5").on("click",function(){
//         if(operator === "")
//             num2 = 5;
//         else
//             num1 = 5;
//     })
//     $("#4").on("click",function(){
//         if(operator === "")
//             num2 = 4;
//         else
//             num1 = 4;
//     })
//     $("#3").on("click",function(){
//         if(operator === "")
//             num2 = 3;
//         else
//             num1 = 3;
//     })
//     $("#2").on("click",function(){
//         if(operator === "")
//             num2 = 2;
//         else
//             num1 = 2;
//     })
//     $("#1").on("click",function(){
//         if(operator === "")
//             num2 = 1;
//         else
//             num1 = 1;
//     })
//     $("#0").on("click",function(){
//         if(operator === "")
//         num2 = 0;
//     else
//         num1 = 0;
//     })
    
//     $("#p").on("click",function(){
//         res+="+";
//         console.log(res,typeof(res));
//     })
//     $("#m").on("click",function(){
//         res+="*";
//         console.log(res,typeof(res));
//     })
//     $("#i").on("click",function(){
//         res+="*";
//         console.log(res,typeof(res));
//     })
//     $("#d").on("click",function(){
//         res+="/";
//         console.log(res,typeof(res));
//     })
//     $("#dec").on("click",function(){
//         res+=".";
//         console.log(res,typeof(res));
//     })
//     $("#e").on("click",function(){
//         res+="=";
//         $(".input").val(res);
//         console.log(res,typeof(res));
//     })    
// })