const cacheName = 'library-management-cache-v1';
const resourcesToPrecache = [
  '/',
  '/HomePage.html',
  '/SignUp.html',
  '/ResetPassword.html',
  '/AcceptLibrarian.html',
  '/AcceptStudent.html',
  '/AdminDashboard.html',
  '/ApplePayBillingInfo.html',
  '/ApplePayConfirmation.html',
  '/BooksMainPage.html',
  '/creditCardBillingInfo.html',
  '/CreditCardConfirmation.html',
  '/BorrowForUni.html',
  '/BorrowingForNon.html',
  '/BorrowingInfo.html',
  '/CashOnDeliveryBillingInfo.html',
  '/ChoosePaymentMethod.html',
  '/CODconfirmation.html',
  '/CreditCardInfo.html',
  '/CurrentBorrowedItems.html',
  '/EmptyCart.html',
  '/Favorites.html',
  '/librarianHomePage.html',
  '/LibrarianPage.html',
  '/Login.html',
  '/MeetingRoom.html',
  '/MeetingSchedules.html',
  '/OrderHistory.html',
  '/SelectUserAdmin.html',
  '/StudentPage.html',
  '/trackOrder.html',
  '/UserProfile.html',
  '/styles.css',
  'Images/logo.png',
  'Images/Logo.png',
  'Images/borrow1.png',
  'Images/cash.png',
  'Images/visa.png',
  'Images/library-card.png',
  'Images/user-avatar.png',
  'Images/applePay.png',
  'Images/atomic-habits.jpg',
  'Images/author1.png',
  'Images/author2.png',
  'Images/author3.png',
  'Images/author4.png',
  'Images/Babel.jpg',
  'Images/AGoodGirl’sGuideToMurder.jpg',
  'Images/BeForTheCoffee.jpg',
  'Images/book1.jpeg',
  'Images/book2.jpeg',
  'Images/book3.jpeg',
  'Images/book4.jpeg',
  'Images/book5.jpeg',
  'Images/book6.jpeg',
  'Images/book7.jpeg',
  'Images/book8.jpeg',
  'Images/borrow2.png',
  'Images/borrow3.png',
  'Images/borrow4.png',
  'Images/borrow5.png',
  'Images/borrow6.png',
  'Images/borrow7.png',
  'Images/divine-rivals.jpg',
  'Images/EmptyCart.png',
  'Images/EveryoneonThisTrainisaSuspect.jpg',
  'Images/FairyTale.jpg',
  'Images/footer.jpg',
  'Images/FourthWing.jpg',
  'Images/FromBloodandAsh.jpg',
  'Images/HowtoSolveYourOwnMurder.jpg',
  'Images/I’mGladMyMomDied.jpg',
  'Images/if-you-could-see-the-sun.jpg',
  'Images/image1 copy.jpg',
  'Images/image1.jpg',
  'Images/image2 copy.jpg',
  'Images/image2.jpg',
  'Images/image3 copy.jpg',
  'Images/image3.jpg',
  'Images/image4 copy.jpg',
  'Images/image4.jpg',
  'Images/intro-image.jpg',
  'Images/Librarian.jpg',
  'Images/library-background.jpg',
  'Images/mag1.png',
  'Images/MurderRoad.jpg',
  'Images/mystery.png',
  'Images/powerless.jpg',
  'Images/Profile.jpg',
  'Images/quote.png',
  'Images/romance.png',
  'Images/science.png',
  'Images/Student.jpg',
  'Images/talking-to-strangers.jpg',
  'Images/the-housemaids-secret.jpg',
  'Images/the-mountain-is-you.jpg',
  'Images/The48LawsOfPower.jpg',
  'Images/TheInvisibleLifeofAddieLarue.jpg',
  'Images/TheNaturals.jpg',
  'Images/ThePsychologyofMoney.jpg',
  'Images/TheQueenofNothing.jpg',
  'Images/TheReappearanceofRachelPrice.jpg',
  'Images/TheseInfiniteThreads.jpg',
  'Images/ThinkingFastAndSlow.jpg',
  'Images/TimeManagementforMortal.jpg',
  'Images/veiled-kingdom.jpg'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
  );
});

self.addEventListener('push', function(event) {
    console.log('Push message received:', event);

    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Default title';
    const options = {
        body: data.body || 'Default body',
        icon: data.icon || 'images/logo-192.png',
        badge: data.badge || 'images/logo-192.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
