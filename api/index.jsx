import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono! </h1>
      </body>
    </html>
  )
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/view', (c) => {
  c.html(<View />)
})

app.get('/user/:id', (c) => {
  const quer = c.req.query('page')
  const id = c.req.param('id')
  return c.json({ id: id, page: quer })
})

export default handle(app)

