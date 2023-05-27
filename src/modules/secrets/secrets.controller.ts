import { Body, Controller, Get, Path, Post, Route, Tags } from 'tsoa';
import { SecretsService } from './secrets.service';
import { Secret } from './secrets.types';

@Route('/secrets')
@Tags('Secrets')
export class SecretsController extends Controller {
  private secretsService: SecretsService;

  constructor() {
    super();
    this.secretsService = new SecretsService();
  }

  @Get('{key}')
  async getSecret(@Path() key: string): Promise<Secret> {
    return this.secretsService.getSecret(key);
  }

  @Post('{key}')
  async setSecret(@Path() key: string, @Body() { value }: Secret): Promise<boolean> {
    return this.secretsService.setSecret(key, { value });
  }
}
