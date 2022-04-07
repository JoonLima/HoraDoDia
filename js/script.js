
function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    if(hora >= 0 && hora < 12){
        
        imagem.src = 'img/manha-cortada.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `<strong>Bom dia!</strong> <br> Agora são ${hora}h da manhã.`

    } else if (hora >= 12 && hora <= 18) {

        imagem.src = 'img/tarde-cortada.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `<strong>Boa tarde!</strong> <br> Agora são ${hora}h da tarde.`

    } else{
        
        imagem.src = 'img/noite-cortada.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `<strong>Boa noite!</strong> <br> Agora são ${hora}h da noite.`
        
    }
}   


