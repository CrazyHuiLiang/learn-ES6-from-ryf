// 下面是二叉树的构造函数
// 3个参数分别是左子树、当前节点和右子树
function Tree(left, label, right) {
    this.left = left
    this.label = label
    this.right = right
}

// 下面是中序（inorder）遍历函数
// 由于返回的是一个遍历器，所以要用Generator函数
// 函数体内采用递归算法，所以左子树和右子树要用yield*遍历
function* inorder(t) {
    if (t) {
        yield * inorder(t.left)
        yield t.label
        yield * inorder(t.right)
    }
}

// 下面是生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length ===1) return new Tree(null, array[0], null)
    return new Tree(make(array[0]), array[1], make(array[2]))
}


let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]])

var result = []
for (let node of inorder(tree)) {
    result.push(node)
}
console.log(result)