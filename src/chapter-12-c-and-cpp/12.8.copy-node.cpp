#include <map>

using namespace std;

using NodeMap = map<Node *, Node *>;

struct Node {
    Node *ptr1;
    Node *ptr2;
};

Node *copy_recursive(Node *cur, NodeMap &map) {
    if (!cur) return nullptr;

    NodeMap::iterator it = map.find(cur);

    if (it != map.end()) {
        return it->second;
    }

    Node *node = new Node;
    map[cur] = node;
    node->ptr1 = copy_recursive(cur->ptr1, map);
    node->ptr2 = copy_recursive(cur->ptr2, map);

    return node;
}

Node *copy_structure(Node *node) {
    NodeMap map;

    return copy_recursive(node, map);
}