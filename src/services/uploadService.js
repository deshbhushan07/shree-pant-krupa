import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const uploadImage = (file, folder = 'general', onProgress) => {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const storageRef = ref(storage, `pant-krupa/${folder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snap) => {
        const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        if (onProgress) onProgress(pct);
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      }
    );
  });
};