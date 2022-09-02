// btn.addEventListener("click", () => {
//     var copy = document.getElementById("toCopy");
//       copy.select();
//       copy.setSelectionRange(0, 1000);
//       navigator.clipboard.writeText(copy.value);
    
//         copied.style.top = "-55px"
//             copied.style.opacity = "1"
//             setTimeout(() => {
//                 copied.style.top = "-40px"
//                 copied.style.opacity = "0"
//             }, 1000);
// })
    
paste.addEventListener("click", () => {
    var paste = document.getElementById("toPaste");
        paste.value= '';

        navigator.clipboard.readText().then((text)=> {paste.value= text;});
});

$(document).ready(function(){
    $('#copy').click(function(){
        $('#toCopy').select();
        document.execCommand('copy');
    });
});

// $(document).ready(function(){
//     $('#paste').click(function(){
//         $('#toPaste').select();
//         document.execCommand('paste');
//     });
// });