#include <iostream> 
using namespace std;
int main(){
	// triangle pattern with asterisks ["* "] && spaces [" "]
    int side , i = 0;

    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    int z = side;

    while (i < side){
        i++;
        int j = side;
        while (j > 0){
            if (j <= z ){
                std::cout << "* ";
            } else {
                std::cout << "  ";
            }
            j--;
        }
        z--;
        std::cout << endl;
    }
}