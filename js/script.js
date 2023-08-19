// --1-- //
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// --Відповідь-- //
// const studentInfo = {
//   name: "Andiy",
//   specialization: "js developer",
//   avarageMark: "90",
//   missedClasses: "0",
//   showInfo: function () {
//     console.log(
//       "Name: " +
//         this.name +
//         "; Specialization: " +
//         this.specialization +
//         "; AvarageMark: " +
//         this.avarageMark +
//         "; MissedClasses: " +
//         this.missedClasses
//     );
//   },
// };

// studentInfoB = {
//   name: "Bogdan",
//   specialization: "js developer",
//   avarageMark: "80",
//   missedClasses: "1",
// };

// studentInfoV = {
//   name: "Vadim",
//   specialization: "js developer",
//   avarageMark: "70",
//   missedClasses: "2",
// };

// studentInfoG = {
//   name: "George",
//   specialization: "js developer",
//   avarageMark: "60",
//   missedClasses: "3",
// };

// studentInfo.showInfo(studentInfo);
// studentInfo.showInfo.call(studentInfoB);
// studentInfo.showInfo.apply(studentInfoV);
// studentInfo.showInfo.bind(studentInfoG)();

// --2-- //
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// --Відповідь-- //
const buttons = {
  showInfo() {
    console.log(this.item);
  },
};

const html = {
  item: [
    "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері",
  ],
};

const css = {
  item: [
    "CSS — спеціальна мова, за допомогою якої описують вигляд веб-сторінки",
  ],
};

document
  .querySelector("#html")
  .addEventListener("click", buttons.showInfo.bind(html));

document
  .querySelector("#css")
  .addEventListener("click", buttons.showInfo.bind(css));

// --3-- //
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// --Відповідь-- //
// const magazine = {
//   showInfo: function () {
//     console.log(
//       this.productName + " вартість за кілограм: " + this.productPrice + "$;"
//     );
//   },
// };

// banana = {
//   productName: "Банан",
//   productPrice: "30",
//   productQuantity: "4,5",
// };

// cherry = {
//   productName: "Вишня",
//   productPrice: "50",
//   productQuantity: "1,3",
// };

// orange = {
//   productName: "Апельсин",
//   productPrice: "89",
//   productQuantity: "3,4",
// };

// magazine.showInfo.call(banana);
// magazine.showInfo.call(cherry);
// magazine.showInfo.call(orange);
