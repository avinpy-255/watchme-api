import express, { type Request, type Response } from 'express';
import {auth} from 'express-openid-connect';


const app = express();
const PORT = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'c0CCCuPPLvOVeTH34UVBLatjkyEHgNkmekNdMfH8zLu9f68TjLZ9A48YYZdwQNAW',
  baseURL: 'http://localhost:3000',
  clientID: 'djVzXZ5xvm5Btk1ZDRHILUnu738kdM67',
  issuerBaseURL: 'https://dev-3grevt4a5kbvy56f.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});