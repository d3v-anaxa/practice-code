#include <iostream> 
using namespace std;
int main(){
    // complex rectangular pattern

    int width, i = 0;

    std::cout << "Enter the width of the rectangle : ";
    std::cin >> width;

    int z = 0;
    int f = 0;

    while (i < width){
        i++;
        int j = 0;
        int digit = 0;
        while (j < width){
            j++;
            digit++;
            if(j > width - f ){
            std::cout << "* ";
            } else {
                std::cout << digit << " ";
            }
            while (j>= width && j < width*2 ){
                j++;
                if (j - f <= width){
                std::cout << "* ";
                } else {
                    std::cout << digit << " ";
                }
                digit--;
            }
        }
        std::cout << endl;
        f++;
    }
}