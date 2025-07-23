import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '20s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 150 },
  ],
};

export default function () {
  const res = http.get('http://localhost:8081/Venues');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
