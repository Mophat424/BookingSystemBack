import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2s', target: 0 },    
    { duration: '5s', target: 50 },   
    { duration: '5s', target: 50 },   
    { duration: '5s', target: 0 },    
  ],
};

export default function () {
  const url = 'http://localhost:8081/auth/login';
  const payload = JSON.stringify({
    email: 'gregory@gmail.com',
    password: 'greg123!',
  });

  const headers = { 'Content-Type': 'application/json' };

  const res = http.post(url, payload, { headers });

  check(res, {
    'login status is 200': (r) => r.status === 200,
    'contains token': (r) => {
      try {
        const body = JSON.parse(r.body as string);
        return !!body.token;
      } catch {
        return false;
      }
    },
  });

  sleep(1);
}
