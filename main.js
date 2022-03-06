
const myGender = document.myform.gender.value;



const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const khanName = document.getElementById("khanname");

    const myBirthday = document.getElementById("birthday").value;
    var newBirthday = new Date(myBirthday); 
console.log (newBirthday)
})
