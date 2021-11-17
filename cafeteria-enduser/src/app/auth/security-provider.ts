import { OnDestroy, Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { ClientServiceMock } from '../shared/client-service.mock';

@Injectable({
  providedIn: 'root',
})
export class SecurityProvider implements OnDestroy {

  public authChange: Subject<boolean>;

  private context: any;

  constructor(private clientService: ClientServiceMock) {
    this.authChange = new Subject();
  }

  ngOnDestroy(): void {
    // handle session expiration
  }

  async login(username: string, password: string) {
    if (this.context) {
      this.authChange.next(true);
    }
    return this.clientService.login(username, password).pipe(
      tap(response => {
        this.context = response;
        this.authChange.next(true);
      }),
    ).toPromise();
  }

  async logout() {
    this.context = null;
    return this.clientService.logout().toPromise().then(() => this.authChange.next(true));
  }

  isAuthenticated(): boolean {
    return this.context;
  }

  getContext() {
    return this.context;
  }
}
