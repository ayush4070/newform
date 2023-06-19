function valform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    
    if(name==""||name==null){
       alert("Please enter your name");
        return false;
    }
    else if(password==""||password==null){
        alert("please enter your password");
         return false;
    }
    else if(password.length<6||password.length>6){
        alert("password must be 6 character");
        return false;

    }

}