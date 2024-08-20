document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    function addMessage(username, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `
            <div class="username">${username}:</div>
            <div class="text">${text}</div>
        `;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            // For demonstration purposes, we'll use a static username
            addMessage('User', messageText);
            messageInput.value = '';
        }
    });

    // Allow pressing Enter to send messages
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});