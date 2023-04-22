
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


// Задание 2

// Напишите функцию, которая принимает на входе любое число(но не больше 1 000),
// определяет, является ли оно простым, и выводит, простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.

function PrimeNumber(GetNum) {
    if (!isNaN(GetNum)) {
        if (isNaN(GetNum) || GetNum < 1 || GetNum > 1000) {
            return `введите число от 1 до 1000`;
        }
        for (let i = 2; i < GetNum; i++) {
            if (GetNum % i === 0) {
                return `Число ${GetNum} не является простым`;
            }
        }
        return `Число ${GetNum} является простым`;
    } else {
        return `введите число от 1 до 1000`;
    }
};

document.getElementById("task_2_button").addEventListener("click", function () {
    let GetNum = document.getElementById("task_2_Input").value;
    document.getElementById("task_2_result").textContent = PrimeNumber(GetNum);
});


// Задание 3

// Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

document.getElementById("task_3__button").addEventListener("click", function () {
    const addNumbers = makeAdder(parseInt(document.getElementById("task_1__Input-1").value)); // знач из первого поля
    const result = addNumbers(parseInt(document.getElementById("task_1__Input-2").value)); // знач из второго поля
    console.log(result); // вывод результата


    document.getElementById("task_3__result").textContent = result;
})





// Задание 4

// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
// Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число,
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function Range_Busting(range_Start, range_end) {
    let i = range_Start;
    function Print_Next() {
        if (i < range_end) {
            i++;
            document.getElementById("task_4__result").textContent = i;
            setTimeout(Print_Next, 1000);
        }
    }
    Print_Next();
};

document.getElementById("task_4__button").addEventListener("click", function () {
    let range_Start = parseInt(document.getElementById("task_4__Input-1").value);
    let range_end = parseInt(document.getElementById("task_4__Input-2").value);

    Range_Busting(range_Start, range_end);

    // document.getElementById("task_4__result").textContent = range_Start + range_end;
})