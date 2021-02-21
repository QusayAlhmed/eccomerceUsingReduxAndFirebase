import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDeNNWVCKdCHZRRVYXyajERqz7sqL403qM',
  authDomain: 'crown-4a936.firebaseapp.com',
  databaseURL: 'https://crown-4a936-default-rtdb.firebaseio.com',
  projectId: 'crown-4a936',
  storageBucket: 'crown-4a936.appspot.com',
  messagingSenderId: '177016630185',
  appId: '1:177016630185:web:4f2652ad36d68734f6f2b8',
  measurementId: 'G-DPBG7XG44M',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
