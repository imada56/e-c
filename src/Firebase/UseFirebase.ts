import { useEffect, useState } from 'react';
 // Ensure this imports your Firestore instance correctly
import { Product, Marque } from './types'; // Import the types
import { db } from './Firebase';

export const useFirebase = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [marque, setMarque] = useState<Marque[]>([]);
 
  useEffect(() => {
    const unsubscribe = db.collection('marque').onSnapshot(snap => {
      const fetched: Marque[] = snap.docs.map(doc => ({
        ...(doc.data() as Omit<Marque, 'id'>), // Exclude id from the type and cast data
        id: doc.id
      }));
      console.log('fetched ===',fetched)
      setMarque(fetched);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection('items').onSnapshot(snap => {
      const fetched: Product[] = snap.docs.map(doc => ({
        ...(doc.data() as Omit<Product, 'id'>), // Exclude id from the type and cast data
        id: doc.id
      }));
      setProduct(fetched);
    });

    return unsubscribe;
  }, []);

  return { product, marque };
};
