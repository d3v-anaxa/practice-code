#!/bin/sh

read -p "Which numbers multiplication table do you want?? : " n;
for ((i=1;i<=10;i++)); do 
    echo "$n x $i = $(( n*i ))";
done
exit
