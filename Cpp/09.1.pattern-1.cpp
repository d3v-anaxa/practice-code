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
}