#include <iostream>
#include <algorithm>
#include <vector>
#include <bits/stdc++.h>
using namespace std;
int main(){
    vector<int> v;
    v.push_back(1);
    v.push_back(4);
    v.push_back(12);
    v.push_back(20);
    v.push_back(7);
    v.push_back(9);
    v.push_back(12);
    v.push_back(4);
    v.push_back(16);
    v.push_back(19);
	
    std::cout << boolalpha << "Binary Search : 13 ?: " << binary_search(v.begin(), v.end(), 13) << endl;
    std::cout << boolalpha << "Binary Search : 16 ?: " << binary_search(v.begin(), v.end(), 16) << endl;
    std::cout << "Upper bound : 4 ?: " << upper_bound(v.begin(), v.end(), 4) - v.begin() << endl;
    std::cout << "Lower bound : 12 ?: " << lower_bound(v.begin(), v.end(), 12) - v.begin() << endl;
    std::cout << min(29, 19) << endl;
    std::cout << max(33, 25) << endl;
    
    std::string str = "kick";
    std::cout << "Before reverse : " << str << endl;
    reverse(str.begin(),str.end());
    std::cout << "After reverse : " << str << endl;

    std::cout << "Before rotate : " ;
    for (auto i : v)
        std::cout << i << " ";

    std::cout << endl;
    rotate(v.begin(), v.begin() + 5, v.end());
    std::cout << "After rotate : " ;
    for (auto i : v)
        std::cout << i << " ";

    std::cout << endl;
    sort(v.begin(), v.end()); // sort : based on Intro sort [ quick sort + heap sort + insertion sort ]

    std::cout << "After sort : " ;
    for (auto i : v)
        std::cout << i << " ";

    std::cout << endl;
    return 0;
}
