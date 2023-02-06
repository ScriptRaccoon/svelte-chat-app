type message = {
	author: string;
	text: string;
	bot: boolean;
};

type user = {
	id: string;
	name: string;
};

type ServerToClientEvents = {
	message: (m: message) => void;
	users: (u: user[]) => void;
};

type ClientToServerEvents = {
	login: (n: string) => void;
	message: (m: message) => void;
};

type InterServerEvents = {};

type SocketData = {
	name: string;
};
