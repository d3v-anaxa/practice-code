#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void error()
{
  std::cout << "INVALID INPUT" << endl;
  exit(EXIT_FAILURE);
}

int getSize()
{
  int x;
  std::cout << "Input the size of array : " && std::cin >> x;
  return x;
}

int getInput()
{
  int x;
  std::cout << "Input array element : " && std::cin >> x;
  return x;
}

void push(int array[], int size)
{
  for (int i = 0; i < size; i++)
  {
    array[i] = {getInput()};
  }
}

void print(int array[], int size)
{
  std::cout << "Array => [";
  for (int i = 0; i < size; i++)
  {
    std::cout << "\"" << array[i] << "\",";
  }
}

int main()
{
  int size = getSize();
  int array[size];
  push(array, size);
  print(array, size);
  std::cout << "]" << endl;
}