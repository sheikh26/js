var globVariable = 0;

function doDelete(frm){
  
  if(frm.rollNo.value == ''){
  	alert("Roll number can not be null")
  	frm.rollNo.focus();
  }else {
     var flag = confirm("Are you sure ?");
     alert(flag);
     if(flag){
        frm.submit();
     }
  }   
}

function calc(frm){
  var n1 = parseInt(frm.num1.value);
  var n2 = parseInt(frm.num2.value);
  
  frm.sum.value = n1 + n2;
 
}
