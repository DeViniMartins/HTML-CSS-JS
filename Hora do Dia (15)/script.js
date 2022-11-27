function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('manha')
  //var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12){
    img.src = '../Hora do Dia (15)/Manhã.jpg'
    msg.innerHTML += `<p>Bom dia</p>`
    document.body.style.background = "linear-gradient(40deg, yellow, orange, red)"
  } else if (hora >= 13 && hora <= 18) {
    img.src = '../Hora do Dia (15)/Tarde.jpg'
    msg.innerHTML += `<p>Boa tarde</p>`
    document.body.style.background = "linear-gradient(45deg, rgb(27, 183, 255), rgb(103, 103, 236), rgb(220, 220, 255))"
  } else if (hora > 18 && hora < 24) {
    img.src = '../Hora do Dia (15)/Noite.jpg'
    msg.innerHTML += `<p>Boa noite</p>`
    document.body.style.background = "linear-gradient(45deg, rgb(19, 0, 105), rgb(0, 0, 207), rgb(0, 0, 68))"
  }
}

let data = new Date()
let dataBr = data.toLocaleString('pt-Br', { timeStyle: 'short'});
console.log(dataBr)