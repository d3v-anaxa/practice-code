#include <iostream>
#include <bits/stdc++.h>
using namespace std;
// alternative array swap

void printArray(int array[], int size)
{
  for (int i = 0; i < size; i++)
  {
    std::cout << array[i] << "\t";
  }
  std::cout << endl;
}

void swap(int array[],int size)
{
  for (int i = 0; i < size;i++)
  {
    if(i&1)
    {
      swap(array[i], array[i - 1]);
    }
  }
}

  int main()
{
  int array[5] = {-2, 6, 2, 9, 11};
  int size = 5;
  std::cout << "ARRAY [before]:\t ";
  printArray(array, size);
  swap(array, size);
  std::cout << "ARRAY [after alternate swap]: \t";
  printArray(array, size);
}