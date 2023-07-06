/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//given an array of integer nums and an integer target return indices of the two numbers that add up
function twoSum(nums, target) {
    const complementMap = new Map(); // Map to store complements
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      // Check if complement exists in the map
      if (complementMap.has(complement)) {
        // Return the indices of the two numbers
        return [complementMap.get(complement), i];
      }
  
      // Store the current number and its index as a potential complement for future iterations
      complementMap.set(num, i);
    }
  
    // No solution found
    return null;
  }
  