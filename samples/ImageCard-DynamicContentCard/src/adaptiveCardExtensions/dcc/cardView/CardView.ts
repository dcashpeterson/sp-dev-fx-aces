import {
  IImageCardParameters,
  BaseImageCardView,
  ICardButton,
  IExternalLinkCardAction,
  IQuickViewCardAction
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'DccAdaptiveCardExtensionStrings';
import {
  IDccAdaptiveCardExtensionProps,
  IDccAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID
} from '../DccAdaptiveCardExtension';

export class CardView extends BaseImageCardView<
  IDccAdaptiveCardExtensionProps,
  IDccAdaptiveCardExtensionState
> {
  public get data(): IImageCardParameters {
    return {
      primaryText: strings.PrimaryText,
      imageUrl: 'data:image/png;base64,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',
      title: this.properties.title
    };
  }

  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }


  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
