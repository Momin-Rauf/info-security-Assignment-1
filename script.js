// Updated Polybius Square
const polybiusSquare = {
    'B': [1, 1], 'G': [1, 2], 'W': [1, 3], 'K': [1, 4], 'Z': [1, 5],
    'Q': [2, 1], 'P': [2, 2], 'N': [2, 3], 'D': [2, 4], 'S': [2, 5],
    'I': [3, 1], 'O': [3, 2], 'A': [3, 3], 'X': [3, 4], 'E': [3, 5],
    'F': [4, 1], 'C': [4, 2], 'L': [4, 3], 'U': [4, 4], 'M': [4, 5],
    'T': [5, 1], 'H': [5, 2], 'Y': [5, 3], 'V': [5, 4], 'R': [5, 5]
};

// Helper function to get letter from Polybius coordinates
function getLetterFromCoordinates(row, col) {
    for (const [letter, coords] of Object.entries(polybiusSquare)) {
        if (coords[0] === row && coords[1] === col) {
            return letter;
        }
    }
    return '';
}

// Encryption function
function encryptMessage() {
    // Get input and convert it to uppercase
    const plaintext = document.getElementById('plaintext').value.toUpperCase().replace(/[^A-Z]/g, ''); // Clean input
    let rowCoords = [];
    let colCoords = [];

    // Step 1: Convert each letter to its Polybius square coordinates
    for (let letter of plaintext) {
        const [row, col] = polybiusSquare[letter];
        rowCoords.push(row);
        colCoords.push(col);
    }

    // Step 2: Concatenate the row coordinates and column coordinates
    const combinedCoords = rowCoords.concat(colCoords);

    // Step 3: Split the combined coordinates into pairs again and convert back to letters
    let ciphertext = '';
    for (let i = 0; i < combinedCoords.length; i += 2) {
        const row = combinedCoords[i];
        const col = combinedCoords[i + 1];
        ciphertext += getLetterFromCoordinates(row, col);
    }

    // Output the result
    document.getElementById('ciphertext').innerText = ciphertext;
}

// Decryption function
function decryptMessage() {
    const ciphertext = document.getElementById('encryptedText').value.toUpperCase().replace(/[^A-Z]/g, '');
    const totalLength = ciphertext.length;

    let coords = [];

    // Step 1: Convert each letter back to its coordinates
    for (let letter of ciphertext) {
        const [row, col] = polybiusSquare[letter];
        coords.push(row, col);
    }

    // Step 2: Separate the row and column coordinates
    let rowCoords = coords.slice(0, totalLength); // Take all as rows for decoding
    let colCoords = coords.slice(totalLength);    // No need to separate since all are needed

    // Step 3: Reconstruct the original coordinates and convert back to letters
    let decryptedText = '';
    for (let i = 0; i < rowCoords.length; i++) {
        decryptedText += getLetterFromCoordinates(rowCoords[i], colCoords[i]);
    }

    // Output the result
    document.getElementById('decryptedtext').innerText = decryptedText;
}
