const username = document.getElementById('username')
const password = document.getElementById('password')
const OTP = document.getElementById('OTP')
const copyText = document.getElementById('password')
const saveButton = document.getElementById('saveButton')

// Funcion login.html
function login(){
    if(username.value === '' || password.value === ''){
        alert('Please input your Username/Password')
    }else if(username.value === 'admin' && password.value === 'admin'){
        window.location.href = "index.html"
        alert('Success');
    }else {
        alert('Wrong username/password')
    }
}


// Funcion signup.html
const alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLow = 'abcdefghijklmnopqrstuvwxyz';
const numeric = '1234567890';

const generate = (len, alphabetUp, alphabetLow, numeric) => {
    const data = alphabetLow + alphabetUp + numeric;
    
    let generated = '';
    for (let i = 0; i < len; i++){
        generated += data[Math.floor(Math.random() *  data.length)];       // data.length is alphabetLow + alphabetUp + numeric Length
    }
    return generated;
    
}

function getOTP(){
    const newOTP = generate(5, numeric,numeric,numeric)
    alert('OTP Success')
    
    setTimeout(() => {
        OTP.value = newOTP
    }, 1000)
    
    
}

function getPass(){
    const newPass = generate(16, alphabetUp,alphabetLow,numeric)
    alert('Generate Password Success')
    
    setTimeout(() => {
        password.value = newPass
    }, 1000)
    
}

function copy(){
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert(`Copied password : ${copyText.value}`)
}

function save(){
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`My Password : ${password.value}`))
    saveButton.setAttribute('download', `Password Log ${password.value}.txt`)
    console.log(password.value)

}