class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (const operation of operations) {
            if (operation === "+") {
                stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
            } else if (operation === "C") {
                stack.pop();
            } else if (operation === "D") {
                stack.push(stack[stack.length - 1] * 2);
            } else {
                stack.push(Number(operation));
            }
        }

        return stack.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
    }
}