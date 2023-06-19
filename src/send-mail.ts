import { send } from './services/email';
import 'dotenv/config';

send({
  email: 'sasosal816@byorby.com',
  subject: 'Test',
  html: '123',
});
