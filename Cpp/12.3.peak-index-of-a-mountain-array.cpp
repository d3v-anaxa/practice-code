#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;
/*
int peakIndexUsingLinearSearch(vector<int>& nums)
{
  int n = nums.size();
  for (int i = 0; i < n; i++)
  {
    if ((nums[i] > nums[i + 1]) && (nums[i] > nums[i - 1]))
    {
      std::cout << "Peak Index: " << i << std::endl;
      std::cout << "Peak Element: " << nums[i] << std::endl;
    };
  }
} */
// IMPLEMENTATION OF LINEAR SEARCH | O(n)

int main()
{
  class Solution
  {
  public:
    int peakIndexUsingBinarySearch(vector<int> &nums)
    {
      int s = 0;
      int e = nums.size() - 1;
      int mid = s + (e - s) / 2;
      while (s < e)
      {
        if (nums[mid] < nums[mid + 1])
        {
          s = mid + 1;
        }
        else
        {
          e = mid;
        }
        mid = s + (e - s) / 2;
      }
      return s;
    }
  };

  std::vector<int> nums{1, 11, 13, 17, 10, 9, 5, 2};
  Solution sol;
  std::cout << "Peak index: " << sol.peakIndexUsingBinarySearch(nums) << endl;
} // https://leetcode.com/problems/find-peak-element/