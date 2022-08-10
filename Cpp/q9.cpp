#include <iostream> 
using namespace std;
int main(){
    // determine output
	for (int i = 0; i < 5; i++){
        for (int j = 1; j <= 5; j++){
            std::cout << i << " " << j << endl;
        }
    }
}
// 0 1\n 0 2\n 0 3\n 0 4\n 0 5\n 1 1\n 1 2\n 1 3\n 1 4\n 1 5\n 2 1\n 2 2\n 2 3\n 2 4\n 2 5\n 3 1\n 3 2\n 3 3\n 3 4\n 3 5\n 4 1\n 4 2\n 4 3\n 4 4\n 4 5