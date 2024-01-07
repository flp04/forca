console.log('oi mundão')
fetch('http://127.0.0.1:5000/palavraSecreta')
.then(response => response.json())
.then(data => {
  // console.log(JSON.parse(data))
  for (let i = 0; i < data.nome.length; i++) {
    let divPalavraSecreta = document.getElementById('palavra-secreta')
    let divLetra = document.createElement('div')
    divLetra.setAttribute('class', 'letter-box')
    console.log(data.nome.length)
    divPalavraSecreta.appendChild(divLetra)
  }

  console.log(data.nome)

  document.addEventListener('keydown', (event) => {
    tecla = event.key
    if (/^[a-zA-Z]$/.test(tecla)) {
      if(data.nome.toLowerCase().includes(tecla.toLowerCase())) {
        for (let i in data.nome) {
          if (data.nome[i].toLowerCase() == tecla.toLowerCase()) {
            document.getElementById('palavra-secreta').children[i].textContent = tecla.toUpperCase()
          }
          console.log(data.nome[i])
        }
      } else {
        let foi = false
        partes = ['cabeca','corpo','braco esquerdo','braco direito','perna esquerda','perna direita']
        boneco = document.getElementById('boneco-palito')
        for (let i in partes) {
          if (!foi && document.getElementById(partes[i]).style.display == 'none') {
            document.getElementById(partes[i]).style.display = 'block'
            foi = true
          }
        }
      }
    }
  })
})