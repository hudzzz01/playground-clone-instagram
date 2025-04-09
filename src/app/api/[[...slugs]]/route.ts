// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'
import AuthController from './controller/AuthController'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hello Next')
    .post('/login', ({ body,set }) => {
       
        const res = AuthController.login(body,set)
        return res
        
    })
    .get('/login', () => {
        return {
          message: 'Hello from login route!',
          success: true
        };
     })
    //  .post('/login', ({ body }) => body, {
    //     body: t.Object({
    //         name: t.String()
    //     })
    // })
      
    

export const GET = app.handle 
export const POST = app.handle 