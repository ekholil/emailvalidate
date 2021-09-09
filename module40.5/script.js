function $(name){
    return document.querySelector(name)
}
const email = $('#email')
const msg = $('#msg');

const validate = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let result = re.test(email.value)
    
    if(result === true){
        msg.innerText = "Your Email is correct";
        msg.classList.remove('hide')
        msg.classList.add('green')
        msg.classList.remove('red')
        setTimeout(function(){
        msg.classList.add('hide')
        }, 2000)
    } else{
        msg.innerText = "Invalid Email Address";
        msg.classList.add('red')
        msg.classList.remove('green')
        msg.classList.remove('hide')
        setTimeout(function(){
        msg.classList.add('hide')
        }, 2000)
    }
}