import { CacheInterceptor } from './http/cache.interceptor';
import { HttpCacheService } from './http/cache.service';
import { ApiInterceptor } from './http/api.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    HttpCacheService,
    ApiInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    HttpService,
    {
      provide: HttpClient,
      useClass: HttpService,
    },
  ],
})

export class CoreModule {}
