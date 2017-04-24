    

var contador_npv=0;

  var acum_npv=0;


var contador=0;
  var acum=0;
var color = 1;



function addNew_npv(){
    

    
   var outflow_npv =document.getElementById("outflow_npv").value;
    var inflow_npv=document.getElementById("inflow_npv").value;
     var principal_npv=document.getElementById("principal_npv").value;
    
    
    
if(outflow_npv==='')
   {
        outflow_npv=0;
   }
 if(inflow_npv==='')
   {
        inflow_npv=0;
   }  

  
    //alert(cumulative_npv);
    //alert(outflow_npv+"_"+inflow_npv);
    
    
    if(contador_npv==0)
        {
            
            outflow_npv=principal_npv;
            cumulative_npv=principal_npv;
            
            
            document.getElementById("principal_npv").disabled = true;
            
            
        }
    

if (contador_npv<=10)
    {

        
        
        var cumulative_npv=inflow_npv -outflow_npv;
        acum_npv = acum_npv+cumulative_npv;
        $('#myTable_npv tr:last').after('<tr><td>'+contador_npv+'</td>   <td>'+outflow_npv+'</td>   <td>'+inflow_npv+'</td><td>'+cumulative_npv+'</td>   <td>'+parseFloat(acum_npv)+'</td></tr>');
    contador_npv+=1;
        
        
        document.getElementById("outflow_npv").value=" ";
         document.getElementById("inflow_npv").value=" ";
        
        //alert(acum_npv);
           

    
    }
    else{
        alert("No puedes seleccionar mas de 10 periodos");
    }
}






function calcular_npv()
{

           
            var salvage_npv=document.getElementById("salvage_npv").value;
            var tasa_i_npv=document.getElementById("tasa_i_npv").value;
            var tax_r_npv=document.getElementById("tax_r_npv").value;
            var periodo_npv=document.getElementById("periodo_s").value;
   
           
    
        //alert(principal_npv+"_"+salvage_npv+"_"+tasa_i_npv+"_"+tax_r_npv+"_"+periodo);
 if((principal_npv === '')|| (salvage_npv === '') || (tasa_i_npv === '') || (tax_r_npv === ''))
     {
         alert("error algun campo esta vacio");
         
     }
    else if((tasa_i_npv <0 )||(tasa_i_npv>100) ||(tax_r_npv <0 )||(tax_r_npv > 100))
    {
        
        alert("error algun interes esta mal");
    }
        else
            {
                
                alert("Succes");    
            }
          
         
}

function reset(){
    /*
    
    Habilitar los botones de Principal y Tasa de interes
    */
    document.getElementById("principal_npv").disabled=false;
    
    /*
    Poner los inputs en 0 otra vez
    */
    
     document.getElementById("outflow_npv").value=" ";
     document.getElementById("inflow_npv").value=" ";
     document.getElementById("principal_npv").value=" ";
     document.getElementById("salvage_npv").value=" ";
     document.getElementById("tasa_i_npv").value=" ";
     document.getElementById("tax_r_npv").value=" ";
    
    /*
     Reset de la tabla
    */
    
     $("#myTable_npv").find("tr:gt(0)").remove();
    
}





/*
Funciones de Raul
*/




var contador=0;
  var acum=0;
var color = 1;
function resetea(){
    $("#principal").prop('disabled', false);
    $("#interes").prop('disabled', false);
    var outflow = document.getElementById("outflow").value= 0;
    var inflow= document.getElementById("inflow").value = 0;
    var principal = document.getElementById("principal").value = 0;
    var interes = document.getElementById("interes").value = 0;
    contador = 0;
    acum = 0;
    color=1;
    $("#myTable").find("tr:gt(0)").remove();
}

function addNew(){
    
   var outflow = document.getElementById("outflow").value;
    var inflow= document.getElementById("inflow").value;
    var principal = document.getElementById("principal").value;
    var interes = document.getElementById("interes").value;
    interes = parseFloat(interes / 100 );
    if(outflow === ''){
        outflow = 0;
    }
    if(inflow === ''){
        inflow = 0;
    }
    if(interes === ''){
        interes = 0;
    }
    if(principal === ''){
        principal = 0;
    }

    principal = principal*(-1);
    outflow = outflow*(-1);
   // inflow = inflow*(-1);


    $("#principal").prop('disabled', true);
    $("#interes").prop('disabled', true);
    var cumulative = 0;
    if (contador==0) {
        outflow = outflow + parseInt(principal);
        //alert("Interes: "+ interes);
        //alert(cumulative);
        cumulative= parseFloat(cumulative) + parseFloat(outflow) +parseFloat(inflow);
    } 
        //CUMULATIVE ES INFLOW + OUTLOW
    else{
        cumulative= parseFloat(outflow) +parseFloat(inflow);
    }
  
    //alert(cumulative);
    //alert(outflow+"_"+inflow);
    
    
if (contador<=10)
    {
 
        acum += cumulative+(acum*interes);
        if (acum >= 0 && color == 1) {
                $('#myTable tr:last').after('<tr><td><label>'+contador+'</label></td>   <td>'+outflow+'</td>   <td>'+inflow+'</td>   <td>'+acum+'</td></tr>');
                contador+=1;
                //$('#myTable tr:last').prop('bgcolor', false);
                $('#myTable tr:last').css('background-color', '#00ff00');
                color = 0;
        } 
        else 
        {
                $('#myTable tr:last').after('<tr><td><label>'+contador+'</label></td>   <td>'+outflow+'</td>   <td>'+inflow+'</td>   <td>'+acum+'</td></tr>');
                contador+=1;
                //addNew();
        }
       // alert("Cumulative: "+cumulative);
        /*document.getElementById("outflow").value=" ";
         document.getElementById("inflow").value=" ";*/
       //alert("Acum: "+acum);
    
    }
    else{
        alert("No puedes seleccionar mas de 10 periodos");
    }
}






function calcular()
{

            //alert("pato");
    
    
            var pats= document.getElementById("myTable").rows[1].cells[1].innerHTML;
            var x=parseFloat(pats);
    
                alert(x);     
}

/********************************************************************************************
/* Autor: Luis Daniel Hernández                                                             *
*********************************************************************************************/

/* Cookie que va a almacenar el número de proyecto y el nombre del evaluador */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 



function addProjectData(projID,ename){
    setCookie("projectid",projID,10);
    setCookie("evaluator",ename,10);
}

function callFromSubmit(myForm){
    var projID  = myForm.id.value;
    var name    = myForm.evaluator.value;
    if(projID == "" || name == ""){
        alert("Fill all the inputs");
    }else{
        addProjectData(projID,name);
        $("#page-wrapper").load('payback.html');
        $("#payback,#npv,#checklist,#depreciation,#pscm").removeClass("active");
        $("#payback").addClass("active");
        removeDisable();                
    }
}

function removeDisable(){
    $("#payback").removeClass("disabled");
    $("#npv").removeClass("disabled");
    $("#depreciation").removeClass("disabled");
    $("#pscm").removeClass("disabled");
    $("#checklist").removeClass("disabled");
}



    
 


