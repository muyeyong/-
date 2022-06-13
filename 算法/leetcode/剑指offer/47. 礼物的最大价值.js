// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

//  

// 示例 1:

// 输入: 
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} grid
 * @return {number}
 */

/* 
  思路：
    把可以走的路全部走一次
  优化：
    走过的路留下记录，避免重复计算
 */

 
 var maxValue = function(grid) {
  const col = grid[0].length
  const row = grid.length
  const maxRecord = Array.from({ length: row}, () =>  Array.from({ length: col}, () => 0))
  if (col === 0 && row === 0) return 0
  const traverse = (x, y, maxRecord) => {
    let ans = 0
    if (x > col - 1 || y > row - 1) return 0
    if (maxRecord[y][x] != 0 ) return maxRecord[y][x]
    if (x === col - 1 && y === row - 1) {
      return grid[y][x]
    }
    ans = Math.max(traverse(x + 1, y, maxRecord), traverse(x, y + 1, maxRecord)) + grid[y][x]
    maxRecord[y][x] = ans
    return ans
  }
  return traverse(0, 0, maxRecord)
};

console.log(maxValue([[1,2,5],[3,2,1]]))
