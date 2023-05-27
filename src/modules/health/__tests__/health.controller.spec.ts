import { HealthController } from '../health.controller';

describe('HealthController', () => {
  const healthController: HealthController = new HealthController();

  describe('/health', () => {
    it('should return status OK', async () => {
      const response = await healthController.getHealth();
      expect(response).toEqual({ status: 'OK' });
    });
  });
});
