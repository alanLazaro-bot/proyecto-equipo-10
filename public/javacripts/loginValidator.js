window.addEventListener("load", function () {
  let loginForm = document.querySelector("#login-form");
  let emailInput = document.querySelector("input[name=email]");
  let passwordInput = document.querySelector("input[name=password]");
  let confirmationInput = document.querySelector("input[name=confirmation]");

  let errores = {
    email: "",
    password: "",
    confirmation: "",
  };

  function markAsInvalid(el) {
    el.classList.remove("success");
    el.classList.add("error");
  }

  function markAsValid(el) {
    el.classList.remove("error");
    el.classList.add("success");
  }

  registerForm = addEventListener("submit", function (e) {
    

    if (Object.keys(errores).length > 0) {
      e.preventDefault();
      console.log("no se envia");
    } else {
      console.log("se envía");
    }
  });

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
