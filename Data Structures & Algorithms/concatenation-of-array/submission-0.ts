class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = new Array(nums.length * 2)

        let i = 0;
        let j = 0;
        while (i < ans.length) {
            ans[i] = nums[j]
            i++
            j++

            if (j === nums.length) {
                j = 0
            }
        }

        return ans
    }
}
