function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateKey(length, characters) {
    let key = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        key += characters.charAt(random(charactersLength - 1));
    }

    return key;
}

// Приклади використання
console.log(random(5, 10)); // Поверне випадкове значення від 5 до 10
console.log(generateKey(8, 'abcdefghijklmnopqrstuvwxyz0123456789')); // Поверне строку випадкових символів довжиной 8 з заданного набору

