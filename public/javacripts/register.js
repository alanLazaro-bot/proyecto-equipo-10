let form = document.getElementById('register-form')

let emailMessage = form.querySelector ('#email-message')

let passwordMessage = form.querySelector ('#password-message')

const user = {

email : '',
password : '',
}


form.email.addEventListener('blur', function(){

    fetch('http://localhost:3000/api/check?email=' + this.value)
    .then (res => {

            if(res.status == 404) {

                emailMessage.innerHTML = 'El email se encuentra disponible'
                user.email = this.value;

            } else {

                emailMessage.innerHTML = 'El email ya se encuentra registrado'
                user.email = '';
            }

    })
    
})

form.password.addEventListener('keyup', function(){

    user.password = this.value

})

form.addEventListener('submit', function(e){

    e.preventDefault()

    fetch('http://localhost:3000/api/users',{

    method: 'POST',
    body : JSON.stringify(user),
    headers : {

        'Content-Type' : 'application/json'
    }

    })
    .then(res => res.json())
    .then(data => {
        form.email.value = ''
        form.password.value = ''
    })
})
