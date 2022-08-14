var fairCandySwap = function(aliceSizes, bobSizes) {
    const suma = aliceSizes.reduce((a, b) => a + b);
    const sumb = bobSizes.reduce((a, b) => a + b);
    
    let mid = (suma - sumb) / 2;
    let a = new Set(aliceSizes);
    let b = new Set(bobSizes);
    
    let res1, res2 = 0;
    b.forEach((val) => {
        if (a.has(val + mid)){
            res1 = val + mid;
            res2 = val;
        }    
    })
    return [res1, res2]
};
