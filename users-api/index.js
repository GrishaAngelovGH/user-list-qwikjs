import express from 'express'

const app = express()
const port = 3100

const males = ['Benjamin Parker', 'Ethan Thompson', 'Alexander Reed', 'Noah Anderson', 'Samuel Mitchell']
const females = ['Olivia Morgan', 'Sophia Campbell', 'Ava Roberts', 'Emma Reynolds', 'Isabella Foster']

app.get('/user', (req, res) => {
  const randomBoolean = Math.random() >= 0.5
  const randomIndex = Math.floor(Math.random() * 5)
  const id = Math.random().toString().slice(2)

  const newUser = {
    id,
    name: randomBoolean ? males[randomIndex] : females[randomIndex]
  }

  res.json(newUser)
})

app.listen(port, () => {
  console.log(`the server is listening on port ${port}`)
})