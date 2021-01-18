#include <cstring>
#include <iostream>
#include <memory>

using namespace std;

struct Test {
    char* ptr;
};

void shallow_copy(Test& source, Test& dist) { dist.ptr = source.ptr; }

void deep_copy(Test& source, Test& dist) {
    allocator<char> al;

    size_t len = strlen(source.ptr);
    dist.ptr = al.allocate(len);
    uninitialized_copy(source.ptr, source.ptr + len, dist.ptr);
}

int main() {
    Test t1;
    t1.ptr = "sdflj\0";

    Test t2;

    deep_copy(t1, t2);

    cout << t2.ptr << endl;

    return 0;
}