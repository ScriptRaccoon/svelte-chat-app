type message = {
	author: string;
	text: string;
	bot: boolean;
};

type user = {
	id: string;
	name: string;
};

type server_to_client_events = {
	message: (m: message) => void;
	users: (u: user[]) => void;
};

type client_to_server_events = {
	login: (n: string) => void;
	message: (m: message) => void;
};

type inter_server_events = {};

type socket_data = {
	name: string;
};
