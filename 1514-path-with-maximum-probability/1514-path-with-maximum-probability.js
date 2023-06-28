/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
class Node {
    constructor(n) {
        this.index = n;
        this.neighbours = [];
        this.prob = 0;
    }
}

var maxProbability = function(n, edges, succProb, start, end) {
    const vertices = [];
    for(let i=0; i<n; i++) vertices.push(new Node(i));
    vertices[start].prob = 1;
    edges.forEach((edge,index) => {
        vertices[edge[0]].neighbours.push([vertices[edge[1]], succProb[index]]);
        vertices[edge[1]].neighbours.push([vertices[edge[0]], succProb[index]]);
    })

    if(start === end) return 1;
    let max = 0;
    const queue = [vertices[start]];
    while(queue.length!==0) {
        const temp = queue[0];
        queue.shift();
        if(temp.index === end) {
            max = Math.max(temp.prob, max);
            continue;
        }
        for(let [neighbour, prob] of temp.neighbours) {
            const old = neighbour.prob;
            neighbour.prob = Math.max(neighbour.prob, temp.prob*prob);
            if(old !== neighbour.prob) queue.push(neighbour);
        }
    }
    return max;
};