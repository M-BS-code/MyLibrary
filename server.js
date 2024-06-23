const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');

const app = express();
app.use(bodyParser.json());

const vapidKeys = {
    publicKey: 'BABh30xnFLHMdcLhEgrXVgkhHY7-msZjJ5ZqJjyeHInnfwJ85OTaJvlVGpWbdaaWQICEISeyy44ZdZUjNQPOo2Y',
    privateKey: 'cXnfsvOUu3f-_grKm-NYhVz9NcIp2DdCLwdddtx8WGM'
};

webPush.setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let subscriptions = [];

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    subscriptions.push(subscription);
    res.status(201).json({});
    console.log('Received subscription:', subscription);
});

app.post('/sendNotification', (req, res) => {
    const payload = JSON.stringify({
        title: 'Hello!',
        body: 'This is a push notification.',
        icon: 'images/logo-192.png',
        badge: 'images/logo-192.png'
    });

    subscriptions.forEach(subscription => {
        webPush.sendNotification(subscription, payload)
            .then(response => console.log('Push sent successfully!', response))
            .catch(error => console.error('Error sending push notification:', error));
    });

    res.status(200).json({});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

