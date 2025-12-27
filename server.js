import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const google = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ---------- middleware ----------
app.use(cors({ origin: true, credentials: true })); // change origin in prod
app.use(express.json());
app.use(cookieParser());

// ---------- serve the 3-D login page ----------
app.use(express.static('public'));

// ---------- log-in route (receives JWT from front-end) ----------
app.post('/auth/callback', async (req, res) => {
  const { credential } = req.body;          // Google JWT
  if (!credential) return res.status(400).json({ error: 'Missing credential' });

  try {
    const ticket = await google.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();    // name, email, picture, sub (google id)

    // create a simple session cookie (httpOnly, sameSite=strict)
    res.cookie('session', JSON.stringify(payload), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 7   // 7 days
    });
    return res.json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(401).json({ error: 'Bad token' });
  }
});

// ---------- who-am-i route ----------
app.get('/me', (req, res) => {
  if (!req.cookies.session) return res.status(401).json({ error: 'No session' });
  try {
    const user = JSON.parse(req.cookies.session);
    res.json(user);   // { name, email, picture, sub }
  } catch {
    res.status(401).json({ error: 'Bad session' });
  }
});

// ---------- log-out ----------
app.post('/logout', (_req, res) => {
  res.clearCookie('session');
  res.json({ ok: true });
});

// ---------- start ----------
app.listen(process.env.PORT || 4000, () =>
  console.log(`API on http://localhost:${process.env.PORT || 4000}`)
);