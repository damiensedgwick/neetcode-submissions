class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let values = new Set();
        let duplicateSeen = false;

        for (const num of nums) {
            if (values.has(num)) {
                duplicateSeen = true;
                break;
            }

            values.add(num)
        }

        return duplicateSeen;
    }
}
