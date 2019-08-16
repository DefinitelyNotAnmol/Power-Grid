
(function ($) {
    "use strict";
    //Focus
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
  
    //Validation for first three inputs
    var age = $('.validate-input input[name="age"]');
    var grade = $('.validate-input #grade');
    var region = $('.validate-input #region');

    $('.validate-form').on('submit',function() {
        var check = true;
        if (parseInt($(age).val(), 10) < 21 || parseInt($(age).val(), 10) > 65 || $(age).val() == "") {
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

        if ($('.Q4 input[type="checkbox"]:checked').length == 0) {
            $('.Q4 .checkbox input[type="checkbox"]').each(function() {
                $('.Q4 ul.checkbox li label').css("color", "#c80000");
            });
            check = false;
        }

        return check;
    });

    $('.validate-form .input').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    //Question's Toggle Functions
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
        $('#Q5-No').prop("checked", false);
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
        $('.Q6 .radio').each(function() {
            $('.Q6 .radio input[type="radio"]').prop("checked", false);
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
        $('.Q7 .btn').each(function() {
            $('.Q7 .btn').prop("checked", false);
            $('.Q7 .btn').prop("disabled", true);
        });
    }

    function Q7enable() {
        enableQuestion($('.Q7'));
        $('#Q7-1').prop("checked", true)
        $('.Q7 .btn').each(function() {
            $('.Q7 .btn').prop("disabled", false);
        });
    }

    function Q8disable() {
        disableQuestion($('.Q8'));
        $('.Q8 .radio').each(function() {
            $('.Q8 .radio input[type="radio"]').prop("checked", false);
            $('.Q8 .radio input[type="radio"]').prop("disabled", true);
        });
    }

    function Q8enable() {
        enableQuestion($('.Q8'));
        $('#Q8-1').prop("checked", true);
        $('.Q8 .radio').each(function() {
            $('.Q8 .radio input[type="radio"]').prop("disabled", false);
        });
    }

    function Q9disable() {
        disableQuestion($('.Q9'));
        $('#Q9-Yes').prop("checked", false);
        $('#Q9-No').prop("checked", false);
        $('#Q9-Yes').prop("disabled", true);
        $('#Q9-No').prop("disabled", true);
    }

    function Q9enable() {
        enableQuestion($('.Q9'));
        $('#Q9-Yes').prop("checked", true);
        $('#Q9-Yes').prop("disabled", false);
        $('#Q9-No').prop("disabled", false);
    }

    // Triggers
    $('#Q3-Yes').click(function() {
        Q4enable();
        Q5enable();
        Q6disable();
        Q7enable();
        Q8disable();
        Q9enable();
    });

    $('#Q3-No').click(function() {
        Q4disable();
        Q5disable();
        Q6disable();
        Q7disable();
        Q8enable();
        Q9disable();
    });

    $('#Q5-Yes').click(function() {
        Q6disable();
    });

    $('#Q5-No').click(function() {
        Q6enable();
    });

    $('#Q4-cbx13').click(function() {
        if ($('#Q4-cbx13').prop("checked") == true) {
            $('.other1').append('<textarea class="input other" name="other" placeholder="Write subject for grievance here..." row="1" column="50"></textarea>');
            $('.other1 textarea[name="other"]').focus();
        } else {
            $('.other1 textarea[name="other"]').remove();
        }
    })

    $('.Q6 input[type="radio"][name="Q6"]').change(function() {
        if ($('#Q6-4').prop("checked") == true) {
            $('.Q6 .radio-btn').append('<textarea class="input other2" name="other2" placeholder="Write your reasons here..." row="1" column="50"></textarea>');
            $('.Q6 .radio-btn textarea[name="other2"]').focus();
        } else {
            $('.Q6 .radio-btn textarea[name="other2"]').remove();
        }
    });

    $('.Q8 input[type="radio"][name="Q8"]').change(function() {
        if ($('#Q8-4').prop("checked") == true) {
            $('.Q8 .radio-btn').append('<textarea class="input other2" name="other2" placeholder="Write your reasons here..." row="1" column="50"></textarea>');
            $('.Q8 .radio-btn textarea[name="other2"]').focus();
        } else {
            $('.Q8 .radio-btn textarea[name="other2"]').remove();
        }
    });

    $('.Q10 input[type="radio"][name="Q10"]').change(function() {
        if ($('#Q10-6').prop("checked") == true) {
            $('.Q10 .radio-btn').append('<textarea class="input other2" name="other2" placeholder="Write your suggestions / recommendations here..." row="1" column="50"></textarea>');
            $('.Q10 .radio-btn textarea[name="other2"]').focus();
        } else {
            $('.Q10 .radio-btn textarea[name="other2"]').remove();
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