let NumeroMaximoPosible = 100;
let numeroSecreto = Math.floor (Math.random()*NumeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos =6;

while (numeroUsuario!=numeroSecreto) {
    numeroUsuario=parseInt(prompt(`me indicas un numero entre 1 y ${NumeroMaximoPosible} porfavor?`));

    console.log (typeof (numeroUsuario));

    if(numeroUsuario == numeroSecreto){
        alert (`Acertaste el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos==1 ? "vez" : "veces"} `)
    } else{
        if (numeroUsuario > numeroSecreto ) {
            alert('el numero secreto es menor');
        }
        else {alert('el numero secreto es mayor');
    }
    }

    intentos++

}