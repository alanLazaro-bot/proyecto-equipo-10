
         window.addEventListener("load", function () {
            let registerForm = document.querySelector("#register-form");
            let firstNameInput = document.querySelector("input[name=first_name]");
            let lastNameInput = document.querySelector("input[name=last_name]");
            let emailInput = document.querySelector("input[name=email]");
            let passwordInput = document.querySelector("input[name=password]");
            let confirmationInput = document.querySelector("input[name=confirmation]");
    
            let errores = {
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              confirmation: "",
            };
    
            
            function markAsInvalid(el){
                el.classList.remove("success");
                el.classList.add("error");
    
    
            }
    
            function markAsValid(el){
                el.classList.remove("error");
                el.classList.add("success");
    
            }
    
    
    
            registerForm = addEventListener("submit", function (e) {
              
    
              if(Object.keys(errores).length > 0){
                e.preventDefault();
                console.log("no se envia")
                console.log(errores)
    
              }else{
                  console.log("se envía")
              }
    
              ;
    
            });
    
            emailInput.addEventListener("keyup", function () {
              if (validator.isEmail(emailInput.value)) {
                  
                markAsValid(emailInput)
                delete errores.email
    
               
              } else {
    
                markAsInvalid(emailInput)
                errores.email='El email debe tener un formato válido'
              }
            });
            firstNameInput.addEventListener("keyup", function () {
              if (
                validator.isAlpha(firstNameInput.value) &&
                validator.isLength(firstNameInput.value, { min: 2, max: 30 })
              ) {
                delete errores.first_name
                markAsValid(firstNameInput)
                
               
              } else {
                markAsInvalid(firstNameInput)
                errores.first_name='El nombre solo debe contener entre 2 y 30 caracteres alfabéticos'
              }
            });
    
            lastNameInput.addEventListener("keyup", function () {
              if (
                validator.isAlpha(lastNameInput.value) &&
                validator.isLength(lastNameInput.value, { min: 2, max: 30 })
              ) {
                delete errores.last_name
                markAsValid(lastNameInput)
               
                
              } else {
    
                markAsInvalid(lastNameInput)
                errores.last_name='El apellido solo debe contener entre 2 y 30 caracteres alfabéticos'
              }
            });
    
            passwordInput.addEventListener("keyup", function () {
              if (
                validator.isLength(passwordInput.value, { min: 8, max: 20 }) &&
                /^(.{0,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{4,})|(.{1,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{3,})|(.{2,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{2,})|(.{3,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{1,})|(.{4,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{8,20})$/.test(
                  passwordInput.value
                )
              ) {
                delete errores.password
                markAsValid(passwordInput)
               
              } else {
                markAsInvalid(passwordInput)
                errores.password ='La contraseña debe tener entre 8 y 20 caracteres, una mayuscula, una minuscula, un número y un caracter especial'
              }
            });
    
            confirmationInput.addEventListener("keyup", function () {
              if (
                validator.equals(confirmationInput.value,passwordInput.value))
               {
                delete errores.confirmation
                markAsValid(confirmationInput)
                
              } else {
              markAsInvalid(confirmationInput)
                errores.confirmation = "Las contraseñas no coinciden"
              }
            });
    
            passwordInput.addEventListener("copy", function (e) {
              e.preventDefault();
    
              console.log("copiando");
            });
    
            passwordInput.addEventListener("cut", function (e) {
              e.preventDefault();
              console.log("copiando");
            });
    
            passwordInput.addEventListener("paste", function (e) {
              e.preventDefault();
              console.log("pegando");
            });



























          });