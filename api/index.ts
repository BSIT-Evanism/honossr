import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})


app.get('/user/:id', (c) => {
  const quer = c.req.query('page')
  const id = c.req.param('id')
  return c.json({ id: id, page: quer })
})

export default handle(app)

