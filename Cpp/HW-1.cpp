// Differenciating lowercase, UPPERCASE, and digits using if-else statements
#include <iostream>
#include <typeinfo>
using namespace std;
int main(){
    char inp;
    std::cout << "Enter a character : ";
    std::cin >> inp;
    int ASCII = int(inp);
    if (ASCII >= 48 && ASCII <= 57) {
        std::cout << "The character is a digit" << endl;
    } else if (ASCII >= 65 && ASCII <= 90) {
        std::cout << "The character is in UPPERCASE" << endl;
    } else if (ASCII >= 97 && ASCII <= 122) {
        std::cout << "The character is in lowercase" << endl;
    } else {
        std::cerr << "Invalid Input"<< endl ;
        return 0;
    }
}