import React from "react";
export interface CartItemProps {
    id: string;
    image: string;
    title: string;
    price: number;
    inStock: number;
    quantity: number;
    properties: Record<string, string>;
    maxQuantity?: number;
    onQuantityChange: (newQuantity: number) => void;
    onRemove: (id: string) => void;
}
declare const CartItem: React.FC<CartItemProps>;
export default CartItem;
