#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int findDuplicate(vector<int> &arr)
{
  int x = 0;
  
  for (int i = 0; i < arr.size(); i++)
  {
    x ^= arr[i];
  }

  for (int i = 1; i < arr.size();i++)
  {
    x ^= i;
  }
  return x;
}

int main()
{
  int array[7] = {7, 5, -4, 6, 9, 1, 5};
  int size = 7;
  findDuplicate(array[7]);
}