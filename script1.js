function vigenereEncrypt(message, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();
    let encryptedMessage = [];
    let keywordIndex = 0;

    // Encrypting each character
    for (let char of message) {
        if (char === " ") {
            encryptedMessage.push(" ");
        } else if (alphabet.includes(char)) {
            const keywordRepeatedChar = keyword[keywordIndex % keyword.length];
            const messageIndex = alphabet.indexOf(char);
            const keywordCharIndex = alphabet.indexOf(keywordRepeatedChar);
            const encryptedChar = alphabet[(messageIndex + keywordCharIndex) % alphabet.length];
            encryptedMessage.push(encryptedChar);
            keywordIndex++;
        }
    }
    return encryptedMessage.join('');
}

function vigenereDecrypt(ciphertext, keyword) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ciphertext = ciphertext.toUpperCase();
    keyword = keyword.toUpperCase();
    let decryptedMessage = [];
    let keywordIndex = 0;

    // Decrypting each character
    for (let char of ciphertext) {
        if (char === " ") {
            decryptedMessage.push(" ");
        } else if (alphabet.includes(char)) {
            const keywordRepeatedChar = keyword[keywordIndex % keyword.length];
            const ciphertextIndex = alphabet.indexOf(char);
            const keywordCharIndex = alphabet.indexOf(keywordRepeatedChar);
            const decryptedChar = alphabet[(ciphertextIndex - keywordCharIndex + alphabet.length) % alphabet.length];
            decryptedMessage.push(decryptedChar);
            keywordIndex++;
        }
    }
    return decryptedMessage.join('');
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    const keyword = document.getElementById('keyword').value;

    const encryptedMessage = vigenereEncrypt(message, keyword);
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Encrypted message: ${encryptedMessage}`;

    // GSAP Animation for the result display
    gsap.fromTo(resultDiv, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0 });

    // Optional: animate button on click
    const encryptButton = document.querySelector("button:nth-child(3)"); // Encrypt button
    gsap.fromTo(encryptButton, { scale: 1 }, { duration: 0.1, scale: 1.1, yoyo: true, repeat: 1 });
}

function decryptMessage() {
    const message = document.getElementById('message').value;
    const keyword = document.getElementById('keyword').value;

    const decryptedMessage = vigenereDecrypt(message, keyword);
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Decrypted message: ${decryptedMessage}`;

    // GSAP Animation for the result display
    gsap.fromTo(resultDiv, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0 });

    // Optional: animate button on click
    const decryptButton = document.querySelector("button:nth-child(4)"); // Decrypt button
    gsap.fromTo(decryptButton, { scale: 1 }, { duration: 0.1, scale: 1.1, yoyo: true, repeat: 1 });
}
