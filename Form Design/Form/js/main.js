
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus ]*/
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
    var age = $('.validate-input input[name="age"]');

    $('.validate-form').on('submit',function(){
        var check = true;
        if (parseInt($(age).val(), 10) < 18 || parseInt($(age).val(), 10) > 65) {
            showValidate(age);
            check = false;
        }

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