import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

const db = admin.firestore()

export const createUser = functions.auth.user().onCreate((user, context) => {
  return db.collection('users').doc(user.uid).set({
    'name': user.displayName,
    'email': user.email,
    'customer': [],
    'manager': []
  })
})

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!")
// })

// export const provisionDevice = functions.https.onRequest((request, response) => {

// })
