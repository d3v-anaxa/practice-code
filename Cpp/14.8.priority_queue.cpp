#include <iostream>
#include <queue>
#include <bits/stdc++.h>
using namespace std;
int main(){
    priority_queue<int > maxh; // max heap    
    priority_queue<int, vector<int>, greater<int> > minh; // min heap    

    maxh.push(20);
    maxh.push(10);
    maxh.push(40);
    maxh.push(60);

    int n = maxh.size(); 
    for(int  i = 0 ; i < n; ++i ) {
    std::cout << maxh.top() << " ";
    maxh.pop();
    }
    std::cout << endl;

    std::cout << boolalpha << "minh is Empty ?? " << minh.empty() << endl;
}
