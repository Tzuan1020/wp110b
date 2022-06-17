//寫一個程式做因數分解。
var x = [], i;
function factor(number)
{
    for(i = 2; i <= number; i++)
    {
        if(number % i == 0)
        {
            x.push(i);
            number /= i;
            i = 2;
        }
    }
    return x;
}
console.log(factor(45));
