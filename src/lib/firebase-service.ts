import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export class FirebaseService {
  static async getAllInstruments() {
    try {
      const querySnapshot = await getDocs(collection(db, 'instruments'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Firebase error:', error);
      return [];
    }
  }

  static async updateInstrumentStatus(instrumentId: string, status: string, checkedOutBy: string | null = null) {
    try {
      const instrumentRef = doc(db, 'instruments', instrumentId);
      await updateDoc(instrumentRef, {
        status,
        checkedOutBy,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Firebase update error:', error);
      throw error;
    }
  }
}