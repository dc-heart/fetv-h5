'use strict';
const db=uniCloud.database()
exports.main = (event, context) => {
	let {id}=event
	return db.collection('special').doc(id).get()
	
};
