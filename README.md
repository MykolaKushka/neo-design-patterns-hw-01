# neo-design-patterns-hw-01

Навчальний проєкт з моделювання бібліотечної системи, що демонструє застосування основних принципів об'єктно-орієнтованого програмування в TypeScript:

- Інкапсуляція
- Абстракція
- Наслідування
- Поліморфізм
- Агрегація

## 📁 Структура проєкту

/src
/models
Author.ts
Book.ts
Copy.ts
Reader.ts
Library.ts
AbstractBook.ts
EBook.ts
/services
BorrowService.ts
main.ts
tsconfig.json


## 🧪 Функціональність

- Додавання авторів, книг, копій, читачів до бібліотеки
- Позичання та повернення примірників
- Відображення описів фізичних та електронних книг через поліморфізм
- Заборона створення об'єктів `AbstractBook`

## ▶️ Запуск

### Встановлення залежностей

npm install

Запуск демонстраційного сценарію

npx ts-node src/main.ts

Очікуваний вивід

Attempting to borrow copy1...
Borrow result: true
Attempting to borrow copy1 again...
Borrow result: false
Attempting to return copy1...
Copy1 is available: true

Book descriptions:
Physical book "The Great Book" by John Doe (2020)
E-book "Digital Book" by John Doe (2021) - Available at: <https://example.com/ebook>

## 📦 Технології

  Node.js
  TypeScript (без сторонніх бібліотек)