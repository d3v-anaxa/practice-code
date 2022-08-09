#include <iostream> 
using namespace std;
int main(){
	// triangle pattern with spaces [" "] && incremental digits
    int side , i = 0;

    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    int z = side;

    while (i < side){
        i++;
        int j = side;
        int digit = 0;
        while (j > 0){
            digit++;
            if (j <= z ){
                std::cout << digit << " ";
            } else {
                std::cout << "  ";
            }
            j--;
        }
        z--;
        std::cout << endl;
    }
}