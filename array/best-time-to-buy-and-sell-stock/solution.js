/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // set maxProfit
  let maxProfit = 0;
  // loop through the day prices
  for (let i = 0; i < prices.length; i++) {
    // loop through the future day prices
    let futurePrices = prices.slice(i + 1);
    for (let j = 0; j < futurePrices.length; j++) {
      // calculate prices (future - selected prices )
      let profit = futurePrices[j] - prices[i];
      // compare against maxProfit
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

// SOLUTION FAILED: O(n^2) solution timed out at large inputs, better solution using Two Pointer technique (O(n) time and O (1) space complexity)

// CORRECT SOLUTION - Two Pointer
const maxProfit = (prices) => {
  let left = 0; // Buy (pointer)
  let right = 1; // Sell (pointer)
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      // profitable? Do we need to change the pointer?
      let profit = prices[right] - prices[left]; // our current profit (sell - buy)

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
