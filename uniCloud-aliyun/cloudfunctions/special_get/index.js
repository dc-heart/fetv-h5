'use strict';
const db=uniCloud.database()
exports.main = (event, context) => {
	return db.collection('special').get()
	
};
