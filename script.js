corpo.document.designMode = "on";

botoes = document.querySelectorAll('i')
botoes.forEach(bt =>{
    bt.addEventListener('click', ()=>{
        if ((bt.id === 'bold') || (bt.id === 'italic') || (bt.id === 'underline') || (bt.id === 'strikeThrough')){
            negritoItalicoTachadoUnderline(bt.id)
        } else if ((bt.id === 'center') || (bt.id === 'left') || (bt.id === 'right')){
            alinhamento(bt.id)
        } else {
            eval(bt.id)()
        }
    })
})

function save(){
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

function negritoItalicoTachadoUnderline(acao){
    obj = document.querySelector(`#${acao}`).style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand(acao, false)
    } else {
        obj.color = 'yellow'
        corpo.document.execCommand(acao)
    }   
}

function alinhamento(acao){
    // OUTRO1 E OUTRO2 REPRESENTA OS OUTROS 2 TIPOS DE ALINHAMENTO,
    // A REFERENCIA FOI NECESSARIA POIS QUANDO 1 DOS 3 ALINHAMENTOS É CLICADO,
    // DEVE FICAR AMARELO, E OS OUTROS 2 DEVEM FICAR PRETOS
    if (acao === 'left'){
        outro1 = document.querySelector('#center').style
        outro2 = document.querySelector('#right').style
    } else if (acao === 'right'){
        outro1 = document.querySelector('#center').style
        outro2 = document.querySelector('#left').style
    } else {
        outro1 = document.querySelector('#left').style
        outro2 = document.querySelector('#right').style
    }

    obj = document.querySelector(`#${acao}`).style
    if(obj.color === 'yellow'){
        obj.color = 'black'
        corpo.document.execCommand(`justify${acao}`, false)
    } else {
        //SE 1 É AMARELO OS OUTROS 2 TEM QUE SER PRETOS
        obj.color = 'yellow'
        outro1.color = 'black'
        outro2.color = 'black'
        corpo.document.execCommand(`justify${acao}`)
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

function unlink(){
    corpo.document.execCommand('unlink')
}

function continuar(){
    document.querySelector('div#menu').style.display="flex"
    document.querySelector('iframe').style.border="1px solid black"
}


 