class Client {
	token: string;
	name: string;
	room: string;
	color: string;
	uri: string;
	mppClient: WebSocket;
	constructor(
		token: string,
		name: string,
		room: string,
		color: string,
		uri: string
	) {
		this.token = token;
		this.room = room;
		this.color = color;
		this.uri = uri;
		this.name = name;
		this.mppClient = new WebSocket(this.uri);
		setInterval(() => {
			this.sendReq([{ m: 't', e: Date.now() }]);
		}, 15000);
	}
	isConnected() {
		return this.mppClient.readyState == 1;
	}
	isDisconnected() {
		return this.mppClient.readyState == 3;
	}
	sendReq(
		req: [
			{
				m:
					| 'a'
					| 'hi'
					| 'bye'
					| 'userset'
					| 'm'
					| 'kickban'
					| 'ch'
					| 't'
					| 'chown'
					| 'unban'
					| 'dm';
				message?: string;
				x?: number;
				y?: number;
				token?: string;
				_id?: string;
				e?: number;
				set?: { name?: string; color?: string };
				ms?: number;
			}
		]
	) {
		if (this.isConnected()) this.mppClient.send(JSON.stringify(req));
	}

	chat(a: string) {
		this.sendReq([{ m: 'a', message: a }]);
	}

	moveMouse(x: number, y: number) {
		this.sendReq([{ m: 'm', x: x, y: y }]);
	}

	userset(name = 'MPP Bot', color = '#ff0000') {
		this.sendReq([{ m: 'userset', set: { name, color } }]);
	}

	connect() {
		console.log(`Connected to ${this.uri}.`);
		this.sendReq([{ m: 'hi', token: this.token }]);
		this.sendReq([{ m: 'ch', _id: this.room }]);
		this.userset(this.name, this.color);
	}

	disconnect() {
		console.log('Disconnected.');
		this.mppClient.close();
	}

	dropCrown() {
		this.sendReq([{ m: 'chown' }]);
	}

	giveCrown(identifier: string) {
		this.sendReq([{ m: 'chown', _id: identifier }]);
	}

	ban(identifier: string) {
		this.sendReq([{ m: 'kickban', _id: identifier }]);
	}

	unban(identifier: string) {
		this.sendReq([{ m: 'unban', _id: identifier }]);
	}

	dm(identifier: string, a: string) {
		this.sendReq([{ m: 'dm', message: a, _id: identifier }]);
	}
}

export default Client;
