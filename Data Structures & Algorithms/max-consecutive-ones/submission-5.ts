class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let streak = 0;
        let count = 0;

        for (const n of nums) {
            count = n === 1 ? count + 1 : 0;
            streak = Math.max(streak, count);
        }

        return streak;
    }
}
