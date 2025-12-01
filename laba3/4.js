// Оголошуємо об'єкт iface
const iface = {
  method1: (a, b) => {},
  method2: function(c, d, e) {},
  method3: function(f) {}
};

// Створюємо порожній двовимірний масив для зберігання результатів
const introspectionResults = [];

// Ітеруємо всі ключі об'єкта объекта iface
Object.keys(iface).forEach(key => {
  // Перевіряємо, що значення ключа є функцією
  if (typeof iface[key] === 'function') {
    // Отримуємо кількість аргументів у функції
    const argCount = iface[key].length;
    // Додаємо дані у двовимірний масив
    introspectionResults.push([key, argCount]);
  }
});

// Виводио результати
console.log(introspectionResults);

