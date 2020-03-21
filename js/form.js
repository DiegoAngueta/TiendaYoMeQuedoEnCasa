document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let barbero = document.querySelector('#barbero').value;
    

    let url = "https://api.whatsapp.com/send?phone=593987748145&text=*_Diestal Tienda Online_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + 
    cliente + "%0A%0A*Indica la direccion de tu casa*%0A" + fecha + "%0A%0A*Indica el o los productos que necesites que te llevemos a tu casa*%0A" + hora + 
    "%0A%0A*Indica el nimero telefonico de contacto*%0A" + barbero ;
    window.open(url);

});
