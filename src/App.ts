
import TelegramClient from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const OWNER_ID = process.env["USER_ID"];
const TOKEN = process.env["APP_TOKEN"];

if ( !OWNER_ID || !TOKEN){
    const errorMessage = "Could not find Telegram Bot User ID AND/OR app token.";
    console.trace();
    console.error(errorMessage);
    throw new Error(errorMessage);
}

const client = new TelegramClient(TOKEN, {polling: true});

// The bot messages his owner, that he is back online.
client.sendMessage(OWNER_ID, "I am back my friend!");

// Allow the only to shutdown its bot by passing the command /exit to the bot's channel
client.onText(/\/exit/, (message, match) => {
    if ( match ){
        // When calling stopPolling the last exit-command will be refetched at the next start.
        // To not immedeatly shut down again after restart the obsolete message must be determined.
        const messageTime = message.date * 1000;
        const messageIsFresh = (Date.now() - messageTime) < 2000;
        const messageFromOwner = String(message.chat.id) === OWNER_ID;
        if ( messageIsFresh && messageFromOwner ){
            console.log("Exit command received from owner.");
            client.sendMessage(message.chat.id, "Reveived exit command from owner, will close...");
            client.stopPolling();
            console.log("Telegram bot is deactived.");
        }
    }
});

console.log("Telegram bot is active.");