let resposta = document.getElementById('resposta')

let btn_consult_usuario = document.getElementById('btn_consult_usuario')

btn_consult_usuario.addEventListener('click', (e)=>{
    e.preventDefault()

    const codUsuario = Number(document.getElementById('codUsuario').value)

    fetch(`http://localhost:3000/usuario/${codUsuario}`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML += `Nome: ${dados.nome}<br>`
        resposta.innerHTML += `Email: ${dados.email}<br>`
        resposta.innerHTML += `Senha: ${dados.senha}<br>`
        resposta.innerHTML += `<br><br>`
    })
    .catch((err)=>{
        console.error('Não foi possível cadastrar o Usuário',err)
        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
        resposta.innerHTML += `<br><br>`
    })

})