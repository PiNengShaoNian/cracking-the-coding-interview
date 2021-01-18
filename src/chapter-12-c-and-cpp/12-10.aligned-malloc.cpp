#include <cstdlib>
#include <iostream>

using namespace std;

void* aligned_malloc(size_t required_bytes, size_t alignment) {
    void* p1;
    void* p2;

    size_t offset = alignment - 1 + sizeof(void*);
    if ((p1 = malloc(required_bytes + offset)) == NULL) {
        return NULL;
    }

    p2 = (void*)(((size_t)p1 + offset) & ~(alignment - 1));
    ((void**)p2)[-1] = p1;

    return p2;
}

void aligned_free(void* p) {
    void* original_p = ((void**)p)[-1];
    free(original_p);
}

int main() {
    cout << sizeof(size_t) << endl;
    cout << sizeof(void*) << endl;

    return 0;
}