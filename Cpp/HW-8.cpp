// exiting from a switch statement inside an infinite loop

// retrieving the factors of an UNSIGNED INTEGER

#include <iostream> 
using namespace std;

class Integer {
public:
    void determineHCF(int x){
        int hcf = x;
        std::cout << "Factors of " << x << " are :\t";
	    while (true){
            int count = x % hcf;
            switch (count){
                case 0 : 
                    if (hcf != 1){ 
                        std::cout << hcf << "\t";
                    } else {
                        std::cout << hcf << endl;
                        exit(EXIT_SUCCESS);
                    }
            };
            hcf--;
        };
    };
};

int main(){
    Integer myObj;
    myObj.determineHCF(210);
}