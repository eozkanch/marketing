import ProductCard, { Product } from "../../product-card/ProductCard";

type Props = { products: Product[]; onAdd?: (p: Product) => void };

export default function PopulerProducts({ products, onAdd }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />)
      )}
    </div>
  );
}


