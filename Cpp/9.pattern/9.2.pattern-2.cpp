#include <iostream> 
using namespace std;
int main(){
    // digit incrimenting square pattern
    int n;
    std::cout << "Square Pattern :: Enter the length of each side : ";
    std::cin >> n;
    int a = 1;
    std::cout << endl;
    std::cout << "Square Pattern with digit iteration :: Enter the length of each side : " << n << endl;
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