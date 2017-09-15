const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// these are both test functions, pulled from another projet, to see if this seperate repo is working

exports.watchItemVendorsCreate = functions.database.ref(`inventoryItems/{itemPushId}/vendor`).onCreate( event => {
    let itemPushId = event.params.itemPushId;
    let vendorId = event.data.val();

    admin.database().ref(`vendorItems/${vendorId}/${itemPushId}`).set(true).then( _ => {
        console.log('onCreate ran and we successfully added the item to vendroItems');
    }, error => {
        console.log(error);
    });
});


exports.watchItemVendorsDelete = functions.database.ref(`inventoryItems/{itemPushId}/vendor`).onDelete( event => {
    let previousVendorId = event.data.previous.val();
    let itemPushId = event.params.itemPushId;

    admin.database().ref(`vendorItems/${previousVendorId}/${itemPushId}`).remove( _ => {
        console.log('we removed the item from the vendor.');
    }, error => {
        console.log(error);
    });
});
