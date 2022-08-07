#include <iostream>
using namespace std;
int main(){
    int W = 1001;
    char character[2] = "z";
    bool boolean = true;
    float floatingNum = 1.245;
    double doubleNum = 20.231;

    cout << "|DataTypes|\n";
    cout << "~ int => " << W << " : size => " << sizeof(W) << "UL" << endl;
    cout << "~ char => " << character << " : size => " << sizeof(character) << "UL" << endl;
    cout << "~ bool => " << boolean << " : size => " << sizeof(boolean) << "UL" << endl;
    cout << "~ float => " << floatingNum << " : size => " << sizeof(floatingNum) << "UL" << endl;
    cout << "~ double => " << doubleNum << " : size => " << sizeof(doubleNum) << "UL" << endl;
} 
