function bmiCalculator(weight,height)
{
    var bmi=(weight/(height*height));
    var x=Math.round(bmi);
    return x;
}
