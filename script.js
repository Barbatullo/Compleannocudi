document.getElementById('generateQrBtn').addEventListener('click', function() {
    // Ottieni l'URL corrente della pagina
    const pageUrl = window.location.href;

    // Seleziona il contenitore del QR code
    const qrcodeContainer = document.getElementById('qrcode');

    // Cancella il QR code precedente, se presente
    qrcodeContainer.innerHTML = '';

    // Crea una nuova istanza di QRCode
    new QRCode(qrcodeContainer, {
        text: pageUrl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
const clickableImage = document.getElementById('miao');
const secretText = document.getElementById('roar');

// Aggiungi un ascoltatore di eventi per il clic sull'immagine
clickableImage.addEventListener('click', function() {
    // Alterna la classe 'hidden' sull'elemento del testo
    secretText.classList.toggle('hidden');
    
        // Oppure, se vuoi che appaia una sola volta, usa:
        // secretText.classList.remove('hidden');
    });