
//alert("Hellow JavaScript")
/*keloke wawawa*/ 
var Nombre="Santa Castro";
var Direccion="Sn Felipe, Puerto P.";

//alert ("Hola, soy "+Nombre+' quien vive eb +Direccion+ ");

//Ejemplo de Funciones*/
function ValidarCampos ()
{
        if(document.frmContacto.txtNombre.value.length==0)
        {
            alert("Indique su Nombre");
            document.frmContacto.txtNombre.focus();
            return false;
        }
        if(document.frmContacto.txtCorreo.value.length==0)
        {
            alert("Indique su correo");
            document.frmContacto.txtCorreo.focus();
            return false;
        }
        if(document.frmContacto.txtTelefono.value.length"section")
        {
            alert("Indique su telefono");
            document.frmContacto.txtTelefono.focus();
            return false;
        }
        if(document.frmContacto.txtSexo.value.==0)
        {
            alert("Indique su correo");
            document.frmContacto.txtSexo.focus();
            return false;
        }
}