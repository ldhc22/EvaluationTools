

function Error()
{
  document.getElementById('error_login').style.display="true";
}

function login(){
//  alert("login");
}


$(document).ready(function(){

 //document.getElementById('error_login').style.display="none";
$('#btnlogin').click(function(event){

  event.preventDefault();
  var user = $("#user").val();
  var pass = $("#pass").val();
  var form = 'user='+user+'&pass='+pass;



if ($.trim(user).length>0 && $.trim(pass).length>0) {

  $.ajax({
      url: 'login.php',
      type: 'POST',
      data: form,
  }).done(function(form){
//alert(form);
if(form==1)
{
window.location.href = "fylsa.php";

}
else {
  
$("#error").html("<span style='color:#cc0000'>Error:</span><span style='color:#cc0000'> Invalid username or password. </span>");
}
  });

}



});

});
