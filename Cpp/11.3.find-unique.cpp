/* 
~ An int arrayList(ARR) is given of size N. N=2M+1
~ M number of dual characters are given with 1 UNIQUE int only
~ find the UNIQUE.
*/

#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int searchUnique(int array[], int size)
{
  int unique = 0;
  for (int i = 0; i < size; i++)
  {
    unique ^= array[i];
  }
  return unique;
}

int main(){
  int arraylist[5] = {3, 5, 4, 3, 4};
  int size = 5;
  int unique = searchUnique(arraylist, size);
  std::cout << "The unique integer is : " << unique << endl;
}