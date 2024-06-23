const webPush = require('web-push');

// Replace with your generated VAPID keys
const vapidKeys = {
    publicKey: 'YOUR_PUBLIC_VAPID_KEY',
    privateKey: 'YOUR_PRIVATE_VAPID_KEY'
};

webPush.setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Example subscription object
const pushSubscription = {
    endpoint: 'YOUR_SUBSCRIBER_ENDPOINT',
    keys: {
        auth: 'YOUR_SUBSCRIBER_AUTH_KEY',
        p256dh: 'YOUR_SUBSCRIBER_P256DH_KEY'
    }
};

const payload = JSON.stringify({
    title: 'Hello!',
    body: 'This is a push notification.',
    icon: 'images/logo-192.png',
    badge: 'images/logo-192.png'
});

webPush.sendNotification(pushSubscription, payload)
    .then(response => console.log('Push sent successfully!', response))
    .catch(error => console.error('Error sending push notification:', error));
