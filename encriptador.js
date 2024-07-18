function encryptText() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let encryptedText = customCipher(inputText); // Encriptar el texto con el nuevo cifrado
        document.getElementById('outputText').innerText = `Texto encriptado: ${encryptedText}`;
        activateCopyButton(); // Activar el botón "Copiar"
        activateDecryptButton(); // Activar el botón "Desencriptar"
    } else {
        alert('El texto contiene mayúsculas o caracteres especiales. Solo se permiten minúsculas y espacios.');
    }
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let decryptedText = customDecipher(inputText); // Desencriptar el texto con el nuevo cifrado
        document.getElementById('outputText').innerText = `Texto desencriptado: ${decryptedText}`;
        activateCopyButton(); // Activar el botón "Copiar"
        activateDecryptButton(); // Activar el botón "Desencriptar"
    } else {
        alert('El texto contiene mayúsculas o caracteres especiales. Solo se permiten minúsculas y espacios.');
    }
}

function copyText() {
    var textoEncriptadoCompleto = document.getElementById('outputText').textContent.trim();
    var enunciado = "Texto encriptado:";

    if (textoEncriptadoCompleto.startsWith(enunciado)) {
        var textoEncriptado = textoEncriptadoCompleto.substring(enunciado.length).trim();
    } else {
        var textoEncriptado = textoEncriptadoCompleto;
    }

    var textarea = document.createElement('textarea');
    textarea.value = textoEncriptado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('¡Texto encriptado copiado!');
}

function activateCopyButton() {
    var copyButton = document.querySelector('.copyText');
    copyButton.style.backgroundColor = '#007bff'; // Azul
    copyButton.style.color = 'white'; // Texto blanco
}

function activateDecryptButton() {
    var inputText = document.getElementById('inputText').value;
    if (isEncrypted(inputText)) {
        var decryptButton = document.querySelector('.decrypt');
        decryptButton.style.backgroundColor = '#007bff'; // Azul
        decryptButton.style.color = 'white'; // Texto blanco
    } else {
        var decryptButton = document.querySelector('.decrypt');
        decryptButton.style.backgroundColor = ''; // Restablecer color
        decryptButton.style.color = ''; // Restablecer color
    }
}

function isEncrypted(text) {
    var enunciado = "Texto encriptado:";
    return text.startsWith(enunciado);
}

function customCipher(str) {
    return str.split('').map(char => {
        switch (char) {
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'a': return 'ai';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return char;
        }
    }).join('');
}

function customDecipher(str) {
    return str.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
}

function validateInput(str) {
    return /^[a-z\s]+$/.test(str);
}
