// ***** DOCUMENT REFERENCES *****
let $modal =   document.querySelector(`.modal`)
let $signin =  document.querySelector('.signin')
let $user =    document.querySelector('#user')
let $pass =    document.querySelector('#pass')
let $close =   document.querySelector('.close')
let $submit =  document.querySelector('.submit')



// ***** INTERFACE MODIFICATIONS *****

// UI: Set .modal style for display to block
$modal.style.display = `block`

// UI: Set .modal style for display to none
$modal.style.display = `none`

// UI: Add .error class to #user 
$user.classList.add(`error`)

// UI: Add .error class to #pass
$pass.classList.add(`error`)

// UI: Remove .error class from #user 
$user.classList.remove(`error`)

// UI: Remove .error class from #pass 
$pass.classList.remove(`error`)


// ***** USER INTERACTIONS *****

// EVT: Capture a click from the .signin
$signin.addEventListener('click', event => { console.log('Signin') })

// EVT: Capture a click from the .close
$close.addEventListener('click', event => { console.log('Close') })

// EVT: Capture a click from .submit
$submit.addEventListener('click', event => { console.log('Submit') })

// EVT: Capture focus from #user
$user.addEventListener('focus', event => { console.log('User') })

// EVT: Capture focus from #pass
$pass.addEventListener('focus', event => { console.log('Pass') })
