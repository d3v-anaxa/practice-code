#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void printArray(int array[], int size)
{
  for (int i = 0; i < size; i++)
  {
    std::cout << array[i] << "\t";
  }
}

int swap(int array[],int size)
{
  int index = size - 1;
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
  printArray(array, size);
  std::cout << " : ARRAY [before]\n";
  swap(array, size);
  printArray(array, size);
  std::cout << " : ARRAY [after reversification]\n";
}