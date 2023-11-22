function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Juan" && pass=="1234"){
        window.location="index.html";
    }
    else{
        alert("Datos incorrectos");
    }
}
function goBack() {
    window.location="index.html";
}
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var pago = document.getElementById('pago').value;
    var cantidad = document.getElementById('cantidad').value;
    if (nombre && direccion && pago && cantidad) {
        // Muestra el mensaje de éxito
        alert('¡Venta realizada con éxito!');
        // Evita que el formulario se envíe
        return false;
    } else {
        // Si algún campo está vacío, muestra una alerta
        alert('Por favor, completa todos los campos.');
        
        // Evita que el formulario se envíe
        return false;
    }
}
