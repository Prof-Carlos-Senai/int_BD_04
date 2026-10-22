let resposta = document.getElementById('resposta')

let btn_apagar_usuario = document.getElementById('btn_apagar_usuario')

btn_apagar_usuario.addEventListener('click', (e)=>{
    e.preventDefault()

    const codUsuario = Number(document.getElementById('codUsuario').value)

    fetch(`http://localhost:3000/usuario/${codUsuario}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}<br>`
        resposta.innerHTML += `<br><br>`
    })
    .catch((err)=>{
        console.error('Não foi possível apagar o Usuário',err)
        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
        resposta.innerHTML += `<br><br>`
    })

})