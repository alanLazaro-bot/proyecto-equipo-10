const { validator } = require("sequelize/types/lib/utils/validator-extras")

let productAddForm=document.querySelector('#rproductAdd-form')

let titleInput = document.querySelector('input[name=title]')
let descriptionInput = document.querySelector('input[name=description]')
let sizeInput = document.querySelector('input[name=size]')
let colorInput = document.querySelector('input[name=color]')
let priceInput = document.querySelector('input[name=price]')



let product={

    title: '',
    email: '',
    password: '',
    password_comfirmation:'',

}

let errors ={

  title: '',
   description: '',
    size: '',
    color:'',
    price:'',
}

productAddForm.addEventListener('submit',function(e){

emailInput.addEventListener('keyup',function(){

    if(validator.isEmail(emailInput.value)){

        delete errors.email

        emailInput.classList.remove('error')
        emailInput.classList.add('success')

    } else {

        errors.email ='el email debe ser un formato válido'

        emailInput.classList.remove('success')
        emailInput.classList.add('error')
    }



})


nameInput.addEventListener('keyup',function(){

    if(validator.isAlpha(nameInput.value)&& validator.insLength(nameInput.value, {min:3, max:20} )){

        delete errors.name

        nameInput.classList.remove('error')
        nameInput.classList.add('success')

    } else {
        errors.name ='el nombre solo puede contener entre 3 y 20 caracteres alfabeticos'

        nameInput.classList.remove('success')
        nameInput.classList.add('error')
    }



})

passwordlInput.addEventListener('keyup',function(){

    if(validator.isLength(passwordInput.value, {min:8, max:12}) && /^[A-Z]+\d{1}[A-Z]+[\$\.\-\#\(\)\=\!\+]+[A-Z]+$/.test(password.Input.value)){

        delete errors.password

        passwordInput.classList.remove('error')
        passwordInput.classList.add('success')

    } else {
        errors.password ='el email debe contener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula'

        passwordInput.classList.remove('success')
        passwordInput.classList.add('error')
    }



})

confirmationlInput.addEventListener('keyup',function(){

    if(validator.equals(confirmationInput.value, passwordInput.value)){

        delete errors.password_confirmation

        confirmationInput.classList.remove('error')
        confirmationInput.classList.add('success')

    } else {
        errors.name ='Los passwords deben coincidir'

        confirmationInput.classList.remove('success')
        confirmationInput.classList.add('error')
    }



})

if(Object.keys(errors).length > 0){
    e.preventDefault()

    console.log('no se envia')

}else {

    console.log('se puede enviar')

}

})

