const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // Sell
  let max_profit = 0;
  console.log(prices);
  while (right < prices.length) {
    console.log("LEFT POINTER", left, "Price", prices[left]);
    console.log("RIGHT POINTER", right, "Price", prices[right]);
    if (prices[left] < prices[right]) {
      // profitable? Do we need to change the pointer?
      let profit = prices[right] - prices[left]; // our current profit (sell - buy), can't go back in "time" to calculate
      console.log("CURRENT PROFIT", profit);

      max_profit = Math.max(max_profit, profit); // use built in Math.max() function to determine max
      console.log("MAX PROFIT", max_profit);
    } else {
      console.log(
        `RIGHT POINTER (SELL), ${prices[right]} LESS THAN LEFT (BUY) ${prices[left]}, changing left to right`
      );
      // non-profitable, change left (buy) pointer to the right (sell)
      left = right;
    }
    right++;
  }
  return max_profit;
};

// SOLUTION: Two Pointer Technique
// Time Complexity: O(n)
// Space Complexity: O(1)
// LEFT POINTER is BUY
// RIGHT POINTER is SELL

// maxProfit([7, 1, 5, 3, 6, 4]);
// console.log("\n");
// maxProfit([7, 2, 1, 5, 11, 4, 10]);
