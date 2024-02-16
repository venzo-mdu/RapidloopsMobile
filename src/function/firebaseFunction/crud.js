import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, query, where, setDoc, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const ids = {
  'user': 'user_id',
  'ground_details': 'ground_id',
  'courts': 'court_id',
  'masterslot': 'slot_id',
  'events': 'event_id',
  'config': 'config_id',
  'review': 'review_id'
}

// const FetchData = async (table, filter_key, filter_value, requiredFields = []) => {
//   let collectionRef = collection(db, table);
//   if (filter_key && filter_value != null) {
//     collectionRef = query(collectionRef, where(filter_key, '==', filter_value));
//   }
//   let data
//   try {
//     const querySnapshot = await getDocs(collectionRef);
//     data = querySnapshot.docs.map(doc => { return { [ids[table]]: doc.id, ...doc.data() } })
//   } catch (e) {
//     console.error('Error getting documents:', e);
//   }

//   return data
// }

const FetchData = async (table,filter_key, filter_value, requiredFields = []) => {
  let collectionRef = collection(db, table);

  if(filter_key && filter_value){
    collectionRef = query(collectionRef, where(filter_key, '==', filter_value));
  }

  let data;

  try {
    let querySnapshot = await getDocs(collectionRef);

    data = querySnapshot.docs.map(doc => { return { [ids[table]]: doc.id, ...doc.data() } })
  } catch (e) {
    console.error('Error getting documents:', e);
  }

  return data
}

// const FetchDataById = async (table, docid) => {
//   const docRef = doc(db, table, docid);

//   try {
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       return { [ids[table]]: docSnap.id, ...docSnap.data() }
//     } else {

//     }

//   } catch (e) {
//     console.error('Error getting document:', e);
//   }
// }

const FetchDataById = async (table, docid) => {
  const docRef = doc(db, table, docid);   

  try {
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { [ids[table]]: docSnap.id, ...docSnap.data()}
    } else {
      return {'status':'failure'}
    }
   
  } catch (e) {
    console.error('Error getting document:', e);
  }
}

// const InsertData = async (collectionName, formValues) => {
//   try {
//     const collectionRef = collection(db, collectionName);

//     const docRef = await addDoc(collectionRef, formValues);

//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();

//       return docData;
//     } else {
//       console.error('Document does not exist');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error adding document:', error);
//     return error
//   }
// }

const InsertData = async (collectionName, formValues) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, formValues);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();

      return docData;
    } else {

      return null;
    }

  } catch (error) {
    return error
  }
}

// const InsertDataWithUID = async (collectionName, formValues, uid) => {
//   try {
//     const collectionRef = collection(db, collectionName);

//     const docRef = doc(collectionRef, uid);

//     await setDoc(docRef, formValues);

//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();

//       return docData;
//     } else {
//       console.error('Document does not exist');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error adding document:', error);
//     return error;
//   }
// };

const InsertDataWithUID = async (collectionName, formValues, uid) => {
  try {
    const collectionRef = collection(db, collectionName);
    
    const docRef = doc(collectionRef, uid); 
    
    await setDoc(docRef, formValues); 
    
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();

      return docData;
    } else {

      return null;
    }
  } catch (error) {
    return error;
  }
};


// const UpdateData = async (collectionName, updateValues, docId) => {

//   try {
//     const docRef = doc(db, collectionName, docId);

//     await updateDoc(docRef, updateValues);
//     const updatedDoc = await getDoc(docRef);
//     const updatedData = updatedDoc.data();

//     return updatedData
//   } catch (error) {
//     console.error('Error updating document:', error);
//     return error
//   }
// };

// const UpdateData = async (collectionName, updateValues, docId) => {

//   try {
//     const docRef = doc(db, collectionName, docId);

//     const data = await updateDoc(docRef, updateValues);

//     // nashrin
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

const UpdateData = async (collectionName, updateValues, docId) => {

  try {
    const docRef = doc(db, collectionName, docId);

    const data = await updateDoc(docRef, updateValues);
    
  } catch (error) {

    return error
    // console.error('Error updating document:', error);
  }
};

// const DeleteData = async (collectionName, docId) => {
//   try {
//     const docRef = doc(db, collectionName, docId);
//     await deleteDoc(docRef);
//   } catch (error) {
//     console.error('Error deleting document:', error);
//   }
// };

const DeleteData = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    return error;
  }
};

export { FetchData, FetchDataById, InsertData, InsertDataWithUID, UpdateData, DeleteData };
