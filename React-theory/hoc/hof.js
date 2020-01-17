const numbers = [1, 2, 3, 4, 5]

function createAddNumber(number) {
    return function(arr) {
        return arr.map(item => item += number)
    }
}

const addOne = createAddNumber(1)

const addFive = createAddNumber(5)

console.log(addOne(numbers)) // [2, 3, 4, 5, 6]
console.log(addFive(numbers)) // [6, 7, 8, 9, 10]
