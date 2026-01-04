function updateTime() {
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const timeString = now.toLocaleDateString('id-ID', options);
    
    
    const jamElement = document.getElementById('jam-sekarang');
    if (jamElement) {
        jamElement.innerHTML = "Waktu Server: " + timeString;
    }
}

setInterval(updateTime, 1000);

updateTime();