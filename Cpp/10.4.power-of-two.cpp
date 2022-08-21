#include <iostream> 
using namespace std;
/* default solution
class Solution {
public:
    bool isPowerOfTwo(int n) {
      double m = n;
      while (m > 1.00){
        m/=2;
      }  return (m == 1.00 ? true : false);
    }
};
 */

/* <--- if the input was a double---> [RECURSSION]
class Solution {
public:
    bool isPowerOfTwo(double n) {
      return (( n == 1 ) ? true : ((n > 1) ? isPowerOfTwo(n/2) : false));
    }
};
 */

// <-- solution using right-shift operator --->
 class Solution {
public:
    bool isPowerOfTwo(int n) {
      int count = 0;
      while(n!=0){
        if(n&1){count++;}
        n>>=1;
      }
      return count == 1 ? true : false;
    }
};


int main(){
	Solution myObj;
    std::cout << boolalpha << myObj.isPowerOfTwo(128) << endl;
} // boolalpha is use to print a boolean value as true/false;