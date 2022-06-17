// Add your code here
let name = document.querySelector('#Name').value;
let email = document.querySelector('#email').value;

const submitData=(name,email)=>{
    const formData={
        name: name,
        email: email,
    };
    const configurationObject = {
        method: "POST",
        headers: {"Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
    };
return fetch("http://localhost:3000/users", configurationObject)
    .then(responce => responce.json())
    .then(data => {
        document.body.innerHTML = data.id
    })
    .catch(err => {

        document.body.innerHTML = err.message
    })
}