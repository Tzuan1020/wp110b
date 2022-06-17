//請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中
var x = [], i;
function filter357(y,z)
{
    x = [];
    for(i = y; i <= z; i++)
    {
        if(i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
        {
            x.push(i)
        }
    }
    return x;
}
console.log(filter357(5,10));
console.log(filter357(5,15));
