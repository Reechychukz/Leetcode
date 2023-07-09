/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const freq = Array(26).fill(0);
    for(let ele of s){
        freq[ele.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    let globalMax=0
    for(let i=0;i<26;i++){
        for(let j=0;j<26;j++){
            if(i===j || freq[i]===0 || freq[j]===0) continue;

            const majChar= 'a'.charCodeAt(0)+i;
            const minChar= 'a'.charCodeAt(0)+j;
            let majCount = 0;
            let minCount = 0;
            let minRemain = freq[j];
            console.log("maj ",majChar);
            console.log("min ",minChar);
            for(let ele of s){
                if(ele.charCodeAt(0)===majChar) majCount++;
                else if(ele.charCodeAt(0)===minChar){
                    minCount++;
                    minRemain--;
                } 
                if(majCount-minCount<0 && minRemain>0){
                    majCount=0;
                    minCount=0;
                }
                
                if(minCount>0){
                    globalMax = Math.max(globalMax,(majCount-minCount));
                }

            }
        }
    }
        return globalMax;
};