func addTwoNumbers(l1, l2 *ListNode) *ListNode {
	l1s := sliceFromList(l1)
	l2s := sliceFromList(l2)

	l1l, l2l := len(l1s), len(l2s)
	if l1l < l2l {
		l1s, l2s = l2s, l1s
		l1l, l2l = l2l, l1l
	}

	carry := 0
	var pre *ListNode
	i := l1l - 1
	for j := l2l - 1; j >= 0; i, j = i-1, j-1 {
		carry, pre = sumToList(carry, l1s[i], l2s[j], pre)
	}

	for ; i >= 0; i-- {
		carry, pre = sumToList(carry, l1s[i], 0, pre)
	}

	if carry != 0 {
		cur := &ListNode{Next: pre, Val: carry}
		pre = cur
	}

	return pre
}

func sumToList(carry int, i, j int, pre *ListNode) (int, *ListNode) {
	cur := &ListNode{Next: pre, Val: (i + j + carry) % 10}
	carry = (i + j + carry) / 10
	return carry, cur
}

func sliceFromList(list *ListNode) []int {
	slice := make([]int, 0)
	for iter := list; iter != nil; iter = iter.Next {
		slice = append(slice, iter.Val)
	}
	return slice
}