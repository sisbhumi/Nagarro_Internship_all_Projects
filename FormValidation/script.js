$(document).ready(function(){

    // $("input[type=text]").attr("placeholder","PLease Enter valid Username");
    // $("input[type=password]").attr("placeholder","PLease Enter valid Password");
    // $("input[type=email]").attr("placeholder","PLease Enter valid Email");
    $(".userInvalid").hide();
    $(".emailInvalid").hide();
    $(".passInvalid").hide();
    var no_name_error = true;
    var no_pass_error = true;
    var no_email_error = true;

    $("input").attr("required",true);

    $("#username").keyup(function(){
        name_valid();  
    })
    
    function name_valid(){
        
        var name = $("#username").val();
        var validpass = new RegExp("^[A-Za-z][A-Za-z0-9_]{3,29}$");    
        if( !validpass.test(name) ){
            $(".userInvalid").show();
            no_name_error = false;
            return false;
        }  
        else{
            $(".userInvalid").hide();
        }      
    }

    $("#email").keyup(function(){
        email_valid();  
    })

    function email_valid(){
        if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val()))
        {
            $(".emailInvalid").show();
            no_email_error=false;
            return false;
        }
        else{
            $(".emailInvalid").hide();
        }
    } 
    
    $("#pass").keyup(function(){
        pass_valid();  
    })

    function pass_valid(){
        if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test($("#pass").val()))
        {
            $(".passInvalid").show();
            no_pass_error=false;
            return false;
        }
        else{
            $(".passInvalid").hide();
        }
    }

    $("#submit").submit( function(){
        // name_valid();
        // email_valid();
        // pass_valid();
        
        if(no_email_error== true && no_name_error == true && no_pass_error==true){
                return true;
        }
        else{ 
            return false;
        }
    });
    
})