class LRUCache {
    private readonly capacity: number;
    private readonly cache: Map<number, { key: number; value: number; prev: number | null; next: number | null }>;
    private head: number | null;
    private tail: number | null;
  
    constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = new Map<number, { key: number; value: number; prev: number | null; next: number | null }>();
      this.head = null;
      this.tail = null;
    }
  
    private remove(key: number): void {
      const node = this.cache.get(key);
      if (!node) return;
  
      if (node.prev !== null) {
        this.cache.get(node.prev)!.next = node.next;
      } else {
        this.head = node.next;
      }
  
      if (node.next !== null) {
        this.cache.get(node.next)!.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
    }
  
    private addToFront(key: number): void {
      const node = this.cache.get(key)!;
  
      node.prev = null;
      node.next = this.head;
  
      if (this.head !== null) {
        this.cache.get(this.head)!.prev = key;
      }
  
      this.head = key;
  
      if (this.tail === null) {
        this.tail = key;
      }
    }
  
    get(key: number): number {
      const node = this.cache.get(key);
      if (!node) return -1;
  
      this.remove(key);
      this.addToFront(key);
  
      return node.value;
    }
  
    put(key: number, value: number): void {
      const node = this.cache.get(key);
  
      if (node !== undefined) {
        node.value = value;
        this.remove(key);
      } else {
        if (this.cache.size === this.capacity) {
          this.cache.delete(this.tail!);
          this.remove(this.tail!);
        }
        this.cache.set(key, { key, value, prev: null, next: null });
      }
  
      this.addToFront(key);
    }
  }
  