
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
    var grade = $('.validate-input #grade');
    var region = $('.validate-input #region');

    $('.validate-form').on('submit',function() {
        var check = true;
        if (parseInt($(age).val(), 10) < 18 || parseInt($(age).val(), 10) > 65 || $(age).val() == "") {
            showValidate(age);
            check = false;
        }

        if ($(grade).val() == " ") {
            showValidate(grade);
            check = false;
        }

        if ($(region).val() == " ") {
            showValidate(region);
            check = false;
        }

        return check;
    });

    $('.validate-form .input').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function Q4disable() {
        disableQuestion($('.Q4'));
        $('.Q4').each(function() {
            $('.Q4').prop("checked", false);
            $('.Q4').prop("disabled", true);
        });
    } 

    function Q4enable() {
        enableQuestion($('.Q4'));
        $('.Q4').each(function() {
            $('.Q4').prop("disabled", false);
        });
    }

    function Q5disable() {
        disableQuestion($('.Q5'));
        $('#Q5-Yes').prop("checked", false);
        $('#Q5-Yes').prop("disabled", true);
        $('#Q5-No').prop("disabled", true);
    }

    function Q5enable() {
        enableQuestion($('.Q5'));
        $('#Q5-Yes').prop("checked", true);
        $('#Q5-Yes').prop("disabled", false);
        $('#Q5-No').prop("disabled", false);
    }

    function Q6disable() {
        disableQuestion($('.Q6'));
        $('#Q6-1').prop("checked", false);
        $('.Q6 .radio').each(function() {
            $('.Q6 .radio input[type="radio"]').prop("disabled", true);
        });
    }

    function Q6enable() {
        enableQuestion($('.Q6'));
        $('#Q6-1').prop("checked", true);
        $('.Q6 .radio').each(function() {
            $('.Q6 .radio input[type="radio"]').prop("disabled", false);
        });
    }

    function Q7disable() {
        disableQuestion($('.Q7'));
        $('#Q7-1').prop("checked", false);
        $('.Q7 .radio').each(function() {
            $('.Q7 .radio input[type="radio"]').prop("checked", false);
            $('.Q7 .radio input[type="radio"]').prop("disabled", true);
        });
    }

    function Q7enable() {
        enableQuestion($('.Q7'));
        $('#Q7-1').prop("checked", true);
        $('.Q7 .radio').each(function() {
            $('.Q7 .radio input[type="radio"]').prop("disabled", false);
        });
    }

    function Q9disable() {
        disableQuestion($('.Q9'));
        $('.Q9').each(function() {
            $('.Q9').prop("checked", false);
            $('.Q9').prop("disabled", true);
        });
    }

    function Q9enable() {
        enableQuestion($('.Q9'));
        $('.Q9').each(function() {
            $('.Q9').prop("disabled", false);
        });
    }

    $("#Q2-No").click(function() {
        $('#Q3-No').prop("checked", true);
        Q4disable();
        Q5disable();
        Q6disable();
        Q7enable();
    });
    
    $(".Q3 .toggle").click(function() {
        if ($('input[name="Q3"]:checked').val() == "no") {
            Q4disable();
            Q5disable();
            Q6disable();
            Q7enable();
        } else if ($('input[name="Q3"]:checked').val() == "yes") {
            Q4enable();
            Q5enable();
            Q6enable();
            Q7disable();
        }
    });

    $('.Q8 .toggle').click(function(){
        if ($('input[name="Q8"]:checked').val() == "no" || $('input[name="Q8"]:checked').val() == "not aware") {
            Q9disable();
        } else if ($('input[name="Q8"]:checked').val() == "yes") {
            Q9enable();
        }
    });
    
    function disableQuestion(input) {
        $(input).addClass('disabled');
    }

    function enableQuestion(input) {
        $(input).removeClass('disabled');
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);