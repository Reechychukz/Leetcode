/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    // distribution[k] - sum of cookies get by a k-th child
    const distribution = new Map()

    // the minimum unfairness of all distributions
    let minUnfairness = Infinity

    const dfs = (i) => {
        // i - index of a cookies we are going to distribute

        // if i == cookies.length - calculate an unfairness for the current distibution 
        if (i == cookies.length) {
            let unfairness = 0
            for (let n = 1; n <= k; n++) {
                unfairness = Math.max(unfairness, (distribution.get(n) || 0))
            }
            minUnfairness = Math.min(minUnfairness, unfairness)
            return
        }

        // iterate over all children and distibute the current i-th cookie
        for (let n = 1; n <= k; n++) {
            let newSum = (distribution.get(n) || 0) + cookies[i]
            // if the total cookies for the k-th kid is more 
            // than the best found case already => no value of checking it further
            if (newSum < minUnfairness) {
                distribution.set(n, newSum)
                dfs(i + 1)
                distribution.set(n, (distribution.get(n) || 0) - cookies[i])
            }
        }
    }

    dfs(0)

    return minUnfairness
};