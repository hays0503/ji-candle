import fetch from "node-fetch";

const refreshUrl = "https://webserver.jusaninvest.kz/api/auth/refresh-token";
const loginUrl = "https://webserver.jusaninvest.kz/api/auth/login";
const HsbkURL =
	"https://server.jusaninvest.kz/api/portfolios/orderbook?stockid=105";

const loginData = {
	headers: {
		accept: "application/json, text/plain, */*",
		authorization: "Basic ",
		"sec-ch-ua":
			'"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": '"Windows"',
	},
	referrer: "https://trading.jusaninvest.kz/",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: null,
	method: "GET",
	mode: "cors",
	credentials: "include",
};

const sleep = (waitTimeInMs) =>
	new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

async function fetchData(url, req) {
	try {
		const response = await fetch(url, req); // Replace with your desired URL
		const data = await response; // You can use .json() for JSON responses
		const { headers } = response;
		const json = await data.json();

		return { headers, json };
	} catch (error) {
		console.error("An error occurred:", error);
	}
}

function GetRefreshData(lastToken) {
	try {
		const data = {
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-language": "ru,en;q=0.9",
				"cache-control": "no-cache",
				"content-type": "application/x-www-form-urlencoded",
				pragma: "no-cache",
				"sec-ch-ua":
					'"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Windows"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				cookie: "refreshToken=" + lastToken,
				Referer: "https://trading.jusaninvest.kz/",
				"Referrer-Policy": "strict-origin-when-cross-origin",
			},
			body: null,
			method: "POST",
		};
		return data;
	} catch (error) {
		console.error("An error occurred:", error);
	}
}

function GetRefreshTokenInStr(stringData) {
	let _refreshToken = stringData
		.get("set-cookie")
		.split(";")[0]
		.split("refreshToken=")[1];
	return _refreshToken;
}

const LoginResponse = await fetchData(loginUrl, loginData);
let Token = LoginResponse.json.token;
let RefreshToken = GetRefreshTokenInStr(LoginResponse.headers);
console.log("Token  =", Token);
console.log("RefreshToken  =", RefreshToken);
const NewToken = await fetchData(refreshUrl, GetRefreshData(RefreshToken));
Token = NewToken.json.token;
RefreshToken = GetRefreshTokenInStr(NewToken.headers);
console.log("\nToken  =", Token);
console.log("RefreshToken  =", RefreshToken);

while (true) {
	await sleep(6000).then(async () => {
		const NewToken = await fetchData(refreshUrl, GetRefreshData(RefreshToken));
		Token = NewToken.json.token;
		RefreshToken = GetRefreshTokenInStr(NewToken.headers);
		const HsbkData = {
			headers: {
				accept: "*/*",
				"accept-language": "ru,en;q=0.9",
				authorization: "Bearer " + Token,
				"cache-control": "no-cache",
				pragma: "no-cache",
				"sec-ch-ua":
					'"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Windows"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				Referer: "https://trading.jusaninvest.kz/",
				"Referrer-Policy": "strict-origin-when-cross-origin",
			},
			body: null,
			method: "GET",
		};
		const HsbkResponse = await fetchData(HsbkURL, HsbkData);
		console.log(HsbkResponse);
	});
}
