#include <iostream>
#include <list>
#include <bits/stdc++.h>
using namespace std;
int main(){
    list<int > l(15, 20);
    l.push_back(1);
    l.push_back(1);
    l.push_back(1);
    l.push_back(1);
    l.push_back(1);
    l.push_back(1);
    l.push_front(2);
    l.push_front(2);
    l.push_front(2);
    l.push_front(2);
    l.push_front(2);
    l.push_front(2);
    
    for(int i : l){
        std::cout << i << " ";
    }
    std::cout << endl;

    l.erase(l.begin());
    for(int i : l){
        std::cout << i << " ";
    }
    std::cout << endl;
    
    l.pop_back();
    l.pop_front();

    for(int i : l){
        std::cout << i << " ";
    }
    std::cout << endl;
}

