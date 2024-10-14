let input=document.querySelectorAll("input")
let send =document.querySelector("#send")
let phone=document.querySelector("#phone")
let locatin=document.querySelector("#loc")
let credit=document.querySelector("#credit")
let error=document.querySelector("#error")


send.addEventListener("click",sendd)
function sendd(e){
    e.preventDefault()
 
    let televalue=phone.value;
    let telReg=/\(\d{4}\)\s\d{3}-\d{4}/
    let valiTel=telReg.test(televalue)
 
    if(locatin.value=="" && phone.value =="" && credit.value ==""){
       error.innerHTML="Please Enter Data";
       error.style.backgroundColor="red"
       error.style.padding="10px"
       input.forEach((i)=>{
          i.style.borderColor="red"
       })
       return false
    }else if(valiTel === false){
       error.innerHTML="Please enter vaild Phone Number contain (num) num-num"
       error.style.padding="10px"
       tele.style.borderColor="red"
    }else{
        error.style.backgroundColor="green"
        error.style.padding="10px"
        error.innerHTML="pay operation in Successfully"
        localStorage.setItem("phone",phone.value);
        localStorage.setItem("Location",location.value)
        localStorage.setItem("CreditNumber",credit.value)
           
    }
 }
