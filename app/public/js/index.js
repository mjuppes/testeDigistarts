function adicionarCampo(){

    let elements = document.getElementsByClassName('divInputs');
    let input = document.createElement('input');
    input.name = 'valor';
    input.type = 'text';
    let br = document.createElement('br');

    for(i=0;i< elements.length; i++) {
        elements[i].appendChild(br);
        elements[i].appendChild(br);
        elements[i].appendChild(br);
        elements[i].appendChild(input);
    }



}