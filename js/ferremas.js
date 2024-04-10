(() => {
    'use strict'
  
    // Busca todos los forms en los que se quiera aplicar validaciones de Bootstrap
    const forms = document.querySelectorAll('.needs-validation')
  
    // Recorre todos los formularios seleccionados en el paso anterior y valida 
    // ante el evento Submit del formulario interrumpiendo la ejecución
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        // En caso de validarse correctamente se le agrega la clase 
        form.classList.add('was-validated')
      }, false)
    })

  })()