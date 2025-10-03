/*
 * locadora.js - Lógica de simulação de locação
 */

// Objeto para rastrear o status de cada filme
const statusFilmes = {};

function simularLocacao(tituloFilme, tipoAcao) {
    // 1. Encontra o ID do filme (ex: "Filme 1" -> "filme1")
    const filmeId = tituloFilme.toLowerCase().replace(/\s/g, ''); 
    const statusElement = document.getElementById(`status-${filmeId}`);
    
    if (!statusElement) {
        console.error("Elemento de status não encontrado para:", filmeId);
        return;
    }

    let mensagem = "";
    
    // 2. Verifica se o filme já foi "Vendido" (status 1)
    if (statusFilmes[filmeId] === 1) {
        mensagem = `ERRO: O filme "${tituloFilme}" já foi VENDIDO e não está mais disponível.`;
        statusElement.textContent = mensagem;
        statusElement.classList.add('status-vendido'); // Aplica o estilo de erro/vendido
        return;
    }

    // 3. Processa a nova ação
    if (tipoAcao === 'Emprestar') {
        mensagem = `SIMULAÇÃO: "${tituloFilme}" foi EMPRESTADO com sucesso por R$ 5,00. Aproveite!`;
        statusFilmes[filmeId] = 2; // Status 2: Emprestado
        statusElement.classList.remove('status-vendido');
    } else if (tipoAcao === 'Vender') {
        mensagem = `SIMULAÇÃO: Parabéns! Você VENDEU o filme "${tituloFilme}" por R$ 30,00. Estoque esgotado!`;
        statusFilmes[filmeId] = 1; // Status 1: Vendido
        statusElement.classList.add('status-vendido'); // Aplica o estilo de sucesso/vendido
        
        // Opcional: Desabilitar os botões após a venda (melhor UX)
        const botoes = statusElement.closest('.locadora-actions').querySelectorAll('button');
        botoes.forEach(btn => btn.disabled = true);
    }
    
    // 4. Atualiza a mensagem de status na tela
    statusElement.textContent = mensagem;

    // Opcional: Adiciona um alerta para feedback imediato
    alert(mensagem);
}