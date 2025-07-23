import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // ramp-up to 10 VUs in 30s
    { duration: '4m', target: 10 },  // soak at 10 VUs for 4 minutes
    { duration: '30s', target: 0 },  // ramp-down to 0 VUs in 30s
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests should be < 2s
    http_req_failed: ['rate<0.1'],     // < 10% errors
  },
};

export default function () {
  const url = 'http://localhost:8081/auth/login';
  const payload = JSON.stringify({
    email: 'test@example.com',
    password: 'password123',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
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
