import * as admin from 'firebase-admin';

const serviceAccount = require('./zoo-do-joca-firebase-adminsdk-75rnh-7dcd7a6ca1.json');

if (admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://zoo-do-joca.firebaseio.com"
	})
}

const database = admin.database();

const update = async (collection, id, body) => {
	const ref = database.ref(collection);
	const child = ref.child(id);

	try {
		child.update(body);
		return {
			success: true
		}
	} catch (error) {
		throw new Error(error);
	}
};

export default update;