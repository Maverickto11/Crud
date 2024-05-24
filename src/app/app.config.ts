import { ApplicationConfig } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideRouter(routes)]
};
