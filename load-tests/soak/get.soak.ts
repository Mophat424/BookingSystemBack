import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '5m',
};

export default function () {
  const res = http.get('http://localhost:8081/Venues');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
