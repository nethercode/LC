/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

 func copyRandomList(head *Node) *Node {
    if head == nil {
        return nil
    }
    
    // Step 1: Create a new node for each node in the original linked list
    // and set the value of the new node to the value of the corresponding original node.
    cur := head
    for cur != nil {
        newNode := &Node{Val: cur.Val}
        newNode.Next = cur.Next
        cur.Next = newNode
        cur = newNode.Next
    }
    
    // Step 2: Create a mapping from each original node to its corresponding new node.
    cur = head
    for cur != nil {
        if cur.Random != nil {
            cur.Next.Random = cur.Random.Next
        }
        cur = cur.Next.Next
    }
    
    // Step 3: Set the next and random pointers of the new nodes using the mapping created in step 2.
    cur = head
    newHead := head.Next
    for cur != nil {
        tmp := cur.Next
        cur.Next = tmp.Next
        if tmp.Next != nil {
            tmp.Next = tmp.Next.Next
        }
        cur = cur.Next
    }
    
    // Step 4: Return the head of the new linked list.
    return newHead
}
