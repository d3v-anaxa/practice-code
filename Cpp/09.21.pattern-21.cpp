#include <iostream> 
using namespace std;
int main(){
	// complex triangle pattern
    int height, i = 0;
    std::cout << "Enter the height of the triangle : ";
    std::cin >> height;

    int x = 0;

    while (i < height){
        i++;
        x++;

        int j = 0;
        int digit = 0;

        while (j < height){
            j++;

            if (j > height - x){
                digit++;
                std::cout << digit << " ";
            } else {
                std::cout << "  "; 
            }

            if (j == height){
                int x = 0;
                while (digit > 1){
                    digit--;
                    std::cout << digit << " "; 
                }
            }
        }
        std::cout << endl;
    }
}