import { OnDestroy, Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

import { ClientService } from '../shared/client-service';

@Injectable({
  providedIn: 'root',
})
export class SecurityProvider implements OnDestroy {

  public authChange: Subject<boolean>;

  private context: any = {};

  constructor(private clientService: ClientService) {
    this.authChange = new Subject();
  }

  ngOnDestroy(): void {
    // handle session expiration
  }

  async login(username: string, password: string) {
    if (this.context.id) {
      this.authChange.next(true);
    }
    return this.clientService.login(username, password).pipe(
      tap(response => {
        this.context.token = response.data.token;
        this.context.id = response.data.userid;
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        this.clientService.read(`users/${this.context.id}`).subscribe(resp => {
          this.context.roles = resp.data.roles;
        });
        this.authChange.next(true);
      }),
    ).toPromise();
  }

  async logout() {
    return this.clientService.logout(this.context?.id, this.context?.token).toPromise()
        .then(() => {
          this.context = {};
          this.authChange.next(false);
          localStorage.removeItem('currentUser');
        });
  }

  async isAuthenticated() {
    return this.clientService.verify(this.context?.id, this.context?.token).pipe(tap(res => {
        if (!res.data.authenticated) {
          this.context = {};
          this.authChange.next(false);
          localStorage.removeItem('currentUser');
        }
      })).toPromise();
  }

  getContext() {
    return this.context;
  }
}
