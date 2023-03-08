#!/bin/sh

read -p "Enter pyramid height : " n;
for (( i=0;$i<=$n;i++ )); do
    echo -n "$i ";
    for (( j=0;$j<$n;j++ )); do
        if [[ $(( i+j ))>=$n ]]; then
        echo -n "* ";
        fi
    done
    echo "";
done


