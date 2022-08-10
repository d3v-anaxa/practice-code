#include <iostream> 
using namespace std;
int main(){
    // determine output
	for (int i = 0; i <= 5; i--){
        std::cout << i << " ";
        i++;
    }
} // 0 0 0 0 0 ... {INFINITE LOOP}