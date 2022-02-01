// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.

let coinz = [1, 2, 5];
let amountz = 11; // 5 + 5 + 1
var initialResult = '';

var change = (coins, amount) => {
    var MinCoins = (coins, i, sum, amount, count, result) => {
        if (amount == 0){
            return -1;
        }

        if (sum > amount){
            return result;
        }

        if (sum == amount){
            result = Math.min(count, result)
            return result
        }

        if (i <= coins.length - 1){ 
            count++
            result = MinCoins(coins, i, sum+coins[i], amount, count, result)

            count--
            result = MinCoins(coins, i+1, sum, amount, count, result)
        }
        return result
    }

    var result = MinCoins(coins, 0, 0, amount, 0, amount+1)

    if (result == initialResult){
        return -1
    } else {
        return result
    }
}

console.log(change(coinz, amountz))