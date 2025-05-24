import { Card } from "../../atoms/card/Card";
import { Button } from "../../atoms/button/Button";

type SubTotalCardProps = {
  itemCount: number;
  totalPrice: number;
  onCheckout: (cartId?: string) => void;
  cartId?: string; // Optional cartId for checkout
};

export default function SubTotalCard({
  itemCount,
  totalPrice,
  onCheckout,
  cartId = "",
}: SubTotalCardProps) {
  return (
    <Card className="w-full max-w-sm" rounded="md" shadow="lg">
      <div className="text-zb-desktop-subtitleLarge font-medium">
        Subtotaal ({itemCount} {itemCount === 1 ? "item" : "items"}):{" "}
        <span className="font-semibold">
          € {totalPrice.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <Button className="w-full mt-2" onClick={() => onCheckout(cartId)} size="small" disabled={itemCount === 0}>
        Checkout
      </Button>
    </Card>
  );
}
