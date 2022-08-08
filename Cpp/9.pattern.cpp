#include <iostream> 
using namespace std;
int main(){
	// Square pattern print
    int n;
    std::cout << "Square Pattern :: Enter the length of each side : ";
    std::cin >> n;
    std::cout << endl;
    int l = 0;
    while (l < n){
        int j = 0;
        while (j < n) {
            std::cout << "* ";
            j++;
        }
        std::cout << "\n";
        l++;
    }

    // digit incrimenting square pattern
    int a = 1;
    std::cout << endl;
    std::cout << "Square Pattern :: Enter the length of each side : " << n << endl;
    std::cout << endl;
    int m = 0;
    while (m < n){
        int j = 0;
        while (j < n) {
            std::cout << a << " ";
            j++;
        }
        std::cout << "\n";
        m++;
        a++;
    }
}