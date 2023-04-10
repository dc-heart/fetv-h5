'use strict';
const db=uniCloud.database()
exports.main = (event, context) => {
	let {id}=event
	return db.collection('selfcolumns').doc(id).get()
	
};
