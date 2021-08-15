function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    // var fano = document.getElementById('txtano')
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
      // var fsex = document.getElementsByName('radsex')
      var fsex = document.querySelector('input[name=radsex]:checked').value
      var idade = ano - Number(fano.value)
      // var gênero = ''
      var gênero = fsex === 'm' ? 'Homem' : 'Mulher'
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      var foto = idade >= 0 && idade < 10 ? 'foto_bebe' : idade < 21 ? 'foto_jovem' : idade < 50 ? 'foto_adulto' : 'foto_idoso'
      img.setAttribute('src', `${foto}_${fsex}.png`)
      // if (fsex[0].checked) {
      //   gênero = 'Homem'
      //   if(idade >= 0 && idade <10){
      //     //Criança
      //     img.setAttribute('src', 'foto_bebe_m.png')
      //   }else if (idade <21){
      //     //jovem
      //     img.setAttribute('src', 'foto_jovem_m.png')
      //   }else if (idade <50){
      //     //Adulto
      //     img.setAttribute('src', 'foto_adulto_m.png')
      //   }else{
      //     //idoso
      //     img.setAttribute('src', 'foto_idoso_m.png')
      //   }
      // }else if (fsex[1].checked) {
      //   gênero = 'Mulher'
      //   if(idade >= 0 && idade <10){
      //     //Criança
      //     img.setAttribute('src', 'foto_bebe_f.png')
      //   }else if (idade <21){
      //     //jovem
      //     img.setAttribute('src', 'foto_jovel_f.png')
      //   }else if (idade <50){
      //     //Adulto
      //     img.setAttribute('src', 'foto_adulto_f.png')
      //   }else{
      //     //Idoso
      //     img.setAttribute('src', 'foto_idoso_f.png')
      //   }
      // }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
  }
}
