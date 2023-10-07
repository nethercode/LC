type Project struct {
    profit, capital int
}

type MaxHeap []int

type IntHeap []int

func (h IntHeap) Less(i, j int) bool {
    return h[i] < h[j]
}

func (h IntHeap) Len() int {
    return len(h)
}

func (h IntHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *IntHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func (h MaxHeap) Less(i, j int) bool {
    return h[i] > h[j]
}

func (h MaxHeap) Len() int {
    return len(h)
}

func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
    n := len(profits)
    projects := make([]Project, n)
    for i := 0; i < n; i++ {
        projects[i] = Project{profits[i], capital[i]}
    }
    sort.Slice(projects, func(i, j int) bool {
        return projects[i].capital < projects[j].capital
    })

    maxHeap := &MaxHeap{}
    minHeap := &IntHeap{}
    heap.Init(minHeap)

    i := 0
    for k > 0 {
        for i < n && projects[i].capital <= w {
            heap.Push(maxHeap, projects[i].profit)
            i++
        }
        if maxHeap.Len() == 0 {
            break
        }
        w += heap.Pop(maxHeap).(int)
        k--
    }

    return w
}
