//請算出某陣列的平均值？
var i, sum = 0;
function mean(x)
{
    for(i = 0; i < x.length; i++)
    {
        sum += x[i];
    }
    return sum /= x.length;
}
console.log(mean([1,2,3,4,5]));
