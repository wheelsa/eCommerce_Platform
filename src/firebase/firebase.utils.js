import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyABxY0B8Da-X72SdFJcuBDpL4H_-pBzD8I",
  authDomain: "ecommerce-a576d.firebaseapp.com",
  databaseURL: "https://ecommerce-a576d.firebaseio.com",
  projectId: "ecommerce-a576d",
  storageBucket: "ecommerce-a576d.appspot.com",
  messagingSenderId: "825707936660",
  appId: "1:825707936660:web:0c91aac5afb2a078742d81"
};

export const createUserProfileDocument =  async (userAuth, additionalData) => {
  if (!userAuth){return};
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }}
    return userRef;
  };
  
firebase.initializeApp(config);


export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
  });
  return await batch.commit();
}; //used this to upload shop data to firebase

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collections.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;