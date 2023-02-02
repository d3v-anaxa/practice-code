#include <iostream> 
using namespace std;
int main(){
    // square pattern with same line but incremental digits
    int n, i = 0;
	std::cout << "Enter a number to print the pattern : ";
    std::cin >> n;
    while (i < n){
        int j = 0;
        while ( j < n){
            j++;
            std::cout << j << " ";
        }
        std::cout << endl;
        i++;
    }
}