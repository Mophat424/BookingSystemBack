import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, 
  duration: '10s', 
};

export default function () {
  const url = 'http://localhost:8081/auth/register';

  const payload = JSON.stringify({
    first_name: 'Spike',
    last_name: 'Tester',
    email: `spikeuser_${__VU}_${Date.now()}@example.com`,
    password: 'spike123',
    contact_phone: '9876543210',
    address: '456 Spike Street',
    role: 'user',
    testMode: true, 
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

