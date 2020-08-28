import * as admin from 'firebase-admin';

const serviceAccount = require('./zoo-do-joca-firebase-adminsdk-75rnh-7dcd7a6ca1.json');

if (admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://zoo-do-joca.firebaseio.com"
	})
}

const database = admin.database();

const read = async (collection) => {
	const ref = database.ref(collection);
	const value = await ref.once('value');

	return await value.val();
};

export default read;