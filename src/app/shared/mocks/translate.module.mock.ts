import { NgModule } from '@angular/core';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader,
      },
    }),
  ],
  exports: [TranslateModule],
})
export class TranslationMockModule {}
