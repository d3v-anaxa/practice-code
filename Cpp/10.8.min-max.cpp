#include <iostream>
#include <bits/stdc++.h>
using namespace std;

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

int min(int array[], int size)
{
	int min = INT_MAX;
	for (int i = 0; i < size;i++)
	{
		if(array[i] < min)
		{
			min = array[i];
		}
	}
	return min;
}

int max(int array[], int size){
	int max = INT_MIN;
	for (int i = 0; i < size;i++)
	{
		if(array[i] > max)
		{
			max = array[i];
		}
	}
	return max;
}

int main(){
	int size = getSize();
	int array[size];
	push(array, size);
	int minVal = min(array, size);
	int maxVal = max(array, size);
	std::cout << "MAXIMUM VALUE : " << maxVal << "\nMINIMUM VALUE : " << minVal << endl;
	return 0;
}
