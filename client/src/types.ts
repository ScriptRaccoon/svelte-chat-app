export type ServerToClientEvents = {
	message: (m: string) => void;
};

export type ClientToServerEvents = {
	message: (m: string) => void;
};

export type InterServerEvents = {};

export type SocketData = {
	name: string;
};
