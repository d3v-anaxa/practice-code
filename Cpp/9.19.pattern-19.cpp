#include <iostream> 
using namespace std;
int main(){
	// triangle pattern with spaces [" "] && ["*"]
    int side , i = 0;

    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    int z = side;

    while (i < side){
        i++;
        int j = 0;
        while (j < side){
            j++;
            if (j > z){
                std::cout << "  ";
            } else {
                std::cout << "* ";
            }
        }
        z--;
        std::cout << endl;
    }
}