/*window.addEventListener("load", function () {
  let loginForm = document.querySelector("login-form");
  let emailInput = document.querySelector("input[name=email]");
  let passwordInput = document.querySelector("input[name=password]");
 

  let errores = {
    email: "",
    password: "",
    
  }

  function markAsInvalid(el) {
    el.classList.remove("success");
    el.classList.add("error");
  }

  function markAsValid(el) {
    el.classList.remove("error");
    el.classList.add("success");
  }

  loginForm = addEventListener("submit", function (e) {
    
  emailInput.addEventListener("keyup", function () {
    if (validator.isEmail(emailInput.value)) {
      markAsValid(emailInput);
      delete errores.email;
    } else {
      markAsInvalid(emailInput);
      errores.email = "El email debe tener un formato válido";
    }
  });
 
  passwordInput.addEventListener("keyup", function () {
    if (
      validator.isLength(passwordInput.value, { min: 8, max: 20 }) &&
      /^(.{0,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{4,})|(.{1,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{3,})|(.{2,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{2,})|(.{3,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{1,})|(.{4,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{8,20})$/.test(
        passwordInput.value
      )
    ) {
      markAsValid(passwordInput);
      delete errores.password;
    } else {
      markAsInvalid(passwordInput);
      errores.password =
        "La contraseña debe tener entre 8 y 20 caracteres, una mayuscula, una minuscula, un número y un caracter especial";
    }
  });


  if (Object.keys(errores).length > 0) {
    e.preventDefault();
    console.log(errores)
    let ulErrores = document.querySelector("div.errores ul")
    for(let i=0 ; i< errores.length ; i++){


      ulErrores.innerHTML += '<li>'+ errores[i] +'</li>'
    }

  } else {
    console.log("se envía");
  }
});
})
*/