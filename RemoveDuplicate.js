/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let uniqueCount = 1; // At least the first element is always unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueCount] = nums[i]; // Shift unique element to the front
            uniqueCount++;
        }
    }
    
    return uniqueCount;
};
