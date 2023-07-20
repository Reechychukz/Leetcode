/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    var stack = [];
    stack.push(asteroids[0]);
    
    for (let i = 1; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        
        if (stack[stack.length - 1] > 0 && asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && asteroid < 0) {
                if (Math.abs(asteroid) === stack[stack.length - 1]) {
                    stack.pop();
                    asteroid = 0;
                } else if (Math.abs(asteroid) < stack[stack.length - 1]) {
                    asteroid = 0;
                } else {
                    stack.pop();
                }
            }
            
            if (asteroid !== 0) {
                stack.push(asteroid);
            }
        }
    }
    
    return stack;
};