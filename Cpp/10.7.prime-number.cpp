#include <iostream> 
#define ll long long

int main(){
    ll int input{};
    std::cout << "Enter a positive Integer : " && std::cin >> input;
    if (input == 0) {
        std::cout << "Zero is neither a prime nor a composite number" << "\n";
        exit(EXIT_SUCCESS);
    }
    std::cout 
        << std::boolalpha 
        << ([](ll x){
                if (x < 0)return false;
                for (int i = 2; i <= x/2; i++)
                    if(x % i == 0){return false;}
                return true;
            }(input) ? "Is prime" : "Not prime") 
        << "\n";
     return 0;
}
