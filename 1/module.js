// Преобразование строки к нижнему регистру, но первая буква большая
function firstToUpper(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Преобразование строки с целью правильной расстановки пробелов
function properlySpaces(str) {
    let arr = str.split(" ");
    let punct = [",", ".", "!", "?", ":", ";"];
    let new_str = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "") {
            arr.splice(i,1);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length && !punct.includes(arr[i + 1])) {
            let result = arr[i];
            result = result.replace(" ", "");
            for (let j = 0; j < result.length; j ++) {
                new_str += result[j];
                if ((punct.includes(result[j]) && j < result.length - 1 && result[j + 1] !== " ") || j == result.length - 1 ) {
                    new_str += " ";
                }
            }
            arr[i] = new_str;
            new_str = "";
        }
    
    }
    return arr.join("");
}

// Подсчитывающее количество слов в строке
function countWords(str) {
    let count = 0;

    let words = str.split(" ").join(",").split(".").join(",").split(",");

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count++;
        }
    }
    return count;
}

// Подсчитывающий уникальные слова
function uniqueWords(str) {
    let unique = {};
    str = str.toLowerCase();
    let words = str.split(" ").join(",").split(".").join(",").split(",");

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            if (unique.hasOwnProperty(words[i])) {
                unique[words[i]]++;
            }
            else {
                unique[words[i]] = 1;
            }
        } 
    }
    return unique;
}

let test_str = "abCd";
let test_str1 = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
let test_str2 = "Сколько слов в строке";
let test_str3 = "Текст, в котором слово текст несколько раз встречается и слово тоже";
console.log(firstToUpper(test_str));
console.log(properlySpaces(test_str1));
console.log(countWords(test_str2));
console.log(uniqueWords(test_str3));


