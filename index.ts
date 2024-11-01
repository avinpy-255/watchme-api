import express, { type Request, type Response } from 'express';
import {auth} from 'express-openid-connect';


const app = express();
const PORT = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.CLIENT_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
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