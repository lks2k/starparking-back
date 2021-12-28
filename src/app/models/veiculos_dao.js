class veiculos_dao{

    constructor (db){
        this._db = db
    }


    getVeiculos(id){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement;
            if(!id){
                statement = 
                `SELECT ticket_id, placa, valor, TO_CHAR(horario_entrada, 'dd/mm/yyyy hh:mm:ss'), TO_CHAR(horario_saida, 'dd/mm/yyyy hh:mm:ss')
                FROM STARPARKINGTICKET
                ORDER BY ticket_id DESC
                FETCH NEXT 500 ROWS ONLY`;

            } 
            else{
                statement = 
                `SELECT ticket_id, placa, valor, TO_CHAR(horario_entrada, 'dd/mm/yyyy hh:mm:ss'), TO_CHAR(horario_saida, 'dd/mm/yyyy hh:mm:ss')
                FROM STARPARKINGTICKET
                WHERE ticket_id = ${id}`;

            }
            const result = await connection.execute(statement);
            

            if(!result.rows) reject(null);
            resolve(result.rows);
        })
    }

    getTicket(){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = 
            `SELECT ticket_id, condicao FROM STARPARKINGTICKET
            ORDER BY ticket_id ASC`;
            const result = await connection.execute(statement);
            
            if(!result.rows) reject(null);
            resolve(result.rows);
        })
    }

    getGerenciamento(){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = 
            `SELECT ticket_id, TO_CHAR(horario_entrada, 'hh:mm:ss'), placa, TO_CHAR(horario_saida, 'hh:mm:ss'), TO_CHAR(sysdate, 'hh:mm:ss') FROM STARPARKINGTICKET
            ORDER BY ticket_id ASC`;
            const result = await connection.execute(statement);
            
            if(!result.rows) reject(null);
            resolve(result.rows);
        })
    }

    getSaida(ticket_id){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = 
            `select condicao from STARPARKINGTICKET where ticket_id = ${ticket_id}`;
            const result = await connection.execute(statement);
            
            const condicao = result.rows[0][0];
            if(!result.rows || condicao !== 1){
                reject(null);
                return;
            }
            resolve(result.rows);
        })
    }

    getQuantidade(){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = 
            `select count(ticket_id) from starparkingticket`;
            const result = await connection.execute(statement);
        
            if(!result.rows){
                reject(null);
                return;
            }
            resolve(result.rows);
        })
    }

    setPlaca(placa){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = `insert into STARPARKINGTICKET(ticket_id, placa, horario_entrada, valor, condicao) values(
                ticket_id.nextval, '${placa}', sysdate,'11', 0
            )`;
            const result = await connection.execute(statement);
            

            console.log(result);

            resolve(result.rows);
        })
    }

    
    setPagar(id){
        return new Promise(async (resolve, reject) => {
            const connection = await this._db;
            let statement = `UPDATE starparkingticket set condicao = 1, horario_saida = sysdate WHERE ticket_id = ${id}`;
            const result = await connection.execute(statement);
            

            console.log(result);

            resolve(result.rows);
        })
    }
}



module.exports = veiculos_dao;