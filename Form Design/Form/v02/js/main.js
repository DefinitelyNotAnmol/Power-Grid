
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    // var name = $('.validate-input input[name="name"]');
    // var email = $('.validate-input input[name="email"]');
    // var message = $('.validate-input textarea[name="message"]');
    var age = $('.validate-input input[name="age"]');
    // var age = parseInt(age_s.val(), 10);

    $('.validate-form').on('submit',function(){
        var check = true;
        if (parseInt($(age).val(), 10) < 18 || parseInt($(age).val(), 10) > 65) {
            showValidate(age);
            check = false;
        }
        // if (check) {
        //     showValidate(age);
        // }

        return check;
    });


    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);