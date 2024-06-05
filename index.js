import express from 'express'
import bodyParser from "body-parser"
import cors from 'cors'
import routes from './Confi/routes.js'

const app= express()
const corsOption={
    origin:'*'//'localhost:3000'
}

//  Configuracion del middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),routes)

app.get('/',(req,res)=>res.send('Bienvenido a la api de Karen'))

const server=app.listen(process.env.PORT || 8000,()=>{
    console.log(`Servidor activo en puerto: ${server.address().port}`)
})

export default app