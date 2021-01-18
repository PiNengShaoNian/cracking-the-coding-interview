#include <assert.h>

using namespace std;

template <typename T>
class SmartPointer {
   public:
    SmartPointer(T* ptr) {
        ref = ptr;
        ref_count = new unsigned(1);
    }

    SmartPointer(SmartPointer& sp) {
        ref = sp.ref;
        ref_count = sp.ref_count;
        (*ref_count)++;
    }

    SmartPointer& operator=(SmartPointer<T>& ptr) {
        if (ptr == this) return *this;

        if (*ref_count > 0) {
            remove();
        }

        ref = ptr.ref;
        ref_count = ptr.ref_count;
        (*ref_count)++;
        return *this;
    }

    ~SmartPointer() { remove(); }

    T getValue() { return *ref; }

    unsigned use_count() { return *ref_count; }

   protected:
    T* ref;
    unsigned* ref_count;
    void remove() {
        if (--(*ref_count) == 0) {
            delete ref;
            delete ref_count;
        }
    }
};

int main() {
    SmartPointer<int> sp(new int(666));

    assert(sp.use_count() == 1);

    SmartPointer<int> sp2(sp);

    assert(sp.use_count() == 2);

    SmartPointer<int> sp3 = sp2;

    assert(sp.use_count() == 3);

    {
        SmartPointer<int> sp4 = sp3;
        assert(sp.use_count() == 4);
    }

    assert(sp.use_count() == 3);

    return 0;
}