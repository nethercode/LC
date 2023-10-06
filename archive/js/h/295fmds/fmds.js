class MedianFinder {
    constructor() {
      this.arr = [];
    }
  
    addNum(num) {
      let l = 0, r = this.arr.length - 1;
      while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (this.arr[m] < num) l = m + 1;
        else r = m - 1;
      }
      this.arr.splice(l, 0, num);
    }
  
    findMedian() {
      const mid = Math.floor(this.arr.length / 2);
      return this.arr.length % 2 === 0
        ? (this.arr[mid] + this.arr[mid - 1]) / 2
        : this.arr[mid];
    }
  }

  const medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  medianFinder.addNum(3);
  console.log(medianFinder.findMedian()); // Output: 2
  
  medianFinder.addNum(4);
  console.log(medianFinder.findMedian()); // Output: 2.5
  