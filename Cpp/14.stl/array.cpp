#include <iostream>
#include <array>
#include <bits/stdc++.h>
#define range(i, n) for(int i = 0; i < n; i++)
using namespace std;
int main(){
    array<int, 5> arr = {12,3,7,30,1};
    int size = arr.size();
    range(i, size){
        std::cout << "arr" << "[" << i << "] : " << arr.at(i) << endl;
    }
    
    std::cout << "First elem of the array : " << arr.front() << endl;
    std::cout << "Last elem of the array : " << arr.back() << endl;
    std::cout << boolalpha << "arr is empty ?? " << arr.empty() << endl;
    std::cout << "arr is empty ?? " << arr.empty() << endl;
    return 0;
}
