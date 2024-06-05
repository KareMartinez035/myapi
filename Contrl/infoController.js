import mysql from "mysql2/promise"
import db from '../Confi/database.js'
import { createConnection } from "mysql2";

export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection=await mysql.createConnection(db)
            const[result]=await connection.execute("SELECT * FROM bob")
            console.log(result)
            res.json(result)
        }
        catch(error){
            res.status(500).json({'Error':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async store(req,res){
        let connection;
        try{
            const {title, descrip,imag,leftColor,rightColor}=req.body
            connection=await mysql.createConnection(db)
            const[inser]=await connection.execute("INSERT INTO bob (title, descrip,imag,leftColor,rightColor) VALUES(?, ?, ?, ?, ?)",(title, descrip,imag,leftColor,rightColor))
            console.log(inser)
            res.json(inser)
        }
        catch(error){
            res.status(500).json({'Error':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }

    }
}