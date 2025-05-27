import React from "react";
import { CartItemProps } from "../../molecules/cart-item/CartItem";
interface CartListProps {
    cartId: string;
    items: (CartItemProps & {
        id: string;
    })[];
    onQuantityChange: (id: string, newQuantity: number) => void;
    onRemove: (id: string) => void;
    onCheckout: (cartId: string) => void;
}
declare const CartList: React.FC<CartListProps>;
export default CartList;
