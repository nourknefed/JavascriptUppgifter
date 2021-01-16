class User {
    constructor(firstname, lastname, email,phonenumber, adress, zipcode, postcity) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phonenumber = phonenumber
        this.adress = adress
        this.zipcode = zipcode
        this.postcity= postcity
    }
    get id(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }
        
}

function id(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
}


/* Declare Elements */
var users = []
let newuser;


let first = document.getElementById('firstname-input')
let last = document.getElementById('lastname-input')
let email = document.getElementById('email-input')
let phone = document.getElementById('phonenumber-input')
let adress = document.getElementById('adress-input')
let zipcode = document.getElementById('zipcode-input')
let postcity = document.getElementById('postcity-input')


//create user
function CreateUser(){
    

    newuser = new User(first.value, last.value, email.value, phone.value, adress.value, zipcode.value, postcity.value)
    // users.push(newuser)
    console.log('newuser created')
    return newuser
}






// Create Html Elements and edit them

function CreateHtmlElements(){
   
    // Name label
    const Namelabel = document.createElement('label')
    Namelabel.classList.add('namelabel-show','d-flex', 'justify-content-between')

    const ShowBtn = document.createElement('button')
    ShowBtn.classList.add('btnicon')
    ShowBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';

    const Namediv = document.createElement('div')
    Namediv.innerText = `${newuser.firstname}` + ` ${newuser.lastname}`;


    const Divicons = document.createElement('div')
    Divicons.classList.add('icons')

    // Icons
    const Savebtn = document.createElement('button')
    Savebtn.classList.add('btnicon')
    const Editbtn = document.createElement('button')
    Editbtn.classList.add('btnicon')
    const Removebtn = document.createElement('button')
    Removebtn.classList.add('btnicon')

    Savebtn.innerHTML = '<i class="fas fa-save"></i>'
    Editbtn.innerHTML = '<i class="fas fa-user-edit"></i>';
    Removebtn.innerHTML ='<i class="fas fa-trash"></i>';

    //Details
    const DetailDiv = document.createElement('div')
    DetailDiv.classList.add('detail-hide','list-group')

    const IdLi= document.createElement('li')
    IdLi.innerText = `Id: ${newuser.id}`

    const EmailInput= document.createElement('input')
    EmailInput.value = `${newuser.email}`
    EmailInput.classList.add('input1')
    EmailInput.disabled=true
    const EmailSpan= document.createElement('span')
    EmailSpan.innerText = 'E-mail :'

    const PhoneInput= document.createElement('input')
    PhoneInput.value = `${newuser.phonenumber}`
    PhoneInput.classList.add('input1')
    PhoneInput.disabled=true
    const PhoneSpan= document.createElement('span')
    PhoneSpan.innerText = 'Phone number:'

    const AdressInput= document.createElement('input')
    AdressInput.value = `${newuser.adress}`
    AdressInput.classList.add('input1')
    AdressInput.disabled=true
    const AdressSpan= document.createElement('span')
    AdressSpan.innerText = 'Adress:'

    const ZipcodeInput= document.createElement('input')
    ZipcodeInput.value = `${newuser.zipcode}`
    ZipcodeInput.classList.add('input1')
    ZipcodeInput.disabled=true
    const ZipSpan= document.createElement('span')
    ZipSpan.innerText = 'Zip-Code:'


    const PostcityInput= document.createElement('input')
    PostcityInput.value = `${newuser.postcity}`
    PostcityInput.classList.add('input1')
    PostcityInput.disabled=true
    const CitySpan= document.createElement('span')
    CitySpan.innerText = 'Post-city:'

    const emailerrorDiv = document.createElement('div')
    emailerrorDiv.classList.add('error')
    const phoneerrorDiv = document.createElement('div')
    phoneerrorDiv.classList.add('error')
    const adresserrorDiv = document.createElement('div')
    adresserrorDiv.classList.add('error')
    const ziperrorDiv = document.createElement('div')
    ziperrorDiv.classList.add('error')
    const cityerrorDiv = document.createElement('div')
    cityerrorDiv.classList.add('error')





    //append elements
    var currentDiv = document.getElementById('userList')
    currentDiv.append(Namelabel,DetailDiv)
    Namelabel.append(ShowBtn,Namediv,Divicons)
    Divicons.append(Savebtn,Editbtn,Removebtn)
    DetailDiv.append(IdLi,
        EmailSpan,EmailInput, emailerrorDiv,
        PhoneSpan,PhoneInput,phoneerrorDiv,
        AdressSpan, AdressInput,adresserrorDiv,
        ZipSpan,ZipcodeInput,ziperrorDiv,
        CitySpan,PostcityInput,cityerrorDiv)

        Removebtn.addEventListener('click',()=>{ remove(newuser)})
        Editbtn.addEventListener('click',()=>{
            click()
            Edit()})
        Savebtn.addEventListener('click',()=>{
            save() })
 

    
    $(document).ready(function(){
        $(DetailDiv).hide();
    });

    
    $(document).ready(function(){
        $(ShowBtn).click(function(){
            $(DetailDiv).slideToggle("slow");
            
        });
    });

    
    function Edit(){

        EmailInput.disabled = false;
        PhoneInput.disabled = false;
        AdressInput.disabled = false;
        ZipcodeInput.disabled = false;
        PostcityInput.disabled = false;

        EmailInput.select();
    }

    function click() {
        EmailInput.style.color = '#3be6c9';
        PhoneInput.style.color = '#3be6c9';
        AdressInput.style.color = '#3be6c9';
        ZipcodeInput.style.color = '#3be6c9';
        PostcityInput.style.color = '#3be6c9';
        Editbtn.style.color = " rgb(208, 255, 0)"
        
    }
    function save () {
        if(ValidateEditedForm()){

            EmailInput.disabled = true;
            PhoneInput.disabled = true;
            AdressInput.disabled = true;
            ZipcodeInput.disabled = true;
            PostcityInput.disabled = true;
            Editbtn.style.color = " #3be6c9 "
            EmailInput.style.color = '#228b7a';
            PhoneInput.style.color = '#228b7a';
            AdressInput.style.color = '#228b7a';
            ZipcodeInput.style.color = '#228b7a';
            PostcityInput.style.color = '#228b7a';
            
        }
        else{
            alert('invalid form please try again')
        }

      

    }

    function ValidateEditedForm(){
    
        let r3 = ValidateInput(PostcityInput,cityerrorDiv)
        let r4 = ValidateEmail(EmailInput,emailerrorDiv)
        let r5 = ValidateAdress(AdressInput,adresserrorDiv) 
        let r6 = validatePhonenumber(PhoneInput,phoneerrorDiv)
        let r7= validateZipcode(ZipcodeInput,ziperrorDiv)

        if( r3 && r4 && r5 && r6 && r7) {
            return true;
        } else {
            return false;
        }


    }



    function remove(newuser){
        const index = users.indexOf(newuser);
        users.splice(index, 1);
        const nl = document.getElementById('userList');
        nl.innerText = '';
    
        const itemdiv = document.createElement('div')
    
        for(let user of users){
            itemdiv.append(CreateHtmlElements(user));
        }
    }
  
}



// submit
/* document.getElementById('btn-submit').addEventListener('click',(e)=>{
    e.preventDefault()
    if(ValidateForm()){
        CreateUser()
       CreateHtmlElements()
       ResetInput()

    }
    else{
        alert('invalid form please try again')
    }
  
    console.log('created')
}) */



// Submit with make unique email

document.getElementById('btn-submit').addEventListener('click',(e)=>{
    e.preventDefault()
    if(ValidateForm()){
        newuser = CreateUser()
        if(find (newuser.email,users)){
            alert('This email is already registered....Please enter new email')
        }
        else{
            users.push(newuser);
            const viewlist = document.getElementById('userList');
            viewlist.innerText = '';
            const newlist = document.createElement('div')
            for (const item of users) {
                newlist.append(CreateHtmlElements(item));
            }
            ResetInput();
        }
    }
    else{
        alert('invalid form please try again')
    }
  
    console.log('created')
})




//Validate Form

var firstnamerror = document.getElementById('firstname-input-error')
var lastnamerror =  document.getElementById('lastname-input-error')
var postcityerror =  document.getElementById('postcity-input-error')
var emailerror = document.getElementById('email-input-error')
var adresserror = document.getElementById('adress-input-error')
var phoneerror =  document.getElementById('phonenumber-input-error')
var zipcoderror = document.getElementById('zipcode-input-error')

// Validate input

function ValidateInput(inputelement,error)
{
    if(inputelement.value.length < 2){
        error.innerText = 'At least 2 character!!';
        return false
    }
    else{
        error.innerText = '';
        return true
    }  
}

first.addEventListener('change', () =>{
    ValidateInput(first,firstnamerror)
  
})
last.addEventListener('change', () =>{
    ValidateInput(last,lastnamerror)
  
})
postcity.addEventListener('change', () =>{
ValidateInput(postcity,postcityerror)
  
})


// validate email

function ValidateEmail(emailInput,errorinput) {
   
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value))
    {
        errorinput.innerText = ''
        return (true)
    }
    else{
        errorinput.innerText = `invalid email !!` 
        
        return (false)
    }
}

document.getElementById('email-input').addEventListener('change', () =>{
    ValidateEmail(email,emailerror) 
  
})

// validate Adress

function ValidateAdress(adressInput,error)
{
    var a = adressInput.value;
    if(a=="")
    {
        error.innerText = `please Enter your adress!!`
    document.myForm.adress.focus();
    return false;
    }
    if((a.length < 5) || (a.length > 50))
    {
        error.innerText = `Your textarea must be 5 to 20 characters !!`
    document.myForm.adress.select();
    return false;
    }
    else{
        error.innerText = ''
    return true; 
    }
}

document.getElementById('adress-input').addEventListener('change', () =>{
    ValidateAdress(adress,adresserror)
  
})

//validate phonenumber

function  validatePhonenumber(input,error) {
    var z = input.value;
    if(!z.match(/^\d{10}$/))
    {
    error.innerText = 'phone number must be 10 numbers!'
    return false
    }
    else{
    error.innerText =''
    return true
    }
}

document.getElementById('phonenumber-input').addEventListener('change', (e) =>{
    validatePhonenumber(phone,phoneerror)
  
})

//validate zip-code

function  validateZipcode(input,error) {
    var z = input.value;
    if(!z.match(/^\d{5}$/))
    {  
    error.innerText = 'zipcode mest be 5 numbers!'
    return false
    }
    else{
    error.innerText =''
    return true
    }
}

document.getElementById('zipcode-input').addEventListener('change', (e) =>{
    validateZipcode(zipcode,zipcoderror)
})

// Validate whole form

function ValidateForm(){
    let r1 = ValidateInput(first,firstnamerror)
    let r2 = ValidateInput(last,lastnamerror)
    let r3 = ValidateInput(postcity,postcityerror)
    let r4 = ValidateEmail(email,emailerror)
    let r5 = ValidateAdress(adress,adresserror) 
    let r6 = validatePhonenumber(phone,phoneerror)
    let r7= validateZipcode(zipcode,zipcoderror)

    if( r1 && r2 && r3 && r4 && r5 && r6 && r7) {
        return true;
    } else {
        return false;
    }

}

//Reset Inputs after submit

const ResetInput = () => {
    first.value = '';
    last.value = '';
    email.value = '';
    phone.value = '';
    adress.value = '';
    zipcode.value = '';
    postcity.value = '';
}



// Find Duplicate email

const find = (email, list) => {
    const exist = false;
    for (const item of list) {
        if (email === item.email) {
            return true;
        }
    }
    return exist;
}


