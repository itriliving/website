import { db } from '@/firebase/firebase.config';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

async function createUser(uid, userData) {
	try {
		const userRef = doc(db, 'users', uid);
		await setDoc(userRef, userData);
		console.log('User created successfully');
		return true;
	} catch (error) {
		console.error('Error creating user:', error);
		return false;
	}
}

async function updateUser(uid, updatedData) {
	try {
		const userRef = doc(db, 'users', uid);
		await updateDoc(userRef, updatedData);
		return true;
	} catch (error) {
		console.error('Error updating user:', error);
		return false;
	}
}

async function getUser(uid) {
	try {
		const userRef = doc(db, 'users', uid);
		const userDoc = await getDoc(userRef);
		if (userDoc.exists()) {
			console.log('User found');
			return userDoc.data();
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error fetching user:', error);
		return null;
	}
}

export { createUser, updateUser, getUser };
