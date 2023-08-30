import { Component, Input } from '@angular/core';

import { Item } from '../../../../../core/shared/item.model';
import { ItemPageFieldComponent } from '../item-page-field.component';

@Component({
  selector: 'ds-item-page-share-field',
  templateUrl: './item-page-share-field.component.html'
})
/**
 * This component renders an ORCID identifier as a name, icon, and link.
 * It expects 4 parameters: The item, a separator, the metadata keys and an i18n key
 */
export class ItemPageShareFieldComponent extends ItemPageFieldComponent {

  /**
   * The item to display metadata for
   */
  @Input() item: Item;
}