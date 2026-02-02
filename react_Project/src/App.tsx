import './App.css';
import Card from './components/Card';
// import ChaiList from './components/ChaiList'
// import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter';
import OrderForm from './components/OrderForm';
// import type { Chai } from './types'
// const menu: Chai[] = [
//   { id: 1, name: 'Masala', price: 25 },
//   { id: 2, name: 'Ginger', price: 30 },
//   { id: 3, name: 'Lemon', price: 40 }
// ]
function App() {
  return (
    <>
      <h1>Krishna devs</h1>
      <div>
        <Counter />
      </div>
      {/* <div>
        <ChaiList
          items={menu} />
      </div> */}
      <OrderForm
        onSubmit={(order) => {
          console.log('Placed', order.name, order.cups);
        }}
      />
      <div>
        <Card
          title="Chai aur TS"
          footer={<button>Order Now</button>} //this is how a react node is passed
          // footer='hitesh' //this would also work but for better practice , the upper way is best
        />
      </div>
    </>
  );
}

export default App;
