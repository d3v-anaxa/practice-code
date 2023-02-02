// bubble sort : sorting method specifically efficient for small sized vector arrays | O(n^2) | O(1) |

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void printOutput(vector<int> &nums)
{
  for (const auto& x : nums)
    std::cout << x << "\t";
  std::cout << endl;
}

void bubbleSort(vector<int> &nums)
{
  for (int i = 1; i < nums.size(); i++)
  {
    bool swapped = false;
    for (int j = 0; j < nums.size() - i; j++)
    {
      if (nums[j] > nums[j + 1])
      {
        swap(nums[j + 1], nums[j]);
        swapped = true;
      }
    }
    if (swapped == false)
      break;
  }
}

int main()
{
  std::vector<int> nums{25, 49, 13, 22, 63};
  std::cout << "Array : \t ";
  printOutput(nums);
  bubbleSort(nums);
  std::cout << "Sorted Array : \t ";
  printOutput(nums);
}
