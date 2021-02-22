
/*
window.addEventListener("load", function () {

    let form = document.getElementById("#product-form");
    let titleInput = document.querySelector("input[name=title]");
    let descriptionInput = document.querySelector("textarea[name=description]");
    let priceInput = document.querySelector("input[name=price]");
    let stockInput = document.querySelector("input[name=stock]");

    console.log(form)

    console.log(titleInput)

    console.log(descriptionInput)

    
    function markAsInvalid(el){
        el.classList.remove("success");
        el.classList.add("error");
    }

    function markAsValid(el){
        el.classList.remove("error");
        el.classList.add("success");
    }


form = addEventListener("submit", function (e) {
  let errores = []

    titleInput.addEventListener("blur", function () {
      if (!validator.isEmpty(titleInput.value)&& validator.isLength(titleInput.value,{min:5})) {
          
        markAsValid(titleInput)
        
      } else {

        markAsInvalid(titleInput)
        errores.push('El nombre del producto debe tener como mínimo 5 caracteres')
      }
    });

    descriptionInput.addEventListener("blur", function () {
      if (
        validator.isLength(descriptionInput.value, { min:20, max: 200 })
        )
       {
        markAsValid(descriptionInput)
       
       
      } else {
        markAsInvalid(descriptionInput)
        errores.push('La descripción debe tener entre 20 y 200 caracteres')
      }
    });

    priceInput.addEventListener("blur", function () {
      if (
       !validator.isEmpty(priceInput.value)
        ) {
          
        markAsValid(priceInput)
        
      } else {
        markAsInvalid(priceInput)
        errores.push('El precio no puede ser negativo')
      }
    });

    stockInput.addEventListener("blur", function () {
      if (
        !validator.isEmpty(stockInput.value)
        )
       {
        markAsValid(stockInput)
        
      } else {
      markAsInvalid(stockInput)
        errores.push("El stock debe ser entre 0 y 100")
      }

      if (errores.length > 0) {
        e.preventDefault();
        console.log(errores)
        let ulErrores = document.getElementbyId("errores")
        for(let i=0 ; i< errores.length ; i++){
    
    
          ulErrores.innerHTML += '<li>'+ errores[i] +'</li>'
        }
    
      } else {
        console.log("se envía");
      }




    });

  });
  console.log(form)
  });*/