const Node = require('./node');

class LinkedList {
    constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

    append(data) {
		var node = new Node(data);
		if (this._tail != null){
			node.prev = this._tail;
			this._tail.next = node;
			this._tail = node;
		}
		else {
			this._head = node;
			this._tail = node;
		}
		this.length++;
		
		return this;
	}

    head() {
		if (this._head != null) {
			return this._head.data;
		}
		else
			return null;
	}

    tail() {
		if (this._tail != null) {
			return this._tail.data;
		}
		else
			return null;
	}

    at(index) {
		var ind = 0;
		var node = this._head;
		while (ind < index && node.next != null) {
			node = node.next;
			ind++;
		}
		if (ind == index) {
			return node.data;
		}
		else
			return null;
	}

    insertAt(index, data) {
		if (index == this.length) {
			this.append(data);
		}
		else if (index < this.length) {
			var nodeIn = new Node(data);
			if (index == 0) {
				nodeIn.next = this._head;
				this._head.prev = nodeIn;
				this._head = nodeIn;
			}
			else {
				var ind = 0;
				var node = this._head;
				while (ind < index && node.next != null) {
					node = node.next;
					ind++;
				}
				if (ind == index) {
					nodeIn.prev = node.prev;
					nodeIn.next = node;
					node.prev.next = nodeIn;
					node.prev = nodeIn;
				}
			}
		}
		return this;
	}

    isEmpty() {
		if (this._tail != null)
			return false;
		return true; 
	}

    clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
		
		return this;
	}

    deleteAt(index) {
		if (index < this.length)
		{
			if (index == this.length - 1) {
				this._tail == this._tail.prev;
			}
			else if (index == 0) {
				this._head = this._head.next;
			}
			else {
				var ind = 0;
				var node = this._head;
				while (ind < index && node.next != null) {
					node = node.next;
					ind++;
				}
				if (ind == index) {
					node.prev.next = node.next;
					node.next.prev = node.prev;
					node = null;
				}
			}
			this.length--;
		}
		
		return this;
	}

    reverse() {
		var count = this.length;
		var ind = count - 1;
		
		if (this.length > 1) {
			while (ind > 0) {
				ind--;
				var data = this.at(ind);
				this.append(data);
				this.deleteAt(ind);
			}
		}
		
		return this;
	}

    indexOf(data) {
		var ind = 0;
		var node = this._head;
		while (node.data != data && node.next != null) {
			node = node.next;
			ind++;
		}
		if (node.data == data) {
			return ind;
		}
		else
			return -1;
	}
}

module.exports = LinkedList;
