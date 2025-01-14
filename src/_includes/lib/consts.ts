export const WEBSLAB_PROJECT = "reconnected";
export const WEBSLAB_DOMAIN = "ipsitec.es";
export const WEBSLAB_TOKEN = "TOKEN"; // TODO: temporary, should be user token

export const SITE_TITLE = "Reconnected";
export const SITE_DESCRIPTION = "Welcome to Reconnected!";

export const DB = {
	// url: "ws://localhost:8000/",
	url: `wss://surreal.${WEBSLAB_DOMAIN}/`,
	config: {
		access: "user",
		database: WEBSLAB_PROJECT,
		namespace: "webslab",
	},
};
