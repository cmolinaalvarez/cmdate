function getTimeStamp(){
    return Date.now()
}

function getLongTime(locale='es-CO'){
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        timeZoneName:'short'
    }
    return new Date().toLocaleDateString(locale, options)
}

function getShorTime(locale='es-CO'){
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        timeZoneName:'short'
    }
    return new Date().toLocaleDateString(locale, options)
}

function getShortDate(locale='es-CO'){
    const date = new Date();
    
    const shortDate = new Intl.DateTimeFormat(locale, { 
        day: '2-digit',    // Fuerza 2 dígitos (ej: "15")
        month: '2-digit',  // Fuerza 2 dígitos (ej: "07")
        year: 'numeric'    // Fuerza 4 dígitos (ej: "2026")
    });
    
    return shortDate.format(date); // Resultado: "15/07/2026"
}
module.exports={
    getTimeStamp,
    getLongTime,
    getShortDate
}