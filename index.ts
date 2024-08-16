class Stack {
	private _items: string[];

	constructor() {
		this._items = [];
	}

	show(): void {
		console.log(this._items);
	}

	push(element: string) {
		this._items.push(element);
	}
}

const stack = new Stack();
stack.push("ab");
stack.push("bc");

stack.show();
