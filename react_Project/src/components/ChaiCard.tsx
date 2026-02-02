interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}
export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h3>{isSpecial ? '😂😂😂' : '🥹🥹🥹'}</h3>
    </article>
  );
}
