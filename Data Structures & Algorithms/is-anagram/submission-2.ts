class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // turn each string in to an array
        // sort each array
        // turn into string
        // check strings match strictly

        // check lengths match
        if (s.length !== t.length) {
            return false;
        }

        const s2 = s.split('').sort().join('');
        const t2 = t.split('').sort().join('');

        return s2 === t2;
    }
}
