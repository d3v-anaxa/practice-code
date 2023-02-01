#include <iostream>
#include <vector>
#include <bits/stdc++.h>
using namespace std;
int main(){
    std::vector<int > vect;
    vect.push_back(10);
    vect.push_back(10);
    vect.push_back(10);
    vect.push_back(10);
    vect.push_back(10);
    vect.push_back(10);
    std::cout << vect.capacity() << endl;
    std::cout << vect.front() << endl;
    std::cout << vect.back() << endl;
    std::cout << vect.size() << endl;
    std::cout << vect.capacity() << endl;
    vect.pop_back();
    vect.pop_back();
    std::cout << vect.size() << endl;

    for (auto it = vect.end(); it != vect.begin(); --it)
    {
        std::cout << " " << *it;
    }
    std::cout << endl;
    return 0;
	
}
