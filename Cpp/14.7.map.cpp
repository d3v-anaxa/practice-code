#include <iostream>
#include <map>
#include <string>
#include <bits/stdc++.h>
using namespace std;
//  map Time complexity : O(log n) [ insert | erase | find | count ]
//  map implementation using red-black tree / balanced tree.
//  unordered map implementation HASH TABLE && searching time complexity O(1)

int main(){
    map<string, string> m;
    m["a"] = "97";
    m["b"] = "98";
    m["c"] = "99";

    for (auto i : m)
    {
        std::cout << i.first << " " <<  i.second << endl;
    }
    std::cout << endl; 
	
    m.insert({"x", "120"});

    for (auto i : m)
    {
        std::cout << i.first << " " <<  i.second << endl;
    }
    std::cout << endl; 

    std::cout << "Is 20 present ?? " << m.count("20") << endl;
    std::cout << "Is x present ?? " << m.count("x") << endl;

    auto it = m.find("c");

    for (auto i = it; i != m.end(); i++)
    {
        std::cout << (*i).first << " " << (*i).second << endl;
    }
    return 0;
}
