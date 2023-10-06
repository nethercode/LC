func topKFrequent(nums []int, k int) []int {
    // Create a hash map to count the frequency of each element in the array
    freq := make(map[int]int)
    for _, num := range nums {
        freq[num]++
    }
    
    // Create a priority queue to keep track of the k elements with the highest frequency
    pq := make(PriorityQueue, len(freq))
    i := 0
    for num, count := range freq {
        pq[i] = &Item{
            value:    num,
            priority: count,
            index:    i,
        }
        i++
    }
    heap.Init(&pq)
    
    // Extract the top k elements from the priority queue
    result := make([]int, k)
    for i := 0; i < k; i++ {
        item := heap.Pop(&pq).(*Item)
        result[i] = item.value
    }
    
    return result
}

type Item struct {
    value    int // The value of the item; arbitrary.
    priority int // The priority of the item in the queue.
    index    int // The index of the item in the heap.
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    // We want Pop to give us the highest, not lowest, priority so we use greater than here.
    return pq[i].priority > pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
    pq[i].index = i
    pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
    n := len(*pq)
    item := x.(*Item)
    item.index = n
    *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    item.index = -1 // for safety
    *pq = old[0 : n-1]
    return item
}
