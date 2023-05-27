import { vaultClient } from '../../common/libs/vault';
import { Secret } from './secrets.types';

export class SecretsService {
  async setSecret(key: string, { value }: Secret): Promise<boolean> {
    return vaultClient.setSecret(key, value);
  }

  async getSecret(key: string): Promise<Secret> {
    return vaultClient.getSecret(key);
  }
}
