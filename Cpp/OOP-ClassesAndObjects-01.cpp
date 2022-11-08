#include <iostream>
#include <bits/stdc++.h>
using namespace std;

class Hero // empty class get 1 bit ijust for self identification
{
private:
    int level = 12;

public: // Access Modifier
    std::string name{"IronMan"};
    int health = 13000;

    int getLevel() // getter
    {
        return level;
    }

    void levelUp() // setter
    {
        level++;
        std::cout << "Level up >> " << level << endl;
    }

    void unknown()
    {
    }
};

int main()
{
    // Hero h1;
    // h1.name = "Hulk";

    // std::cout << "size of h1 : " << h1.getLevel() << endl;
    // h1.levelUp();

    // h1.unknown();
    char a = 'x';
    char b = 'y';
    std::cout << "[before swap : ]"
              << "\n\ta : " << a << "\n\tb : " << b << endl;
    int temp = a + b;
    a = temp - (int)a;
    b = temp - (int)a;
    std::cout << "[after swap : ]"
              << "\n\ta : " << a << "\n\tb : " << b << endl;
}
