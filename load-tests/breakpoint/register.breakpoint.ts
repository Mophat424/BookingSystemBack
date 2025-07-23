import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Ramp-up to 10 users
    { duration: '30s', target: 20 },  // Then to 20 users
    { duration: '30s', target: 30 },  // Then to 30 users
    { duration: '30s', target: 40 },  // Up to 40 users
    { duration: '30s', target: 50 },  // Peak at 50
    { duration: '30s', target: 0 },   // Ramp-down to 0
  ],
};

export default function () {
  const url = 'http://localhost:8081/auth/register';

  const payload = JSON.stringify({
    first_name: 'Break',
    last_name: 'Point',
    email: `breakpoint_${__VU}_${Date.now()}@example.com`,
    password: 'break123',
    contact_phone: '987654321',
    address: '999 Load Lane',
    role: 'user',
    testMode: true, // Optional: Prevent real email sending
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const res = http.post(url, payload, { headers });

  check(res, {
    'status is 201': (r) => r.status === 201,
    'contains token': (r) => {
      try {
        const body = JSON.parse(r.body as string);
        return typeof body.token === 'string';
      } catch {
        return false;
      }
    },
  });

  sleep(1);
}
