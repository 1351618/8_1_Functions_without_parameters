
// Задание 1
// В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
// На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
// Удачи!

function NumberType() {
    // Получаем значение из поля ввода
    let inputValue = document.getElementById("task_1__Input").value;
    let list = inputValue.split(" ");

    let even_number = 0;
    let odd_number = 0;
    let lines_and_symbols = 0;
    let number_of_zeros = 0;

    for (let i = 0; i < list.length; i++) {
        const tryNumb = parseInt(list[i]);
        if (!isNaN(tryNumb)) {
            if (tryNumb === 0) {
                console.log(list[i] + "  НОЛЬ");
                number_of_zeros++;
                continue;
            } else if (tryNumb % 2 === 0) {
                console.log(list[i] + "  четное число")
                even_number++;
            } else {
                console.log(list[i] + "  НЕчетное число");
                odd_number++;
            }
        } else {
            console.log(list[i] + " is not a number");
            lines_and_symbols++;
        }
    }

    // Выводим результат
    document.getElementById("task_1__result").textContent =
        `четных чисел: ${even_number},
        нечетных чисел: ${odd_number},
        строки и символы: ${lines_and_symbols},
        нулей: ${number_of_zeros}`;
};


// Обработчик нажатия на кнопку !!!!!!!!
document.getElementById("task_1__button").addEventListener("click", function () {
    NumberType();  // ФУНКЦИЯ ==========================
});