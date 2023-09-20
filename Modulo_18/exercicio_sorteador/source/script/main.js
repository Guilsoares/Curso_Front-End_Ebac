document.addEventListener('DOMContentLoaded',(e)=>{
   document.querySelector('#formulario').addEventListener('submit',(e)=>{
    e.preventDefault()
    let valorMax = document.querySelector('#numeroMax').value
    let cxRes = document.querySelector('#res')
    valorMax = Number(valorMax)

    let randomNum = Math.random() * valorMax

    cxRes.innerHTML = Math.floor(randomNum +1)

    document.querySelector('.resultado').style.display = 'block'


    
   })

})