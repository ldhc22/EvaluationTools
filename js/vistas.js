 $(document).ready(function(){
   //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    
     //alert("pato");
     
      $("#page-wrapper").load('main.html');
     addDisable();
     checkCookie();
     
/* 

Cargar todas las vistas

*/
    //cargar main
$("#home-menu").click(function event(){
  removeAllCookies();
  $("#page-wrapper").load('main.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");

});

     //cargar el payback
$("#payback").click(function event() {
    //alert("pato");
  $("#page-wrapper").load('payback.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
  $("#payback").addClass("active");
});
     
//cargar el npv
$("#npv").click(function event() {
  $("#page-wrapper").load('npv.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
  $("#npv").addClass("active");
});
//cargar el checklist
$("#checklist").click(function event() {
  $("#page-wrapper").load('checklist.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
  $("#checklist").addClass("active");

});
//cargar el depreciation
$("#depreciation").click(function event() {
  $("#page-wrapper").load('depreciation.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
  $("#depreciation").addClass("active");

});
//cargar el Project Screening Methods
$("#pscm").click(function event() {
  $("#page-wrapper").load('pscm.html');
  /* Mostrar menú activo en la barra de navegación */
  $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
  $("#pscm").addClass("active");

});
 

});

function checkCookie(){
    var name = getCookie("evaluator");
    var projectid = getCookie("projectid");
    if(name!=""&&projectid!=""){
        $("#ename").html("<span class='glyphicon glyphicon-user'></span>"+name);
        $("#project-place").html("<center><h2>Project id:"+projectid+"</h2></center>");
        $("#page-wrapper").load('payback.html');
        removeDisable();
        $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
        $("#payback").addClass("active");  
    }
}

function addDisable(){
  $("#payback").addClass("disabled");
  $("#npv").addClass("disabled");
  $("#depreciation").addClass("disabled");
  $("#pscm").addClass("disabled");
  $("#checklist").addClass("disabled");
}  

function removeDisable(){
  $("#payback").removeClass("disabled");
  $("#npv").removeClass("disabled");
  $("#depreciation").removeClass("disabled");
  $("#pscm").removeClass("disabled");
  $("#checklist").removeClass("disabled");
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');    
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 

function removeCookie(name){
    document.cookie = name + '= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function removeAllCookies(){
    removeCookie("evaluator");
    removeCookie("projectid");
}
