import {
  collection, getDocs, doc,
  addDoc, updateDoc, deleteDoc,
  query, where, limit, serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'products';

export const getProducts = async (options = {}) => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION));
    console.log('Total products fetched:', snapshot.size);
    
    let results = snapshot.docs.map(d => {
      const data = d.data();
      console.log('Product:', data.name, '| Category:', data.category);
      return { id: d.id, ...data };
    });

    if (options.category) {
      results = results.filter(p => p.category === options.category);
    }
    if (options.featured) {
      results = results.filter(p => p.featured === true);
    }
    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    results.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    return results;
  } catch (error) {
    console.error('getProducts error:', error.code, error.message);
    return [];
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION));
    const all = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    return all.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error('getProductBySlug error:', error.code, error.message);
    return null;
  }
};

export const addProduct = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION), {
      ...data,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('addProduct error:', error.code, error.message);
    throw error;
  }
};

export const updateProduct = async (id, data) => {
  try {
    await updateDoc(doc(db, COLLECTION, id), {
      ...data,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('updateProduct error:', error.code, error.message);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
  } catch (error) {
    console.error('deleteProduct error:', error.code, error.message);
    throw error;
  }
};