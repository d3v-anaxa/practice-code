#include <iostream>
#include <bits/stdc++.h>
using namespace std;

bool search (int array[], int size, int key)
{
  bool x;
  for (int i = 0; i < size; i++)
  {
    if (array[i] == key){
      x = true;
    }
  }
  return x;
}

int main(){
  int array[20] = {1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10}, key;
  std::cout << "Please enter the KEY : " && std::cin >> key;
  bool match = search(array, 20, key);
  std::cout << (match ? "KEY FOUND" : "NO MATCH FOUND") << endl;
}