#include <iostream>
#include <set>
#include <bits/stdc++.h>
using namespace std;
// Time complaxity :: O(log n)[ insert | erase | count | find], O(1) [ size | begin | end | empty ]
int main(){
    set<int > s;    
    s.insert(8);
    s.insert(10);
    s.insert(12);
    s.insert(5);
    s.insert(5);
    s.insert(5);
    s.insert(6);
    s.insert(7);

    for (auto i : s)
    {
        std::cout << i << " ";
    }
    std::cout << endl;

    s.erase(s.begin());
    set<int>::iterator it = s.begin();
    it++;
    s.erase(it);

    for (auto i : s)
    {
        std::cout << i << " ";
    }
    std::cout << endl;
    std::cout << s.count(8) << endl;

    set<int >::iterator itfnd = s.find(2);
    std::cout << boolalpha << (*itfnd == (const int) s.size()) << endl;
    
}
