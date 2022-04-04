import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import query from '../index';
import { verify } from '../../utils/password';
import { AuthFailureError } from '../../core/api-error';

const queries = {
    authenticate: 'SELECT id, password FROM cafeteria.user WHERE username = $1',
    auth: 'INSERT INTO cafeteria.auth (id, userId, token, createdOn) VALUES($1, $2, $3, $4) RETURNING userId, token',
    verify: 'SELECT * FROM cafeteria.auth WHERE userId = $1 AND token = $2 AND createdon > $3',
    logout: 'DELETE FROM cafeteria.auth WHERE userId = $1 AND token = $2',
};

export default class AuthRepo {
    public static async authenticate(data: any): Promise<any[]> {
        return query(queries.authenticate, [data.username]).then(res => {
            const user: any = res.rows[0];
            return verify(data.password, user?.password).then(verified => {
                if (verified) {
                    return query(queries.auth, [uuid(), user.id, uuid(), new Date().toISOString()]).then(res => res.rows[0]);
                }
                throw new AuthFailureError();
            });
        });
    }

    public static verify(data: any): Promise<any[] | boolean |{ authenticated: boolean; }> {
        return query(queries.verify, [data.userId, data.token, dayjs().subtract(1, 'hour').toISOString()]).then(res => {
            const isAuthenticated = !!res.rows[0];
            if (!isAuthenticated) {
                query(queries.logout, [data.userId, data.token]);
            }
            return { authenticated: isAuthenticated };
        });
    }

    public static logout(data: any): Promise<any[]> {
        return query(queries.logout, [data.userId, data.token]).then(res => res.rows[0]);
    }
}
