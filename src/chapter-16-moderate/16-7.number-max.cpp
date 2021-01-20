#include <assert.h>

#include <climits>
#include <iostream>

using namespace std;

int flip(int bit) { return bit ^ 1; }

int sign(int a) { return flip((a >> 31 & 0x1)); }

int getMaxNaive(int a, int b) {
    int k = sign(a - b);
    int q = flip(k);

    return k * a + q * b;
}

int getMax(int a, int b) {
    int sa = sign(a);
    int sb = sign(b);
    int sc = sign(a - b);

    int use_sign_a = sa ^ sb;
    int use_sign_c = flip(sa ^ sb);

    int k = use_sign_a * sa + use_sign_c * sc;
    int q = flip(k);

    return k * a + q * b;
}

int main() {
    cout << getMaxNaive(3, 4) << endl;
    cout << getMaxNaive(4, 3) << endl;
    cout << getMaxNaive(INT_MAX - 2, -15) << endl;
    cout << getMax(3, 4) << endl;
    cout << getMax(4, 3) << endl;
    cout << getMax(INT_MAX - 2, -15) << endl;

    assert(getMax(3, 4) == 4);
    assert(getMax(4, 3) == 4);
    assert(getMax(INT_MAX - 2, -15) == INT_MAX - 2);
}
