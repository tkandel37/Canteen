import { FoodCard } from 'components/foodCard'
import { ComplexNavbar } from 'components/foodCard/foodNav'
import ShoppingCart from 'components/foodCart'
import React, { useState } from 'react'

function Receipt() {
  const [cartItems, setCartItems] = useState([])
  const foods = [
    { "name": "Momos", "RS": "100" },
    { "name": "Dal Bhat", "RS": "150" },
    { "name": "Sel Roti", "RS": "50" },
    { "name": "Gundruk", "RS": "80" },
    { "name": "Yomari", "RS": "120" },
    { "name": "Thukpa", "RS": "130" },
    { "name": "Sekuwa", "RS": "200" },
    { "name": "Kwati", "RS": "180" },
    { "name": "Chatamari", "RS": "90" },
    { "name": "Samosa", "RS": "70" }
  ]


  const removeItem = (food) => {
    const updatedCart = cartItems.filter(item => item.name !== food.name);
    setCartItems(updatedCart);
  }


  const addToCart = (food) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.name === food.name);
    if (existingItem) {
      // If so, update the quantity
      setCartItems(cartItems.map(item =>
        item.name === food.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If not, add it to the cart
      setCartItems([...cartItems, { "id": cartItems.length + 1, "name": food.name, "cost": food.RS, "quantity": 1 }]);
    }
  }

  return (
    <div className='bg-white w-[100%] flex h-screen '>
      <div className='w-[70%]   h-screen'>
        <ComplexNavbar />
        <div className=''>
          <section className=' p-4 overflow-scroll no-scrollbar grid grid-cols-6 gap-3 ' >
            {foods.map((food, index) => (<FoodCard setShoppingcart={addToCart} key={index} food={food} />))}
          </section>
        </div>
      </div>
      <section className='flex-1 w-[30%]h-screen'>
        <ShoppingCart removeItems = {removeItem} selections={cartItems} />
      </section>
    </div>
  )
}

export default Receipt