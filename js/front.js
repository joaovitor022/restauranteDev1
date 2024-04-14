document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card'); // Seleciona todos os cartões de pratos

    // Função para filtrar cartões com base no termo de busca
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase(); // Pega o termo de busca e converte para minúsculo

        // Itera sobre cada cartão
        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').innerText.toLowerCase(); // Pega o título do prato do cartão
            const cardText = card.querySelector('.card-text').innerText.toLowerCase(); // Pega a descrição do prato do cartão

            // Verifica se o termo de busca está presente no título ou na descrição
            if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
                card.style.display = ''; // Mostra o cartão
            } else {
                card.style.display = 'none'; // Esconde o cartão
            }
        });
    }

    // Adiciona um evento de input ao campo de busca
    searchInput.addEventListener('input', filterCards);
});
