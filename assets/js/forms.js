(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Function to handle input validation
    function validateInput(input) {
      if (!input.checkValidity()) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      } else {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
      }
    }

    // Loop over them and add event listeners
    Array.from(forms).forEach(form => {
      form.addEventListener('input', event => {
        validateInput(event.target);
      }, false);

      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
})();

const backHomeBtn = document.getElementById('backToHome');

backHomeBtn.addEventListener('click', function () {
    window.location.replace("../index.html");
});