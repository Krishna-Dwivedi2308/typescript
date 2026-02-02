import React, { useState } from 'react';

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setname] = useState<string>('masala');
  const [Cups, setCups] = useState<number>(1);
  function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    onSubmit({ name, cups: Cups });
  }
  return (
    <form onSubmit={handlesubmit}>
      <label>Chai Name</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setname(e.target.value)}
      />
      <label>Cups</label>
      <input
        type="number"
        value={Cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
