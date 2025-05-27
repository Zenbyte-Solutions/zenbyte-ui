type SubTotalCardProps = {
    itemCount: number;
    totalPrice: number;
    onCheckout: (cartId?: string) => void;
    cartId?: string;
};
export default function SubTotalCard({ itemCount, totalPrice, onCheckout, cartId, }: SubTotalCardProps): import("react/jsx-runtime").JSX.Element;
export {};
