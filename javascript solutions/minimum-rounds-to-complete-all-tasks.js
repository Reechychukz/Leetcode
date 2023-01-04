/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let counter = {}, minRounds = 0;
    
    for(let t of tasks){
        counter[t] = (counter[t] || 0) + 1;
    }
    
    for(let count in counter){
        if(counter[count] == 1) return -1;
        minRounds += Math.ceil(counter[count] / 3);
    }
    
    return minRounds;
};
