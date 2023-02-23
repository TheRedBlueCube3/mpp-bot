# MPP Bot

## A Deno chatbot for MPP

What does this _bot_ do? It's the very early version of **JSPlayground**!  
You can execute various JS commands using this bot!  
Here is a step-by-step tutorial. It is pretty _easy_!

### Installing Deno

To install Deno, see [the Deno documentation](https://deno.land/manual@v1.30.3/getting_started/installation). If you already have Deno installed, you can skip this step.

### Setting up the bot

What to do:

1. Create a bconfig.json file

To use another name for the config file, see [the index.ts file](index.ts).

2. Set up the contents for the config file

The contents for the **_.json_** file look like this:

```json
{
	"token": "aaaaaaaaaaaaaaaaaaaaaaaa.ffffffff-ffff-ffff-ffff-ffffffffffff",
	"name": "JSPlayground",
	"color": "#adadad",
	"channel": "js room",
	"uri": "wss://mppclone.com:8443"
}
```

_The `"uri"` member of the config is the domain for **WebSocket Secure**. If you don't know anything about that, you can ignore this._

3. Run the bot

Make sure your _config file_ is valid. If it is valid, you can proceed.  
 Now, run `deno run --allow-net --allow-write index.ts`.  
And that's it!

Now enjoy your **bot**!
