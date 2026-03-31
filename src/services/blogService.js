// src/services/blogService.js
import {
  collection, getDocs, getDoc, doc,
  addDoc, updateDoc, deleteDoc,
  query, where, orderBy, limit, serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'blogs';

export const getBlogs = async (options = {}) => {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION));
    let results = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    if (options.status) results = results.filter(b => b.status === options.status);
    results.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    if (options.limit) results = results.slice(0, options.limit);
    return results;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const q = query(collection(db, COLLECTION), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const d = snapshot.docs[0];
    return { id: d.id, ...d.data() };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
};

export const addBlog = async (data) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data, createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const updateBlog = async (id, data) => {
  await updateDoc(doc(db, COLLECTION, id), { ...data, updatedAt: serverTimestamp() });
};

export const deleteBlog = async (id) => {
  await deleteDoc(doc(db, COLLECTION, id));
};
