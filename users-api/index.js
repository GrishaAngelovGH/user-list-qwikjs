import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 3100

const males = ['Benjamin Parker', 'Ethan Thompson', 'Alexander Reed', 'Noah Anderson', 'Samuel Mitchell']
const females = ['Olivia Morgan', 'Sophia Campbell', 'Ava Roberts', 'Emma Reynolds', 'Isabella Foster']

app.get('/users', (req, res) => {
  const users = []

  for (let i = 0; i < 5; i++) {
    const randomBoolean = Math.random() >= 0.5
    const randomIndex = Math.floor(Math.random() * 5)
    const id = Math.random().toString().slice(2)

    const user = {
      id,
      name: randomBoolean ? males[randomIndex] : females[randomIndex]
    }

    users.push(user)
  }

  res.json(users)
})

app.listen(port, () => {
  console.log(`the server is listening on port ${port}`)
})