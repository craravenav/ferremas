<script>
$(document).ready(function() {
    $('form').on('submit', function(e) {
        var isValidEmail = $('#validationUsuario').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) != null;
        var isValidPassword = $('#validationPassword').val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/) != null;
        
        if (!isValidEmail) {
            e.preventDefault();
            $('#validationUsuario').siblings('.invalid-feedback').show();
        } else {
            $('#validationUsuario').siblings('.invalid-feedback').hide();
        }

        if (!isValidPassword) {
            e.preventDefault();
            $('#validationPassword').siblings('.invalid-feedback').show();
        } else {
            $('#validationPassword').siblings('.invalid-feedback').hide();
        }
    });

    $('.card').fadeIn(1000); 

});

</script>