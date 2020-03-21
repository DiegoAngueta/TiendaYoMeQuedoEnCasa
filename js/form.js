document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let barbero = document.querySelector('#barbero').value;
    

    let url = "https://api.whatsapp.com/send?phone=593995525697&text=*_Barberia Lider_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + 
    cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*Indica la hora de tu reserva*%0A" + hora + 
    "%0A*Barbero de preferencia*%0A" + barbero ;
    window.open(url);

});
