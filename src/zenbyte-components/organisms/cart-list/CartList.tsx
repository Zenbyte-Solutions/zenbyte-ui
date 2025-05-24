import React from "react";
import CartItem, { CartItemProps } from "../../molecules/cart-item/CartItem";
import PriceTag from "../../atoms/pricetag/pricetag";
import SubTotalCard from "../../molecules/sub-total-card/SubTotalCard";

interface CartListProps {
  cartId: string;
  items: (CartItemProps & { id: string })[];
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
  onCheckout: (cartId: string) => void;
}

const CartList: React.FC<CartListProps> = ({
  cartId,
  items,
  onQuantityChange,
  onRemove,
  onCheckout,
}) => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-4 gap-8 md:gap-6">
      <div className="mx-auto col-span-4 md:col-span-1 order-1 md:order-2 md:sticky md:top-4">
        <SubTotalCard
          itemCount={totalItems}
          totalPrice={subtotal}
          onCheckout={() => {
            onCheckout(cartId);
          }}
        />
      </div>
      <div className="col-span-4 md:col-span-3 flex flex-col gap-2 order-2 md:order-1">
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onQuantityChange={(newQty) =>
              onQuantityChange(item.id, Number(newQty))
            }
            onRemove={() => onRemove(item.id)}
          />
        ))}

        <div className="hidden md:flex justify-end text-right">
          <div className="text-zb-desktop-label text-gray-500 mr-1 self-center">
            Subtotaal ({totalItems} {totalItems === 1 ? "item" : "items"}):
          </div>
          <PriceTag price={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CartList;
