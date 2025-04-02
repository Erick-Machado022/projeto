function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('claro')

  
    // pegar a tag img

    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains('claro')) {
        // se tiver light mode, add a img light
        img.setAttribute('src', './assets/avatar-light.png')
    
    } else {
      // se tiver sem ligth mode, manter a imagem normal
      img.setAttribute('src','./assets/avatar-dark.png')


    }

}