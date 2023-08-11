function verificar(){

    var veloci = document.getElementById('velocidade');
    var resultado = document.getElementById('resultado');
    var v = Number(veloci.value);

    if(v < 60 || v == 60){
        resultado.innerText = `Parabéns! Você está dirigindo a ${v}km/h, uma velocidade permitida.`;
        resultado.style.color = ('#3EC70B')
    }
    else{
        resultado.innerText = `Alerta! Você está dirigindo a ${v}km/h exedendo a velocidade permita, e será multado.`;
        resultado.style.color = ('#B70404');
    }

}