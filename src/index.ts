import express, {Request, Response} from "express"


const app = express()
const cors = require('cors')
const  bodyParser  =  require ( 'body-parser' )
// const port = 3002

 app.get('/', (req: Request, res: Response) => {

 let helloM = 'Hello INCUBATOR!'
  res.send(helloM)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const corsMiddleware = cors();
app.use(corsMiddleware)
const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 3002

let videos = [
  {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
  {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
  {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
  {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'}
]

app.get('/', (req: Request, res: Response ) => {
  debugger;
  res.send("Hello IT-In=NCUBATOR")
})
app.get('/videos', (req: Request, res: Response) => {})
app.post('/videos', (req: Request, res: Response) => {})
app.put('/videos/:videoId', (req: Request, res: Response) => {})
app.post('/videos/:videoId', (req: Request, res: Response) => {})
app.get('/videos/:videoId', (req: Request, res: Response) => {})
app.delete('/videos/:videoId', (req: Request, res: Response) => {})



// start app
app.listen(port, () =>{
  console.log('Example app listening on port: ${port}')
})