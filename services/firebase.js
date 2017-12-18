import * as firebase from 'firebase'

const env = process.env

const config = {
  apiKey: env.FIREBASE_API,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID
}

!firebase.apps.length ? firebase.initializeApp(config) : ''

export const AuthProviders = {
  Google: new firebase.auth.GoogleAuthProvider(),
  FacebookProvider: new firebase.auth.FacebookAuthProvider(),
  TwitterProvider: new firebase.auth.TwitterAuthProvider()
}

export const auth = firebase.auth()
export const db = firebase.database()
export const storage = firebase.storage()

export default firebase
