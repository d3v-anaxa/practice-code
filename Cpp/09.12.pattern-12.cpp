#include <iostream> 
using namespace std;
int main(){
	// square pattern with incremental ASCII characters [+use of typecasting]
    char ASCII = 'A';
    int side, i = 0;
    std::cout << "Enter the length of each side of the square : ";
    std::cin >> side;
    while (i < side*side){
    std::cout << ASCII << " ";
    i++;
    ASCII++;
        if (ASCII == '['){
            ASCII = 'A';
        }
        if (i%side == 0) {
        std::cout << endl;
        }
    }
}