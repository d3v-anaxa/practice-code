#include <iostream>
#include <deque>
#include <bits/stdc++.h>
using namespace std;
int main(){
    std::deque <int> d;	
    d.push_back(3);
    d.push_back(4);
    d.push_back(5);
    d.push_front(2);
    d.push_front(1);
    d.push_front(0);
    for(auto it = d.begin(); it != d.end(); ++it){
        std::cout << *it << " ";
    }
    std::cout << endl;
    d.pop_back();
    d.pop_front();
    d.erase(d.end()-2, d.end());

    for(auto it = d.begin(); it != d.end(); ++it){
        std::cout << *it << " ";
    }
    std::cout << endl;

    std::cout << "First element : " << d.front() << endl;
    std::cout << "Last element : " << d.back() << endl;
    std::cout << "Element at 0th index : " << d.at(0) << endl;
    std::cout << boolalpha << "Is empty ?? " << d.empty() << endl;
}
