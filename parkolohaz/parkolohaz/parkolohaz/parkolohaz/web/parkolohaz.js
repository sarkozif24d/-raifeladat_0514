// Parkolóház JavaScript kód

// Üzenetküldés függvény
function velemenyKuldes() {
    // Adatok kiolvasása az űrlapból
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Ellenőrzés: minden mező kitöltve van-e
    if (!name || !email || !phone || !message) {
        alert('Kérjük, minden mezőt töltsön ki az űrlapon!');
        return;
    }
    
    // JSON adatszerkezet létrehozása
    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    
    // POST kérés küldése a szervernek
    fetch('/api/kapcsolat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 200) {
            // Sikeres küldés
            // Adatok törlése az űrlapból
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
            
            // Sikerüzenet megjelenítése
            alert('Munkatársunk hamarosan keresni fogja önt!');
        } else {
            // Hiba kezelése
            alert('Hiba történt az üzenet küldésekor!');
        }
    })
    .catch(error => {
        console.error('Hiba:', error);
        alert('Hiba történt az üzenet küldésekor!');
    });
}

// Elektromos autó számláló
// Világon 2020-ban percenként 150 elektromos autót gyártottak
function startCounter() {
    let count = 0;
    const counterElement = document.getElementById('szamlalo');
    
    // Fél másodpercenként (500ms) egy 1-gyel nagyobb szám megjelenítése
    setInterval(function() {
        count++;
        counterElement.textContent = count;
    }, 500);
}

// Számláló indítása az oldal betöltődésekor
document.addEventListener('DOMContentLoaded', function() {
    startCounter();
});
