import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { healthService } from './health.service';

@Route('/health')
@Tags('Health')
export class HealthController extends Controller {
  @SuccessResponse('Health Check', 'Health Check')
  @Get()
  async getHealth(): Promise<{ status: 'OK' }> {
    return healthService.getHealth();
  }
}
