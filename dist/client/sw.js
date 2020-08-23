/**
 * service workers
 * by kueiapp.com
 */

self.addEventListener("push", (e) => {
	const data = e.data.json();
	console.log(`got a notification from server`);
	self.registration.showNotification(data.title, {
		body: data.body,
		icon: data.icon,
		vibrate: data.vibrate,
		actions: data.action,
	});
});
