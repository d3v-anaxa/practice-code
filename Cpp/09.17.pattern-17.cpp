#include <iostream> 
using namespace std;
int main(){
	int side, i = 0;
    std::cout << "Enter the length of each sides of the square : ";
    std::cin >> side;

    while (i < side){
        char ASCII = 'A' + i;
        int j = 0;
        while (j < side){
            std::cout << ASCII << " ";
            ASCII++;
            j++;
        }
        std::cout << endl;
        i++;
    }
}