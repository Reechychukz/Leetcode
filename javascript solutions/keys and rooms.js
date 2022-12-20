/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue=[];
    queue.push(0)
    let visited = new Set();

   while(queue.length){
        let curr = queue.shift();
        if(visited.has(curr)) continue;
        for(let k of rooms[curr]){
            queue.push(k);
        }
        visited.add(curr)
    }

    return visited.size === rooms.length;
};
