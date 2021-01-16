#include <assert.h>

#include <bitset>
#include <iostream>
#include <vector>

using namespace std;

void checkDuplicates(vector<int> &arr) {
    assert(arr.size() <= 32000);
    bitset<4 * 1024 * 8> set;

    for (int i = 0; i < arr.size(); ++i) {
        if (!set.test(arr[i])) {
            set.set(arr[i]);
        } else {
            cout << arr[i] << endl;
        }
    }
}

int main() {
    vector<int> arr = {1, 2, 3, 3, 4, 5};

    checkDuplicates(arr);
    return 0;
}