/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = ( dist, hour ) => {
    let left = 0, right = 1e7, ans = -1
    while ( left <= right ) {
        let mid = (left+right)/2|0, sum = dist.at(-1)/mid
        for ( let i = 0; i < dist.length-1; i++ ) 
            sum += Math.ceil(dist[i]/mid)
        if ( sum-hour > 1e-10 ) left = mid+1
        else ans = mid, right = mid-1
    }
    return ans
}