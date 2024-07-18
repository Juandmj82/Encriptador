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
    // Código para copiar texto
}

// Otras funciones como customCipher, customDecipher, validateInput, activateCopyButton, activateDecryptButton, etc.
