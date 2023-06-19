const birthdayEl = document.getElementById("birthday");
const submitEl = document.getElementById("submit")
const result = document.getElementById("result")

submitEl.addEventListener("click",calculateAge);

function calculateAge(){
    const birthday = birthdayEl.value;
    
    if(birthday ==0){
        alert("Enter the correct details");
    }
    else{
        const age = getAge(birthday)
        result.innerText = `The age is ${age} ${age>1 ? "year" : "years"} old`
    }
}

function getAge(birthday){
    const currentDate = new Date();
    const dob = new Date (birthday);
    const month = currentDate.getMonth() - dob.getMonth();
    let age = currentDate.getFullYear() - dob.getFullYear();
    
    if(month<0 || month===0 && currentDate.getDate() < dob.getDate()){
        age--
    }
    return age;
}