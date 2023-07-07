/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    //F
    let n = answerKey.length;
    let lenF = 0, r = -1, c = 0;
    for(let l = 0; l < n; ++l){
        if(l > r){
            r = l;
        }
        while(r < n){
            if(answerKey[r] == 'F'){
                r++;
            }
            else if(c < k){
                c++;
                r++;
            }
            else break;
        }
        lenF = Math.max(lenF,r-l);
        if(answerKey[l] == 'T') c--;
    }

    let lenR = 0;
    r = -1; c = 0;
    for(let l = 0; l < n; ++l){
        if(l > r){
            r = l;
        }
        while(r < n){
            if(answerKey[r] == 'T'){
                r++;
            }
            else if(c < k){
                c++;
                r++;
            }
            else break;
        }
        lenR = Math.max(lenR,r-l);
        if(answerKey[l] == 'F') c--;
    }

    return Math.max(lenR,lenF);
};