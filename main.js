const myGender = document.myform.gender.value;
//get the value of gender form
const submitBtn = document.getElementById("submitbtn");
//give submit button a variable
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    const khanName = document.getElementById("khanname");
//get element of the name to be assigned
    const myBirthday = document.getElementById("birthday").value;
    
    var newBirthday = new Date(myBirthday); 
    var myDay = newBirthday.getDay()
    
    var fAkhanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var mAkhanNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    

})
