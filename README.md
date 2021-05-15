```
    ███        ▄████████  ▄█          ▄████████    ▄██████▄     ▄████████    ▄████████   ▄▄▄▄███▄▄▄▄   
▀█████████▄   ███    ███ ███         ███    ███   ███    ███   ███    ███   ███    ███ ▄██▀▀▀███▀▀▀██▄ 
   ▀███▀▀██   ███    █▀  ███         ███    █▀    ███    █▀    ███    ███   ███    ███ ███   ███   ███ 
    ███   ▀  ▄███▄▄▄     ███        ▄███▄▄▄      ▄███         ▄███▄▄▄▄██▀   ███    ███ ███   ███   ███ 
    ███     ▀▀███▀▀▀     ███       ▀▀███▀▀▀     ▀▀███ ████▄  ▀▀███▀▀▀▀▀   ▀███████████ ███   ███   ███ 
    ███       ███    █▄  ███         ███    █▄    ███    ███ ▀███████████   ███    ███ ███   ███   ███ 
    ███       ███    ███ ███▌    ▄   ███    ███   ███    ███   ███    ███   ███    ███ ███   ███   ███ 
   ▄████▀     ██████████ █████▄▄██   ██████████   ████████▀    ███    ███   ███    █▀   ▀█   ███   █▀  
                         ▀                                     ███    ███                              
```

Source for ASCII-fonts: https://www.coolgenerator.com/ascii-text-generator
(Font: Delta Corps Priest 1


# What is this?

This is a playground project to test the Telegram bot API for the Telegram messenger.

# What's the motivation?

To test and create own code templates to interact with Telegram.

# Installation
Retrieve your user ID from Telegram using @userinfobot
This returns:
```
@UserN4me
Id: 1221881014
First: Texas Hunter
```

Create a telegram bot including an access token with the help of @BotFather 

Sample data below:

```
BotUserName: JniTestBot
Bot HttpAPI Access Token
1221881014:aafmHAL53ZAO3PRfW1WSuTq9Oe
```

Copy the actual data in the project's .env file like this:
```
# User ID and token for your Telegram Bot
USER_ID=1221881014
APP_TOKEN=1221881014:aafmHAL53ZAO3PRfW1WSuTq9Oe

```

Install and build the project.

```
npm install
npm run build
```

# How to use
```
node dist/src/App.js
```

# Release History

## v0.1.0
- Bot can be activated and deactivated.