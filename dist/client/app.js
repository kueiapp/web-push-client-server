/**
 * client app
 * by kueiapp.com
 */

const publichKey = ""; // same as key from server

if ("serviceWorker" in window.navigator) {
	navigator.serviceWorker.register("/sw.js", {
		scope: "/",
	});
	console.log(`to register service worker to sw.js`);
}

async function subscribeNotification() {
	const sw = await navigator.serviceWorker.ready;
	const push = await sw.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(publichKey),
	});
	console.log(`Nofitication identifier of this browser is below`);
	console.log(JSON.stringify(push));
}

function urlBase64ToUint8Array(base64String) {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}
