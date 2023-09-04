console.log("-----------------------------------------------------");
console.log("Return median of two sorted arrays of the same size.");
//IIFE FUNCTION
(function(){
    const getMedian = function (ar1, ar2, n)
    {
        var i = 0; 
        var j = 0; 
        var m1 = -1, m2 = -1;
        for (var count = 0; count <= n; count++)
        {
            if (i == n)
            {
                m1 = m2;
                m2 = ar2[0];
                break;
            }
            else if (j == n)
            {
                m1 = m2;
                m2 = ar1[0];
                break;
            }
            if (ar1[i] <= ar2[j])
            {
                m1 = m2;
                m2 = ar1[i];
                i++;
            }
            else
            {
                m1 = m2; 
                m2 = ar2[j];
                j++;
            }
        }
         console.log(ar1);
        console.log(ar2);
        return (m1 + m2)/2;
       
    }
    var ar1 = [2,4,5,6,7];
    var ar2 = [8,9,10,11,12];
    var n1 = ar1.length;
    var n2 = ar2.length;
    if (n1 == n2)
        console.log (getMedian(ar1, ar2, n1));
    else
        console.log("Doesn't work for arrays of unequal size");
     
})();

//anonymous
const getMedian = function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var m1 = -1, m2 = -1;
    for (var count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
     console.log(ar1);
    console.log(ar2);
    return (m1 + m2)/2;
   
}
var ar1 = [2,4,5,6,7];
var ar2 = [8,9,10,11,12];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log (getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
 
