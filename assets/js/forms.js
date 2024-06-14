(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const email = document.getElementById('email');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        if(email === '') {
            setError(email, 'Email is required');
        } else {
            setSuccess(email);
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()