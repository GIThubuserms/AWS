import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from aws Its me murtaza')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//scp -i ~/.ssh/ec2Learn.pem -r EC2/ ubuntu@ec2-18-233-99-10.compute-1.amazonaws.com:/home/ubuntu/node