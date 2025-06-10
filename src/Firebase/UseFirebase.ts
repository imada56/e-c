import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { Product, Marque } from './types';
import { db } from './Firebase';

export const useFirebase = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [marque, setMarque] = useState<Marque[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'marque'), (snap) => {
      const fetched: Marque[] = snap.docs.map(doc => ({
        ...(doc.data() as Omit<Marque, 'id'>),
        id: doc.id
      }));
      setMarque(fetched);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'items'), (snap) => {
      const fetched: Product[] = snap.docs.map(doc => ({
        ...(doc.data() as Omit<Product, 'id'>),
        id: doc.id
      }));
      setProduct(fetched);
    });

    return unsubscribe;
  }, []);

  return { product, marque };
};
