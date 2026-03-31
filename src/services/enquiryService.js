// src/services/enquiryService.js
import {
  collection, getDocs, addDoc, deleteDoc, doc,
  query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

export const submitEnquiry = async (data) => {
  const docRef = await addDoc(collection(db, 'enquiries'), {
    ...data, createdAt: serverTimestamp(), read: false
  });
  return docRef.id;
};

export const getEnquiries = async () => {
  const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const deleteEnquiry = async (id) => {
  await deleteDoc(doc(db, 'enquiries', id));
};

// ─── Category Service ───────────────────────────
import { updateDoc } from 'firebase/firestore';

export const getCategories = async () => {
  const snapshot = await getDocs(collection(db, 'categories'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
};

export const addCategory = async (data) => {
  const docRef = await addDoc(collection(db, 'categories'), {
    ...data, createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const updateCategory = async (id, data) => {
  await updateDoc(doc(db, 'categories', id), { ...data, updatedAt: serverTimestamp() });
};

export const deleteCategory = async (id) => {
  await deleteDoc(doc(db, 'categories', id));
};

// ─── Gallery Service ─────────────────────────────
export const getGallery = async () => {
  const snapshot = await getDocs(collection(db, 'gallery'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
};

export const addGalleryItem = async (data) => {
  const docRef = await addDoc(collection(db, 'gallery'), {
    ...data, createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const deleteGalleryItem = async (id) => {
  await deleteDoc(doc(db, 'gallery', id));
};

// ─── Dealer Service ──────────────────────────────
export const getDealers = async () => {
  const snapshot = await getDocs(collection(db, 'dealers'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
};

export const addDealer = async (data) => {
  const docRef = await addDoc(collection(db, 'dealers'), {
    ...data, createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const updateDealer = async (id, data) => {
  await updateDoc(doc(db, 'dealers', id), { ...data, updatedAt: serverTimestamp() });
};

export const deleteDealer = async (id) => {
  await deleteDoc(doc(db, 'dealers', id));
};
