import { CartItem, QuickOrderItem } from '../models/marketplace';

export function groupByCartItems(cartItems: Array<CartItem>, key: string): object {
  return cartItems.reduce((merged, item) => {
    const value = item.product[key];
    merged[value] = (merged[value] || []).concat(item);
    return merged;
  }, {});
}

export function toQuickOrderItems(cartItems: Array<CartItem>): Array<QuickOrderItem> {
  return cartItems.map((item) => {
    return {
      productId: item.product.id,
      sizeOptionIndex: item.sizeOptionIndex,
      colorId: item.product.color.id,
      count: item.count
    };
  });
}
