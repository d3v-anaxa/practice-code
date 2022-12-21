#!/bin/sh

for(( n=0;n<=1000;n++ )); do
#read -p "Enter a number : " n;
t=$n;
count=0;
sum=0;

while [ $t -ne 0 ]; do 
    count=`expr $count + 1`;
    t=`expr $t / 10`;
done

t=$n
while [ $t -ne 0 ]; do 
    product=1;
    for ((i=0;i<$count;i++)); do
        digit=`expr $t % 10`
        product=`expr $product \* $digit`;
    done
    sum=`expr $sum + $product`;
    t=`expr $t / 10`;
done

if [[ $sum -eq $n ]]
then
    echo -n "$n "
fi;
done
echo ""

#unset t
#unset n
#unset sum
#unset count
#unset product
