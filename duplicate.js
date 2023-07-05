//given an integer array nums, return true if any value appears at least twice in the array


/**
 * @param {number[]} nums
 * @return {boolean}
 */


//start by declaring a function
var containsDuplicate = function(nums) {

    //declare an empty object to be a hash table
    var frequency = {};
    
    //loop through each element in the array
    for (var i = 0; i < nums.length; i++) {
        //check if the current element exists
      if (frequency[nums[i]]) {
        return true; // Found a duplicate
        //this is for when we encounter the element for the first time
      } else {
        frequency[nums[i]] = true;
      }
    }
    
    return false; // No duplicates found
  };
  

// Below is using in built functions
// var containsDuplicate = function (nums) {
//     var numSet = new Set(nums);
//     return numSet.size < nums.length;
// };


var nums = [1, 2, 3, 4, 5, 1];
var nums1 = [1, 2, 3, 4, 5];

var hasDuplicates = containsDuplicate(nums);
var hasDuplicates1 = containsDuplicate(nums1);
console.log(hasDuplicates); // Output: true
console.log(hasDuplicates1); // Output: false

