#include <iostream> 
using namespace std;
int main(){
    // square pattern with same line but decremental digits
    int n, i = 0;
	std::cout << "Enter a number to print the pattern : ";
    std::cin >> n;
    while (i < n){
        int j = n;
        while ( j > 0){
            std::cout << j << " ";
            j--;
        }
        std::cout << endl;
        i++;
    }
}