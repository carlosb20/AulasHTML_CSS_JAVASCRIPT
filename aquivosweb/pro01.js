

class BancoDados{

    conexao(){

        const sqlite3 = require('sqlite3').verbose();

        // Crear (o abrir) una base de datos
        let db = new sqlite3.Database('banco.db'); // Usa ':memory:' para crear una base de datos en memoria
        return db
    }
    criartabela(){

        let tabe = this.conexao()
        tabe.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT , edad INTEGER , cpf TEXT UNIQUE)", (err) => {
            if (err) {
                console.error(err.message,'aqui');
            } else {
                console.log("Tabla creada exitosamente.");
            }
        });
    }
    coletadados(){
        
        this.criartabela()

        let stmt = cole.prepare("INSERT INTO usuarios (nombre, edad,cpf) VALUES (?, ?,?)");

        stmt.run('Ana', 28 ,'0000000000');
        stmt.run('Carlos ', 34 ,'000000');

        stmt.finalize(); // Cierra la preparación
    }

    ver(){

        let verdados = this.conexao()
        console.log(verdados)

        verdados.all("SELECT * FROM usuarios", (err, rows) => {
            if (err) {
                throw err,'ok';
            }
            rows.forEach((row) => {
                console.log(row.id, row.nombre, row.edad,row.cpf);
            });
        });
    }
}


const val = new BancoDados()


val.coletadados()
val.ver()
