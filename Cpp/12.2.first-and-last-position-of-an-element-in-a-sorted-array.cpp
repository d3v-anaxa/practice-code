#include <iostream>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

int firstPosition(vector<int> &arr, int n, int k)
{
  int start = 0, end = n - 1;
  int mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  int res = -1;
  while (start <= end)
  {
    if (k == arr[mid])
    {
      res = mid;
      end = mid - 1;
    }

    if (k < arr[mid])
    {
      end = mid - 1;
    }

    if (k > arr[mid])
    {
      start = mid + 1;
    }
    mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  }
  return res;
}

int lastPosition(vector<int> &arr, int n, int k)
{
  int start = 0, end = n - 1;
  int mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  int res = -1;
  while (start <= end)
  {
    if (k == arr[mid])
    {
      res = mid;
      start = mid + 1;
    }

    if (k < arr[mid])
    {
      end = mid - 1;
    }

    if (k > arr[mid])
    {
      start = mid + 1;
    }
    mid = start + (end - start) / 2; // This mid determinating formula is optimized for large integers
  }
  return res;
}

pair<int, int> returnAns(vector<int> &arr, int n, int k)
{
  pair<int, int> res;
  res.first = firstPosition(arr, n, k);
  res.second = lastPosition(arr, n, k);
  return res;
}

int main()
{
  vector<int> arr{1, 2, 3, 4, 4, 4, 4, 5, 6};
  pair<int, int> ans = returnAns(arr, arr.size(), 4);
  std::cout << "First Occurence: " << ans.first << "\nSecond Occurence: " << ans.second << endl;
  return 0;
}