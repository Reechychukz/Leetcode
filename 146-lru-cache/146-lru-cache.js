/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
};

LRUCache.prototype.get = function(key) {
    let value = this.cache.get(key)
    if ( this.cache.delete(key) )
        this.cache.set(key,value)
    return value == null ? -1 : value
};

LRUCache.prototype.put = function(key, value) {
    this.cache.delete(key)
    this.cache.set(key,value)
    if ( this.cache.size > this.capacity )
        this.cache.delete(this.cache.keys().next().value)
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */