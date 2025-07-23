import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 20 },
    { duration: '30s', target: 30 },
    { duration: '30s', target: 40 },
    { duration: '30s', target: 50 },
    { duration: '30s', target: 60 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.1'], // tolerate up to 10% failure rate
    http_req_duration: ['p(95)<2000'], // 95% of requests < 2s
  },
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
    'status is 200': (r) => r.status === 200,
    'contains token': (r) => JSON.parse(r.body as string).token !== undefined,
  });

  sleep(1);
}
