/**
 * push server for admins
 * by kueiapp.com
 */

const push = require("web-push");

const pushIdentifier = {}; // get from client

// Setup web-push
const publichKey = ""; // created from web-push package
const privateKey = "";
push.setVapidDetails("mailto:kueiapp@outlook.com", publichKey, privateKey);

const content = {
	title: "hello title 2",
	body: "announcemnt body 2",
	icon:
		"https://2.bp.blogspot.com/-IRzwSufkrc8/XMpf2cjBW9I/AAAAAAACOCY/n0C_Gnm9hi0v-Ka0YPzGkrRvidY0fQkvgCLcBGAs/s72-c/180.png",
	vibrate: [200, 100, 200, 100, 200, 100, 200],
	actions: [
		{
			action: "explore",
			title: "explore more",
			icon:
				"https://4.bp.blogspot.com/-lhvuXu4110w/XN4pzBNdttI/AAAAAAACONg/ujtC1vwc73k38bZB8YtI0xP79FWqyEWyACLcBGAs/s72-c/64.png",
		},
		{
			action: "close",
			title: "close",
			icon:
				"https://1.bp.blogspot.com/-6t2jDezT5yo/XMpgCgXl-5I/AAAAAAACOCc/8jJR2T5V0TcfBqfDmAPY0JLh9Req4arJgCLcBGAs/s72-c/iku300.png",
		},
	],
};
push.sendNotification(pushIdentifier, JSON.stringify(content));
