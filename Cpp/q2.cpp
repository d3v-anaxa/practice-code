#include <iostream> 
using namespace std;
int main(){
	int a = 1, b = 2;
    if (a-- > 0 && ++b > 2)
        cout << "Stage 1 - Inside If\n";
    else 
        cout << "Stage 2 - Inside Else\n";
    
    cout << a << " " << b << endl;
} // Stage 1 - Inside If\n 0 3