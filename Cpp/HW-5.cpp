#include <iostream> 
using namespace std;
int main(){
	// triangle pattern with spaces [" "] && incremental digits
    int side , i = 0;

    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    int z = side;
    int digit = 0;

    while (i < side){
        i++;
        digit++;
        int j = 0;
        while (j < side){
            j++;
            if (j >= z){
                std::cout << digit << " ";
            } else {
                std::cout << "  ";
            }
        }
        z--;
        std::cout << endl;
    }
}