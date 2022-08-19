#include <iostream> 
using namespace std;

class Solution {
public:
    int bitwiseComplement(int n) {
      unsigned int inp = n;
      int mask = 0;
       
      // edge case
      if (n == 0)
        return 1;
      
      while(inp != 0){
        mask = (mask << 1) | 1;
        inp >>= 1;
      }
      
      int ans = (~n) & mask;
      
      std::cout << ans << endl;
      return ans;
    }
};    

int main(){
  Solution myObj;
  myObj.bitwiseComplement(100);
}
