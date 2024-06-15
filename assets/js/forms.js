// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
//     const email = document.getElementById('email');
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//         if(email === '') {
//             setError(email, 'Email is required');
//         } else {
//             setSuccess(email);
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })

//     function setError(input, message) {
//         const formGroup = input.parentElement;
//         const feedback = formGroup.querySelector('.invalid-feedback');
//         feedback.textContent = message;
//         input.classList.add('is-invalid');
//         input.classList.remove('is-valid');
//       }

//       function setSuccess(input) {
//         input.classList.add('is-valid');
//         input.classList.remove('is-invalid');
//       }
// })()

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