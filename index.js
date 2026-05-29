const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'dynamic-8.magmanode.com', // ম্যাগমানোডের নতুন আইপি
        port: 25712,                     // ম্যাগমানোডের নতুন পোর্ট
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
