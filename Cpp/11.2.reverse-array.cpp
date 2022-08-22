#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void printArray(int array[], int size)
{
  for (int i = 0; i < size; i++)
  {
    std::cout << array[i] << "\t";
  }
  std::cout << endl;
}

int swap(int array[],int size)
{
  int index = size - 1;
  printArray(array, size);
  for (int i = 0; i < (index / 2); i++)
  {
    swap(array[i], array[index - i]);
  }
  return array[size];
}

int main()
{
  int array[5] = {21, -5, 11, -6, 3};
  int size = 5;
  std::cout << "ARRAY [before swap]:\t ";
  swap(array, size);
  std::cout << "ARRAY [after swap]: \t";
  printArray(array, size);
}