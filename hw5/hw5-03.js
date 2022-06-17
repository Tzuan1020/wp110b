//請寫一個函數檢查某數是否為質數
var i, count = 0;
function isPrime(num)
{
    for(i = 1; i <= num; i++)
    {
        if(num % i == 0)
        {
            count++;
        }
    }
    if(count == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isPrime(17));
console.log(isPrime(21));
