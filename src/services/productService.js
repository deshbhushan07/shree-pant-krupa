// src/services/productService.js
import {
  collection, getDocs, getDoc, doc,
  addDoc, updateDoc, deleteDoc,
  query, where, orderBy, limit, serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'products';

export const getProducts = async (options = {}) => {
  try {
    let q = collection(db, COLLECTION);
    const constraints = [];
    if (options.category) constraints.push(where('category', '==', options.category));
    if (options.limit) constraints.push(limit(options.limit));
    if (constraints.length > 0) q = query(q, ...constraints);
    const snapshot = await getDocs(q);
    let results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    if (options.featured) results = results.filter(p => p.featured === true);
    // sort in JS to avoid Firestore index issues
    results.sort((a, b) => {
      const at = a.createdAt?.seconds || 0;
      const bt = b.createdAt?.seconds || 0;
      return bt - at;
    });
    return results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const q = query(collection(db, COLLECTION), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error('Error fetching product:', error);
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
    console.error('Error adding product:', error);
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
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION, id));
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
