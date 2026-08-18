class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {return false};

        const s2 = s.split('').sort().join('');
        const t2 = t.split('').sort().join('');

        return s2 === t2;
    }
}
