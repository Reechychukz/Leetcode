/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = (graph) => {
    const n = graph.length;
    const G = new Array(n).fill(0).map(() => []);
    const inDegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        graph[i].forEach(neib => {
            G[neib].push(i);
            inDegree[i]++;
        })
    }

    const q = inDegree.reduce((acc, cnt, i) => cnt === 0 ? [...acc, i] : acc, []);
    const safe = new Array(n).fill(false);

    while (q.length) {
        let node = q.shift();
        safe[node] = true;
        G[node].forEach(neib => {
            inDegree[neib]--;
            if (inDegree[neib] === 0) {
                q.push(neib);
            }
        })
    }

    return safe.reduce((acc, state, i) => (state ? [...acc, i] : acc), []);
}