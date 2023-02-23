import conf from './bconfig.json' assert { type: 'json' };
import Client from './Client.ts';
import Ubox from './ubox.ts';
const bot = new Client(conf.token, conf.name, conf.room, conf.color, conf.uri);
const box = new Ubox();

bot.mppClient.addEventListener('open', () => {
	bot.connect();
	bot.moveMouse(Math.random() * 100, Math.random() * 100);
});

//https://mppclone.com/?c=ts%20test%20room

bot.mppClient.addEventListener('message', e => {
	const json = JSON.parse(e.data)[0];

	if (json.m == 'a') {
		const message: string = json.a;
		const uname: string = json.p.name;
		const ucolor: string = json.p.color;
		const args = message.split(' ');
		const command = args.shift();
		const input = args.join(' ');
		const uid: string = json.p.id;

		// const umx = e.x;
		// const umy = e.[0].y;

		// console.log(json);

		if (command == `--help`) {
			bot.chat(
				'Available commands: ts, about, disconnect, restart, whoami, dm.'
			);
		}

		if (command == '>') {
			if (
				uid != '819695470c858041f5f5ad6f' &&
				uid != '3bff3f33e6dc0410fdc61d13'
			)
				return bot.chat('No permission.');
			try {
				const tcode = eval(input);
				bot.chat(`< ${typeof tcode} | ${tcode}`);
			} catch (err) {
				bot.chat(`< Error | ${err}`);
			}
		}
		if (command == '--about') {
			bot.chat('bot that is used to test TypeScript code');
		}
		if (command == '--disconnect') {
			if (
				uid != '819695470c858041f5f5ad6f' &&
				uid != '3bff3f33e6dc0410fdc61d13'
			)
				return bot.chat('No permission.');
			bot.disconnect();
		} // go to cmd.ts
		if (command == '--whoami') {
			bot.chat(`${uname}, ${ucolor}, ${uid}.`);
		}
		if (command == '--dm') {
			bot.chat('Sent.');
			bot.dm(uid, input);
		}
	}
});
