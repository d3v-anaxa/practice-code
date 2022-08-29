#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int binarySearchForAscendingArray(int arr[], int size, int key)
{
  int start = 0, end = size - 1;
  int mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  while (start <= end)
  {
    if (key == arr[mid])
    {
      return mid;
    }

    if (key < arr[mid])
    {
      end = mid - 1;
    }

    if (key > arr[mid])
    {
      start = mid + 1;
    }
    mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  }
  return -1;
}

int binarySearchForDescendingArray(int arr[], int size, int key)
{
  int start = 0, end = size - 1;
  int mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  while (start <= end)
  {
    if (key == arr[mid])
    {
      return mid;
    }

    if (key < arr[mid])
    {
      start = mid + 1;
    }

    if (key > arr[mid])
    {
      end = mid - 1;
    }
    mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  }
  return -1;
}

int binarySearch(int arr[], int size, int key)
{
  int x;
  if (arr[0] < arr[size - 1])
  {
    x = binarySearchForAscendingArray(arr, size, key);
  } else {
    x = binarySearchForDescendingArray(arr, size, key);
  }
  return x;
}

int main()
{
  int oddArr[5] = {1, 3, 7, 11, 14};
  int evenArr[6] = {0, 2, 5, 9, 14, 20};
  int des[7] = {31, 23, 19, 17, 13, 11, 5};
  std::cout << binarySearch(evenArr, 6, 9) << endl; // 3
  std::cout << binarySearch(des, 7, 13) << endl; // 4
}