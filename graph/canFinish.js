// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// BFS
var canFinish = function (numCourses, prerequisites) {
  // 以课程号为索引，建立一个入度数组；
  // 以课程号为键，依赖这门课的后续课数组为值，维护一个map。
  let inDegree = new Array(numCourses).fill(0);
  let map = {};
  let queue = [];
  for (let pre of prerequisites) {
    // pre[0]是依赖其他课程的课程，所以入度加一
    inDegree[pre[0]]++;
    if (map[pre[1]]) {
      map[pre[1]].push(pre[0]);
    } else {
      map[pre[1]] = [pre[0]];
    }
  }
  // 入度为0，说明不依赖其他课程，入队，课程总数减一
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      numCourses--;
    }
  }
  while (queue.length) {
    let course = queue.shift();
    // 获得该课程的后续课
    let outDegree = map[course];
    if (outDegree && outDegree.length) {
      // 遍历后续课，每门课的入度减一，如果入度为0，入队
      for (let i of outDegree) {
        inDegree[i]--;
        if (inDegree[i] === 0) {
          queue.push(i);
          numCourses--;
        }
      }
    }
  }
  return numCourses === 0;
};
