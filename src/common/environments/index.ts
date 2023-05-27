import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const environments = dotenv.config();
dotenvExpand.expand(environments);

export const JWT_SECRET: string = process.env.JWT_SECRET ?? 'secret';
export const SALT_OR_ROUNDS: string = process.env.SALT_OR_ROUNDS ?? '10';

export const VAULT_ENDPOINT: string = process.env.VAULT_ENDPOINT ?? 'secret';
export const VAULT_TOKEN: string = process.env.VAULT_TOKEN ?? '10';
