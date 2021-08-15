function gerar(){
  let num = document.getElementById('chNum')
  let tab = document.getElementById('selTab')
  if (num.value.length == 0){
    window.alert('Por favor, digite um número!')
  }else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab ${c}`
      tab.appendChild(item)
      c++
    }
  }


}
/*var chNum = document.querySelector(`#chNum`)
var contNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
for(var i=0; i<=10; i++){
  var res=chNum*i;
  console.log(`${chNum}x${'i'}=${res}`)
}*/
