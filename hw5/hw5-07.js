//寫一個程式把矩陣轉置。
var trans = ([[1,2,3], [3,2,1]]), x = [], i, j;
function transpose(array)
{
    for(i = 0; i < trans[0].length; i++)
    {
        x[i] = []
        for(j = 0; j < trans.length; j++)
        {
            x[i][j] = trans[j][i];
        }
    }
    return trans;
}
