import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export async function hash(password: string) {
    const salt = randomBytes(16).toString('hex');
    const key = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${key.toString('hex')}:${salt}`;
}

export async function verify(password: string, storedPassword: string) {
    const [key, salt] = storedPassword.split(':');
    const keyBuffer = Buffer.from(key, 'hex');
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    return timingSafeEqual(keyBuffer, derivedKey);
}
