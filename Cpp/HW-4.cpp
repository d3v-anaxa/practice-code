#include <iostream> 
using namespace std;
int main(){
	// triangle pattern with incremental digits && spaces [" "]
    int side , i = 0;

    std::cout << "Enter the length of the base of the triangle : ";
    std::cin >> side;

    int z = side;
    int digit = 0;
    while (i < side){
        i++;
        digit++;
        int j = side;
        while (j > 0){
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