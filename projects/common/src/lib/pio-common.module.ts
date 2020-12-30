import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { VimeModule } from '@vime/angular';

@NgModule({
  declarations: [CommonComponent],
  imports: [
    VimeModule
  ],
  exports: [CommonComponent]
})

export class PIOCommonModule {
  // passing environment into the library
  static forRoot(environment: any): ModuleWithProviders<PIOCommonModule> {
    return {
      ngModule: PIOCommonModule,
      providers: [
        {
          provide: 'environmentConfig',
          useValue: environment
        }
      ],
    };
  }
}
