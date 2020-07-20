corpo.document.designMode = "on";

document.querySelector('#save').addEventListener('click', salvar)
document.querySelector('#bold').addEventListener('click', bold)
document.querySelector('#italic').addEventListener('click', italic)
document.querySelector('#underline').addEventListener('click', underline)
document.querySelector('#tachado').addEventListener('click', tachado)
document.querySelector('#left').addEventListener('click', left)
document.querySelector('#right').addEventListener('click', right)
document.querySelector('#center').addEventListener('click', center)
document.querySelector('#link').addEventListener('click', link)
document.querySelector('#unlink').addEventListener('click', removeLink)

function salvar(){
    window.confirm('DICA! NO CAMPO "DESTINO", SELECIONE A OPÇÃO "SALVAR COMO PDF" SE A MESMA AINDA NÃO ESTIVER SELECIONADA EM SEU DISPOSITIVO')
    document.querySelector('#menu').style.display="none"
    document.querySelector('iframe').style="width: 90%; height: 95vh; border: none;"
    window.print()
    return continuar()
}

function changeFont(param){
    corpo.document.execCommand('fontName', 'false', param)
}

function changeSize(tam){
    corpo.document.execCommand('fontSize', 'false', tam)
}

function changeColor(cor){
    corpo.document.execCommand('foreColor', false, cor)
}

function bold(){
    obj = document.querySelector('#bold').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('bold', false)
    } else {
        obj.color = 'yellow'
        corpo.document.execCommand('bold')
    }   
}

function italic(){
    obj = document.querySelector('#italic').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('italic', false)
    } else {
        obj.color = 'yellow'
        corpo.document.execCommand('italic')
    }
}

function underline(){
    obj = document.querySelector('#underline').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('underline', false)
    } else {
        obj.color = 'yellow'
        corpo.document.execCommand('underline')
    }
}

function tachado(){
    obj = document.querySelector('#tachado').style
    if (obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('strikeThrough', false)
    } else {
        obj.color = 'yellow'
        corpo.document.execCommand('strikeThrough')
    }
}

function left(){
    centro = document.querySelector('#center').style
    direita = document.querySelector('#right').style

    obj = document.querySelector('#left').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('justifyLeft', false)
    } else {
        //SE 1 É AMARELO OS OUTROS 2 TEM QUE SER PRETOS
        obj.color = 'yellow'
        centro.color = 'black'
        direita.color = 'black'
        corpo.document.execCommand('justifyLeft')
    }
}

function center(){
    esquerda = document.querySelector('#left').style
    direita = document.querySelector('#right').style

    obj = document.querySelector('#center').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('justifyCenter', false)
    } else {
        obj.color = 'yellow'
        esquerda.color = 'black'
        direita.color = 'black'
        corpo.document.execCommand('justifyCenter')
    }
}

function right(){
    esquerda = document.querySelector('#left').style
    centro = document.querySelector('#center').style

    obj = document.querySelector('#right').style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand('justifyRight', false)
    } else {
        obj.color = 'yellow'
        centro.color = 'black'
        esquerda.color = 'black'
        corpo.document.execCommand('justifyRight')
    }
}

function link(){
    z = corpo.getSelection()
    texto = z.toString()
    if (texto.length === 0){
        window.alert('PRIMEIRO SELECIONE O TEXTO EM QUE O LINK SERÁ INSERIDO!')
    } else {
        url = window.prompt('URL DO LINK')
        corpo.document.execCommand('createLink', 'false', url)
    }
}

function removeLink(){
    corpo.document.execCommand('unlink')
}

function continuar(){
    document.querySelector('div#menu').style.display="flex"
    document.querySelector('iframe').style.border="1px solid black"
}


 