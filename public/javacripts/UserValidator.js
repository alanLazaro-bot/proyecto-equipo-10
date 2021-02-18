window.addEventListener("load", function(){


    let registerForm=document.querySelector('#register-form')
    
    let nameInput = document.getElementById('first_name')
    let lastNameInput = document.querySelector('input[name=last_name]')
    
    let emailInput = document.querySelector('input[name=email]')
    let passwordInput = document.querySelector('input[name=password]')
    let confirmationInput = document.querySelector('input[name=password_confirmation]')
    
    
    
    let user={
    
        first_name: '',
        last_name: '',
        email: '',
        password: ''/*,
        password_confirmation:'',*/
    
    }
    
    let errors ={
    
        first_name: '',
        last_name: '',
        email: '',
        password: ''/*,
        password_confirmation:'',*/ 
    }
    
    registerForm.addEventListener('submit',function(e){
        e.preventDefault()
        
        console.log('enviado')
    })
    
    
    function markAsValid(el){
        el.classList.remove('error');
        el.classList.add('success');
    }
    
    function markAsInvalid(el){
        el.classList.remove('success')
        el.classList.add('error');
    
    }
    
    
    
    emailInput.addEventListener('keyup',function(){
    
        if(validator.isEmail(emailInput.value)){
    
            delete errors.email
    
            markAsValid(emailInput)
    
        } else {
    
            errors.email ='el email debe ser un formato válido'
    
            markAsInvalid(emailInput)
    }})
    
    
    
    nameInput.addEventListener('keyup',function(){
    
        if(validator.isAlpha(nameInput.value) && validator.insLength(nameInput.value, {min:3, max:20} )){
    
            /*delete errors.name*/
    
            markAsValid(nameInput)
    
        } else {
            errors.name ='el nombre solo puede contener entre 3 y 20 caracteres alfabeticos'
    
            markAsInvalid(nameInput)
        }
    
        console.log(nameInput)
    
    })
    
    lastNameInput.addEventListener('keyup',function(){
    
        if(validator.isAlpha(lastNameInput.value)&& validator.insLength(lastNameInput.value, {min:3, max:20} )){
    
            delete errors.last_name
    
            markAsValid(lastNameInput)
    
        } else {
            errors.last_name ='el nombre solo puede contener entre 3 y 20 caracteres alfabeticos'
    
            markAsInvalid (lastNameInput)
        }
    
    
    
    })
    
    passwordInput.addEventListener('keyup',function(){
    
        if(validator.isLength(passwordInput.value, {min:8, max:12}) && /^[A-Z]+\d{1}[A-Z]+[\$\.\-\#\(\)\=\!\+]+[A-Z]+$/.test(password.Input.value)){
    
            delete errors.password
    
            markAsValid(passwordInput)
    
        } else {
            errors.password ='el email debe contener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula'
    
            markAsInvalid(passwordInput)
        }
    
    
    
    })
    
    passwordInput.addEventListener('copy', function(e) {
        e.preventDefault()
        return false
        
    
    
    
    })
    
    passwordInput.addEventListener('cut', function(e) {
        e.preventDefault()
        return false
    
    
    
    })
    
    
    passwordInput.addEventListener('paste', function(e) {
        e.preventDefault()
    
        return false
    
        
    
    
    
    })
    
    
    
    confirmationlInput.addEventListener('keyup',function(){
    
        if(validator.equals(confirmationInput.value, passwordInput.value)){
    
            delete errors.password_confirmation
    
            markAsValid(confirmationInput)
    
        } else {
            errors.confirmation ='Los passwords deben coincidir'
    
            markAsInvalid(confirmationInput)
        }
    
    })
    
    })
    
    if(Object.keys(errors).length > 0){
        e.preventDefault()
    
        console.log('no se envia')
    }else {
    
        console.log('se puede enviar')
    
    }
    

    
    