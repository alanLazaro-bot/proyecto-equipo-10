

window.addEventListener("load", function () {
    let prodCreateForm = document.querySelector("#product-form");
    let titleInput = document.querySelector("input[name=title]");
    let descriptionInput = document.querySelector("textarea[name=description]");
   // let sizeInput = document.querySelector("select[name=size]");
    let priceInput = document.querySelector("input[name=price]");
    let stockInput = document.querySelector("input[name=stock]");

    let errores = {
      title: "",
      description: "",
     // size: "",
      price: "",
      stock: "",
    };

    
    function markAsInvalid(el){
        el.classList.remove("success");
        el.classList.add("error");


    }

    function markAsValid(el){
        el.classList.remove("error");
        el.classList.add("success");

    }



    prodCreateForm.addEventListener("submit", function (e) {
   

      if(Object.keys(errores).length > 0){
        console.log("no se envia")
        console.log(errores)
        e.preventDefault();

      }else{
          console.log("se envía")
          console.log(errores)
      }

      ;

    });

    titleInput.addEventListener("mouseover", function () {
      if (!validator.isEmpty(titleInput.value)&& validator.isLength(titleInput.value,{min:5})) {
          
        markAsValid(titleInput)
        delete errores.title

       
      } else {

        markAsInvalid(titleInput)
        errores.title='El nombre del producto debe tener como mínimo 5 caracteres'
      }
    });

    descriptionInput.addEventListener("mouseover", function () {
      if (
        validator.isLength(descriptionInput.value, { min:20, max: 200 })
        )
       {
        markAsValid(descriptionInput)
        delete errores.description
       
      } else {
        markAsInvalid(descriptionInput)
        errores.description='La descripción debe tener entre 20 y 200 caracteres'
      }
    });
/*
    sizeInput.addEventListener("keyup", function () {
      if (
            !validator.isEmpty(sizeInput.value)
      ) {
        markAsValid(sizeInput)
        delete errores.size
        
      } else {

        markAsInvalid(sizeInput)
        errores.size='Campo Obligatorio'
      }
    });*/

    priceInput.addEventListener("mouseover", function () {
      if (
       !validator.isEmpty(priceInput.value)
        ) {
          delete errores.price
        markAsValid(priceInput)
        
      } else {
        markAsInvalid(priceInput)
        errores.price ='El precio no puede ser negativo'
      }
    });

    stockInput.addEventListener("mouseover", function () {
      if (
        !validator.isEmpty(stockInput.value)
        )
       {
        markAsValid(stockInput)
        delete errores.stock
      } else {
      markAsInvalid(stockInput)
        errores.stock = "El stock debe ser entre 0 y 100"
      }
    });

    
  });