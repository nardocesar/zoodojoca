import * as admin from 'firebase-admin';

const serviceAccount = require('./zoo-do-joca-firebase-adminsdk-75rnh-7dcd7a6ca1.json');

if (admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://zoo-do-joca.firebaseio.com"
	})
}

const database = admin.firestore();

const update = async (collection, doc, body) => {
	const ref = database.collection(collection).doc(doc);
	const res = await ref.update(body);

	return res.writeTime
};

export default update;