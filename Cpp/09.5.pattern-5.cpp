#include <iostream> 
using namespace std;
int main(){
    // square pattern with distinct side length and incremental digits
    int s, i = 0;
	std::cout << "Enter the length of each side of the square : ";
    std::cin >> s;
    while (i < s*s){
        i++;
        std::cout << i << " ";
        if (i%s == 0){
            std::cout << endl;
        }
    }
}