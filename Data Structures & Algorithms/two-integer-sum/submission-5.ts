class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let indices: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if (nums.includes(difference) && !indices.length && i != nums.indexOf(difference)) {
                indices.push(i, nums.indexOf(difference));
            }

        }

        return indices;
    }
}
