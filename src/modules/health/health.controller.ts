import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { HealthService } from './health.service';
import { HealthResponse } from './health.types';

@Route('/health')
@Tags('Health')
export class HealthController extends Controller {
  private healthService: HealthService;

  constructor() {
    super();
    this.healthService = new HealthService();
  }

  @SuccessResponse('Health Check', 'Health Check')
  @Get()
  getHealth(): HealthResponse {
    return this.healthService.getHealth();
  }
}
