class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ])

        const stack = [];

        for (const char of s) {
            if (!pairs.has(char)) {
                stack.push(char)
                continue;
            }

            if (stack.pop() !== pairs.get(char)) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
