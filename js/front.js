// Script para lidar com o envio do formulário e exibir mensagens de sucesso/erro
document.addEventListener('DOMContentLoaded', function () {
    // Selecione o formulário e o botão de envio
    const form = document.querySelector('#reservaForm');
    const submitButton = form.querySelector('[type="submit"]');
    
    // Função para exibir mensagens
    function showMessage(message, isSuccess) {
        // Cria um elemento para a mensagem
        const messageElement = document.createElement('div');
        messageElement.className = isSuccess ? 'success' : 'error';
        messageElement.innerText = message;
        
        // Adiciona a mensagem no formulário
        form.parentNode.insertBefore(messageElement, form);
        
        // Remove a mensagem após alguns segundos
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }

    // Função para lidar com o envio do formulário
    function handleFormSubmit(event) {
        event.preventDefault(); // Evita o envio padrão

        // Muda o estado do botão para "Enviando..."
        submitButton.disabled = true;
        submitButton.innerText = 'Enviando...';

        // Envia o formulário usando o endpoint do Formspree
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    // Exibe mensagem de sucesso
                    showMessage('Reserva enviada com sucesso!', true);
                    form.reset(); // Limpa o formulário
                } else {
                    // Exibe mensagem de erro
                    showMessage('Erro ao enviar a reserva.', false);
                }
                // Restaura o estado do botão
                submitButton.disabled = false;
                submitButton.innerText = 'Fazer Reserva';
            })
            .catch(() => {
                // Exibe mensagem de erro
                showMessage('Erro ao enviar a reserva.', false);
                // Restaura o estado do botão
                submitButton.disabled = false;
                submitButton.innerText = 'Fazer Reserva';
            });
    }

   
    form.addEventListener('submit', handleFormSubmit);
});

