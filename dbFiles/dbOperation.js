const config = require('./dbConfig'),
    sql = require('mssql');

const getDiseases = async(name) => {
    try {
        let pool = await sql.connect(config);
        let diseases = await pool.request().query(`SELECT * FROM disease where name='${name}'`)
        //SELECT * FROM disease where name like '%${name}%'
        console.log(diseases);
        return diseases;
    }
    catch (error) {
        console.log(error);
    }
}

const createDisease = async (Disease) => {
    try {
        let pool = await sql.connect(config);
        let diseases = await pool.request()
            .query(`INSERT INTO disease VALUES
        ('${Disease.Name}', 
            '${Disease.Symptom}', '${Disease.Treatment}',
            '${Disease.Prevention}', '${Disease.SymptomEn}',
            '${Disease.TreatmentEn}', '${Disease.PreventionEn}')
        `)
        return diseases;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    createDisease,
    getDiseases
}