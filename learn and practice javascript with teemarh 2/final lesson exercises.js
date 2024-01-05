'use strict';

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 3));

//12l
function countPositive(nums) {
    let positiveNumbers = 0;

    nums.forEach(function(num){
        if (num > 0) {
            positiveNumbers++;
        } 
    });
    return positiveNumbers;
}

console.log(countPositive([2, 3, -5, -9, 1, 3]));

//12m 
function addNum(array, num) {
   return array.map((value) => value + num)
}
console.log(addNum([3, 4, 6], 6));


// 12n 
function removeEgg(foods) {
  return  foods.filter((value) => {
        if (value === 'egg') {
            return false;
        } else {
            return true;
        }
    })
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


//12o


function removeTwoEggs(foods) {
    let removedEggs = 0;

    return foods.filter((food) => {
        if(food === 'egg' && removedEggs < 2) {
            removedEggs++;
            return false;
        }
        return true;
    });
   
}

console.log(removeTwoEggs(['egg', 'apple','egg','egg', 'ham']));

//12p

// DONE


//12Q
// DONE


// 12 DONE

// 12s DONE
