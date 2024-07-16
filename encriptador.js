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
    // Obtener el texto encriptado que deseas copiar
    var textoEncriptadoCompleto = document.getElementById('outputText').textContent.trim();
    var enunciado = "Texto encriptado:";

    // Verificar si el enunciado está presente al inicio del texto encriptado
    if (textoEncriptadoCompleto.startsWith(enunciado)) {
        // Obtener solo el texto encriptado sin el enunciado
        var textoEncriptado = textoEncriptadoCompleto.substring(enunciado.length).trim();
    } else {
        // Si el enunciado no está presente, copiar todo el texto encriptado
        var textoEncriptado = textoEncriptadoCompleto;
    }

    // Crear un área de texto temporal para copiar el texto encriptado
    var textarea = document.createElement('textarea');
    textarea.value = textoEncriptado;
    document.body.appendChild(textarea);

    // Seleccionar y copiar el texto dentro del área de texto
    textarea.select();
    document.execCommand('copy');

    // Remover el área de texto temporal
    document.body.removeChild(textarea);

    // Mensaje opcional de éxito o acción adicional
    alert('¡Texto encriptado copiado!');
}

function activateCopyButton() {
    // Activar el estilo del botón "Copiar" cuando hay texto encriptado visible
    var copyButton = document.querySelector('.copyText');
    copyButton.style.backgroundColor = '#007bff'; // Azul
    copyButton.style.color = 'white'; // Texto blanco
}

function activateDecryptButton() {
    // Verificar si el texto actual en el campo de entrada está encriptado
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
    // Verifica si el texto comienza con el prefijo "Texto encriptado:"
    var enunciado = "Texto encriptado:";
    return text.startsWith(enunciado);
}

function customCipher(str) {
    // Mapear las letras según el nuevo cifrado
    return str.split('').map(char => {
        switch (char) {
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'a': return 'ai';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return char; // Mantener cualquier otro carácter sin cambios
        }
    }).join('');
}

function customDecipher(str) {
    // Mapear las letras según el nuevo descifrado
    return str.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
}

function validateInput(str) {
    // Verifica si la cadena solo contiene letras minúsculas y espacios
    return /^[a-z\s]+$/.test(str);
}
