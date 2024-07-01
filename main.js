/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

 

Constraints:

    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?


*/

/**
 * @param {number[]} nums1 - Массив, в который будем сливать (массив имеет длину m + n)
 * // Array to merge into (array has length m + n)
 * @param {number} m - Количество значимых элементов в nums1
 * // Number of meaningful elements in nums1
 * @param {number[]} nums2 - Массив, который будем сливать
 * // Array to merge
 * @param {number} n - Количество значимых элементов в nums2
 * // Number of meaningful elements in nums2
 * @return {void} Не возвращает значение, модифицирует nums1 на месте
 * // Doesn't return a value, modifies nums1 in place
 */
function merge(nums1, m, nums2, n) {
  // Указатели на последние элементы значимых данных в nums1 и nums2 соответственно
  // Pointers to the last meaningful elements in nums1 and nums2 respectively

  // указатель на последний значимый элемент в nums1
  // pointer to the last meaningful element in nums1
  let i = m - 1;

  // указатель на последний элемент в nums2 / pointer to the last element in nums2
  // Указатель на последнюю позицию в nums1 для размещения элемента / Pointer to the last position in nums1
  let j = n - 1;

  // указатель на последнюю позицию в nums1
  // pointer to the last position in nums1
  let k = m + n - 1;

  // Проходим массивы с конца до начала
  // Traverse the arrays from the end to the beginning
  while (i >= 0 && j >= 0) {
    // Сравниваем элементы из nums1 и nums2
    // Compare elements from nums1 and nums2
    if (nums1[i] > nums2[j]) {
      // Если элемент из nums1 больше, помещаем его в текущую позицию в nums1
      // If the element from nums1 is greater, place it in the current position in nums1
      nums1[k] = nums1[i];
      // смещаем указатель i влево
      // move the pointer i to the left
      i--;
    } else {
      // Если элемент из nums2 больше или равен, помещаем его в текущую позицию в nums1
      // If the element from nums2 is greater or equal, place it in the current position in nums1
      nums1[k] = nums2[j];
      // смещаем указатель j влево
      // move the pointer j to the left
      j--;
    }
    // смещаем указатель k влево
    // move the pointer k to the left
    k--;
  }

  // Если остались элементы в nums2, копируем их в nums1
  // If there are elements left in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  // Элементы из nums1 уже на своих местах, дополнительное копирование не требуется
  // Elements from nums1 are already in their places, no additional copying is required
}

// Примеры использования
// Examples of usage
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // [1, 2, 2, 3, 5, 6]

nums1 = [1];
nums2 = [];
merge(nums1, 1, nums2, 0);
console.log(nums1); // [1]

nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1); // [1]
