#include <iostream>
#include <stack>
#include <string>
#include <bits/stdc++.h>
using namespace std;
int main(){
    stack<string > s;
    s.push("World");
    s.push("Hello");
    std::cout << "Top element : " << s.top() << endl;
    s.pop();
    std::cout << "Top element : " << s.top() << endl;
    std::cout << "Size of stack : " << s.size() << endl;
    std::cout << boolalpha << "Is Empty ?? " << s.empty() << endl;

}
