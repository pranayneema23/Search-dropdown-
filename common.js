$(document).ready(function() {

    //Place Holder Plug in for IE9 and Eariler
    $('input, textarea').placeholder();

    //Set the Date Picker Format
    $(function() {
        $('.datetimepicker').datetimepicker({
            format: 'MM/DD/YYYY'
        });
    });

    //Add Plug in to activate the Form Masking for bfh-phone class items
    $('input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function() {
        var $phone;

        $phone = $(this);

        $phone.bfhphone($phone.data());
    });

    //Onclick event handle for Check box for Licensed Agent 220 or 440
    $('#cb220').click(function() {
        $("#cb440").prop("checked", false);
    });

    $('#cb440').click(function() {
        $("#cb220").prop("checked", false);
    });

    $('#cbLicensedAgent').click(function() {
        if ($("#cbLicensedAgent").prop("checked")) {
            $("#rowLicensedAgent").show();
            $("#rowLicensedAgent").css("display", "");
        } else {
            $("#rowLicensedAgent").hide();
            $("#rowLicensedAgent").css("display", "none");
        }
    });

    $('.requiredfield').blur(function() {
        RequiredFieldsCheck(); ;
    });
    RequiredFieldsCheck();

    function RequiredFieldsCheck() {
        $.each($('.requiredfield'), function(index, value) {
            if ($(value)[0].value == "") {
                $(value)[0].style.backgroundColor = "#ffd6cc";
            }
            else {
                if ($(value)[0].value == $(value)[0].getAttribute('placeholder')) {
                    $(value)[0].style.backgroundColor = "#ffd6cc";
                }
                else {
                    $(value)[0].style.backgroundColor = "";
                }
            }
        });
    }

});