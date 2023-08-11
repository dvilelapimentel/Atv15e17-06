function selecionar(){
    var nacional = document.getElementById('pais');
    var selecionar = document.getElementById('nacionalidade');
    var nac = String(nacional.value);
    
    if(nac == 'Brasil'){
        selecionar.innerText = 'Você é brasileiro!';
    }
    else{
        selecionar.innerText = 'Você é extrangeiro!';
    }

}