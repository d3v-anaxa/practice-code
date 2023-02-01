#include <iostream>

int findDuplicate(int *arr)
{
  int x = 0;
  size_t size = sizeof(arr) / sizeof(arr[0]);
  
  for (int i = 0; i < size; i++)
    x ^= arr[i];
  for (int i = 1; i < size; i++)
    x ^= i;
  return x;
}

int main()
{
  int array[] = {7, 5, -4, 6, 9, 1, 5};
  std::cout 
    << findDuplicate(array)
    << "\n";
}
