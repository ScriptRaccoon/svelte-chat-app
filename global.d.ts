type user_message = {
	user_name: string;
	text: string;
	bot: false;
};

type bot_message = {
	text: string;
	bot: true;
};

type message = user_message | bot_message;

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
	message: (m: user_message) => void;
};

type inter_server_events = {};

type socket_data = {
	name: string;
};
