import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 5 },
  ],
};

export default function () {
  const res = http.get('http://localhost:8081/Venues');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
