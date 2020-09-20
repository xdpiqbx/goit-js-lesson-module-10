import "../sass/feedback-form.scss";
//Web Storage API - современный Api для хранения информации на клиенте
//более интуитивно понятным способом, чем использование куки

//localStorage.setItem("test", 'some value')
//localStorage.getItem("test");
//localStorage.removeItem("test")
//localStorage.clear() - полная очистка хранилища
// если попытался взять значение которог не существует получаеш - null
// и если попробую распарсить null то и получу null

// localStorage.setItem("test", 'some test value')
// const settings = {
//     theme: "dark",
//     fontSize: 14
// }

// localStorage.setItem("settings", JSON.stringify(settings))

// //const gettegSettings = localStorage.getItem("settings");
// //console.log(JSON.parse(gettegSettings))

// const value = localStorage.getItem("test")

// console.log(value);

// localStorage.removeItem("test")

/*********************************************************************************/

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    input: document.querySelector('.js-feedback-form input')
}

console.log(refs.textarea)

refs.form.addEventListener("submit", handleFormSubmit)

refs.textarea.addEventListener("input", handleTextareaInput)
refs.input.addEventListener("input", handleTextareaInput)

function handleFormSubmit (event){
    event.preventDefault();

    console.log("Submit fee to server")
    localStorage.removeItem("message")
    localStorage.removeItem("name")
    event.currentTarget.reset();
} 

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function handleTextareaInput (event){
    localStorage.setItem(event.target.name, event.currentTarget.value)
}

function populateMessage(){
    const message = localStorage.getItem("message")
    const name = localStorage.getItem("name")
    if(message || name){
        refs.input.value = name
        refs.textarea.value = message
    }
}

populateMessage()