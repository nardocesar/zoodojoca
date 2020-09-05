import * as admin from 'firebase-admin';

const serviceAccount = require('./zoo-do-joca-firebase-adminsdk-75rnh-7dcd7a6ca1.json');

if (admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://zoo-do-joca.firebaseio.com"
	})
}

const database = admin.firestore();

const create = async (colletction, list) => {
	try {
		await database.collection(colletction).add(list);
		return {
			data: list
		};
	} catch (error) {
		throw new Error(error);
	}
}

export default create;