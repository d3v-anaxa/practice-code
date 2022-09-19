// selection sort method : sorting method specifically efficient for small sized vector arrays | O(n^2) | α(n^2) |

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void selectionSort(vector<int> &nums)
{
  int n = nums.size();
  std::cout << "Sorted array:\t";
  for (int i = 0; i < n; i++)
  {
    int minIndex = i;
    for (int j = i + 1; j < n; j++)
    {
      if (nums[j] < nums[minIndex])
      {
        minIndex = j;
      }
    }
    swap(nums[minIndex], nums[i]);
    std::cout << nums[i] << "\t";
  }
  std::cout << endl;
}

int main()
{
  std::vector<int> num{12, 43, 4, 21, 6};
  selectionSort(num);
}