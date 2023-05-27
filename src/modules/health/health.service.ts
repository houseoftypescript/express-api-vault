import { HealthResponse } from './health.types';

export class HealthService {
  getHealth(): HealthResponse {
    return { status: 'OK' };
  }
}
