#include <iostream> 
using namespace std;
int main(){
	// square pattern with incremental ASCII UPPERCASE characters on line change [+use of typecasting]
    int numOfChar = 'A';
    char ASCII = numOfChar;
    int side, i = 0;
    std::cout << "Enter the length of each side of the square : ";
    std::cin >> side;
    while (i < side*side){
    std::cout << ASCII << " ";
    i++;
        if (i%side == 0) {
        ASCII++;
        std::cout << endl;
        }
    }
}