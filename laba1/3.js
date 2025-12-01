// Створюємо вихідний масив з різними типами даних
const myArray = [true, 'hello', 5, 12, -200, false, 'word', {name: 'John'}, ['apple', 'banana']];

// Ініціалізуємо порожній об'єкт-колекцію
let typeCollection = {};

// Проходимося по масиву і підраховуємо кількість кожного типу
for (const element of myArray) {
    const type = typeof element;
    
    // Збільшуємо кількість елементів потрібного типу
    if (typeCollection[type] === undefined) {
        typeCollection[type] = 1;
    } else {
        typeCollection[type]++;
    }
}

// Виводимо кількість кожного типу
console.log(typeCollection);

// Видаляємо ключі з колекції та додаємо їх динамічно
typeCollection = {};  // Очищаємо колекцію

// Проходимося по масиву ще раз і додаємо типи динамічно
for (const element of myArray) {
    const type = typeof element;

    // Додаємо тип, якщо він ще не існує
    if (!typeCollection[type]) {
        typeCollection[type] = 1;
    } else {
        typeCollection[type]++;
    }
}

// Виводимо оновлену колекцію
console.log(typeCollection);
