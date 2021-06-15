//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']
//', determine if the input string is valid.
//
// An input string is valid if:
//
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//
//
//
// Example 1:
//
//
//Input: s = "()"
//Output: true
//
//
// Example 2:
//
//
//Input: s = "()[]{}"
//Output: true
//
//
// Example 3:
//
//
//Input: s = "(]"
//Output: false
//
//
// Example 4:
//
//
//Input: s = "([)]"
//Output: false
//
//
// Example 5:
//
//
//Input: s = "{[]}"
//Output: true
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
//
// Related Topics String Stack
// 👍 7794 👎 315


//leetcode submit region begin(Prohibit modification and deletion)
var revertChar = function (char) {
  if (char === ')') return '('
  if (char === '}') return '{'
  if (char === ']') return '['
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length % 2)
    return false;

  let stacks = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stacks.push(s[i]);
    } else {
      if (revertChar(s[i]) !== stacks[stacks.length - 1] || stacks.length === 0) {
        return false;
      }

      stacks.pop();
    }
  }

  return !stacks.length;
};

//leetcode submit region end(Prohibit modification and deletion)
