import { Pool } from 'pg';
import { db } from '../config';

const client = new Pool({
    user: db.user,
    host: db.host,
    database: db.name,
    password: db.password,
    port: parseInt(db.port),
});

export default function query(text: any, params: any) {
    return client.query(text, params).then(value => value);
}
