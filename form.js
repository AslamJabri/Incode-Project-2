
const mail = document.querySelector("#email")
const form = document.querySelector("#form")
const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")
//regex
const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+$/



form.setAttribute("novalidate",true)
form.onsubmit = submitForm


function submitForm (event)  {
    event.preventDefault()
    if(valid(regex , mail)){
        console.log(`email : ${mail.value}`)
    }else{
        console.log ("please type correct email")
    }
}

const valid = (regex ,input) => {
    return regex.test(mail.value)
}
const next = document.getElementById('form')
    next.onsubmit = next.reset()


const openModalButton = document.querySelector('.button')
const closeModalButton = document.querySelector('.modal-cls')


 

    openModalButton.addEventListener(`click`, () => {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    })


    closeModalButton .addEventListener(`click`, () => {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    })
    