/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)
    const adj = new Array(numCourses).fill(0).map(el => new Array())
    const coursesWithNoPrerequisits = []

    prerequisites.forEach((course, index) => {
        indegree[course[0]]++
        adj[course[1]].push(course[0])
    })

    indegree.forEach((course,index) => {
        if (course === 0) coursesWithNoPrerequisits.push(index)
    })

    while(coursesWithNoPrerequisits.length > 0) {
        const course = coursesWithNoPrerequisits.pop()
        adj[course].forEach(c =>{
            indegree[c]--
            if (indegree[c] === 0) coursesWithNoPrerequisits.push(c)
        })
    }
    return indegree.filter(el => el > 0).length === 0
};
