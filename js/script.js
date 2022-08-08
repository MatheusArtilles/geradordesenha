function geraSenhaAleatoria() {
    const senha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@*abcdefghijklmnopqrstuvwxyz'
    var senhaGerada = ''
    var escolha = document.getElementById('escolha').value
    for(var i = 0; i < escolha; i++){
       senhaGerada += senha.charAt(Math.floor(Math.random() * senha.length)) 
    }
    return senhaGerada
}
document.getElementById('botao').addEventListener('click', () => {
    var nova_senha = geraSenhaAleatoria()
    var mostra_senha = document.getElementById('resultado')
    mostra_senha.textContent = `${nova_senha}`
    document.getElementById('area-sucesso').style.display = "none"
    document.getElementById('area-resultado').style.display = "block"
    document.getElementById('area-copia').style.display = "block"
    
})

function copiaTexto() {
    var textoCopiado = document.getElementById('resultado').innerHTML
    
    navigator.clipboard.writeText(textoCopiado)
    document.getElementById('area-sucesso').style.display = "block"
    alert('Senha copiada com sucesso!')
    

}
function mostrarRange() {
    document.getElementById('tamanho').innerText = document.getElementById('escolha').value
}