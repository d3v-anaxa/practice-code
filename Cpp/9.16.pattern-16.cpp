#include <iostream> 
using namespace std;
int main(){
    // triangle with decremental ASCII characters and incremental 1st digit of every line
    int side, i = 0, j = 0;
    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    while (i < side){
        char ASCII = 'A' + i;
        i++;
        int digit = i;
        
        while (digit > 0){
            std::cout << ASCII << " ";
            digit--;
            ASCII--;
        }
        std::cout << endl;
    }
}