const mineflayer = require('mineflayer');
const http = require('http');

// রেন্ডারকে শান্ত রাখার জন্য একটা ফেক ওয়েবসাইট পোর্ট খোলা
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running 24/7!\n');
});
server.listen(process.env.PORT || 3000, () => {
    console.log('Fake web server is live to trick Render!');
});

function createBot() {
    const bot = mineflayer.createBot({
        host: 'dynamic-8.magmanode.com', 
        port: 25712,                     
        username: 'DarkplayBot',         
        version: '1.21.11'                
    });

    bot.on('spawn', () => {
        console.log('DarkplayBot সফলভাবে সার্ভারে ঢুকে পড়েছে, ভাই!');
    });

    bot.on('end', () => {
        console.log('বট ডিসকানেক্ট হয়েছে! ৫ সেকেন্ড পর আবার ট্রাই করছে...');
        setTimeout(() => createBot(), 5000);
    });

    bot.on('error', (err) => console.log('Error হয়েছে: ', err));
}

createBot();
