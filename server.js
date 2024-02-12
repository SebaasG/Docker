import express from 'express'
import {v4} from 'uuid'

const app = express()


app.get('/',(req ,res) =>{

res.json({
    id: v4()
})
})

app.listen(3000)
console.log('server listening in the port 3000')