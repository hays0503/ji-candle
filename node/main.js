import fetch from "node-fetch";

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

while (true) {
	await sleep(2000).then(async () => {
		const loginUrl = "https://webserver.jusaninvest.kz/api/auth/login";
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

		const LoginResponse = await fetchData(loginUrl, loginData);

		let Token = LoginResponse.json.token;
		let refreshToken = LoginResponse.headers
			.get("set-cookie")
			.split(";")[0]
			.split("refreshToken=")[1];

		const HsbkURL =
			"https://server.jusaninvest.kz/api/portfolios/orderbook?stockid=105";
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
