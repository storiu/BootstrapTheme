import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule} from 'ngx-google-places-autocomplete';
import { NgxMaskModule } from 'ngx-mask';

import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { TextInputComponent } from './text-input/text-input.component';
import { ImageCardSelectorComponent } from './image-card-selector/image-card-selector.component';
import { AddressAutoCompleteInputComponent } from './address-auto-complete-input/address-auto-complete-input.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    ImageCardSelectorComponent,
    AddressAutoCompleteInputComponent,
    PhoneNumberInputComponent,
    SelectComponent,
    TextareaComponent,
    SearchInputComponent,
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    NgxMaskModule.forRoot(),
    CommonUiKitModule
  ],
  exports: [
    TextInputComponent,
    ImageCardSelectorComponent,
    SelectComponent,
    PhoneNumberInputComponent,
    TextareaComponent,
    AddressAutoCompleteInputComponent,
    SearchInputComponent,
    NumberInputComponent
  ]
})
export class InputModule { }
