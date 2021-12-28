const oracledb = require('oracledb');
oracledb.autoCommit = true;

oracledb.initOracleClient({libDir: 'D:\\Downloads\\instantclient-basic-windows.x64-21.3.0.0.0\\instantclient_21_3'});

let connection;
	try {
		connection = oracledb.getConnection({
			user: "",
			password: "", 
			connectionString: "ebd1_high"
		});
	}
	catch(err) {
		console.log(`Erro na conexão com o banco de dados: ${err}`);
	}

module.exports = connection;

