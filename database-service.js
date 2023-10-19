const db = require('./db');

const queryExecuter = async (queryString) => {
    try {
        const result = await db.query(queryString);
        if (result.rows) {            
            return result.rows;
        } else {
            return {error: 'Empty'};
        }
    } catch (error) {
        console.log('Error while executing query.', error);
        return null;
    }
}

module.exports = {
    getStates: async () => {
        return await queryExecuter('SELECT * FROM state;');        
    },
    getStateByName: async (stateName) => {        
        return await queryExecuter(`SELECT * FROM state WHERE LOWER(state)=LOWER('${stateName}');`);
    },
    getCounties: async (stateName) => {
        return await queryExecuter(`SELECT * FROM county WHERE LOWER(state)=LOWER('${stateName}');`);
    },
    getCounty: async (stateName, countyName) => {        
        return await queryExecuter(`SELECT * FROM county WHERE LOWER(state)=LOWER('${stateName}') AND LOWER(county)=LOWER('${countyName} county');`);
    }
};

