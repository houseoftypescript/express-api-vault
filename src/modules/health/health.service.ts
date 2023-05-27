class HealthService {
  async getHealth(): Promise<{ status: 'OK' }> {
    return { status: 'OK' };
  }
}

export const healthService = new HealthService();
