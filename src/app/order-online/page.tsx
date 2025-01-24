"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Plus, Minus } from "lucide-react"
// Import the router from the App Router
import { useRouter } from "next/navigation";



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"


interface MenuItem {
  id: string
  name: string
  price: number
  category: string
}

const menuItems: MenuItem[] = [
  { id: "1", name: "Classic Burger", price: 199, category: "Burgers" },
  { id: "2", name: "Cheese Burger", price: 229, category: "Burgers" },
  { id: "3", name: "Veggie Burger", price: 179, category: "Burgers" },
  { id: "4", name: "Chicken Wrap", price: 159, category: "Wraps" },
  { id: "5", name: "Falafel Wrap", price: 149, category: "Wraps" },
  { id: "6", name: "Monster Burger", price: 299, category: "Signature" },
  { id: "7", name: "Truffle Burger", price: 349, category: "Signature" },
  { id: "8", name: "French Fries", price: 99, category: "Sides" },
  { id: "9", name: "Onion Rings", price: 119, category: "Sides" },
  { id: "10", name: "Chocolate Cake", price: 149, category: "Desserts" },
  { id: "11", name: "Ice Cream", price: 99, category: "Desserts" },
  { id: "12", name: "Hot Cappuccino", price: 49, category: "Beverages" },
  { id: "13", name: "Lemon Mojito", price: 129, category: "Beverages" },
]

export default function OrderOnlinePage() {
  const [cart, setCart] = React.useState<{ item: MenuItem; quantity: number }[]>([])
  const [activeCategory, setActiveCategory] = React.useState("Burgers")
  const router = useRouter();

  const placeOrder = () => {
    // Clear the cart (optional)
    setCart([])
    // Redirect to the confirmation page
    router.push("/order-confirmation")
  }

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
        )
      }
      return prevCart.filter((cartItem) => cartItem.item.id !== itemId)
    })
  }

  const totalAmount = cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0)

  const categories = Array.from(new Set(menuItems.map((item) => item.category)))

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#E9E3DC]">
        
           {/* Header */}
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold">BURGER STATION</div>
        <nav className="flex flex-col sm:flex-row gap-6 items-center mt-4 sm:mt-0">
        <Link href="/" className="hover:text-[#D1EF53]">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#D1EF53]">
            ABOUT
          </Link>
          <Link href="/menu" className="hover:text-[#D1EF53]">
            MENU
          </Link>
    
    
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#D1EF53] mb-8 text-center">Order Online</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Section */}
          <div className="w-full lg:w-2/3">
            <div className="mb-6 flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category ? "bg-[#D1EF53] text-black" : "bg-[#2A2A2A]"
                  } font-medium px-4 py-2 rounded-lg`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter((item) => item.category === activeCategory)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col bg-[#2A2A2A] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-[#D1EF53]">{item.name}</h3>
                        <p className="text-[#B3A0CD] text-lg">₹{item.price}</p>
                      </div>
                      <Button onClick={() => addToCart(item)} className="mt-auto w-full bg-[#D1EF53] text-black">
                        <Plus className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </motion.div>
                  ))}
              </div>
            </ScrollArea>
          </div>

          {/* Cart Section */}
          <div className="w-full lg:w-1/3 bg-[#2A2A2A] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <ScrollArea className="h-[calc(100vh-500px)]">
              {cart.map((cartItem) => (
                <div key={cartItem.item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{cartItem.item.name}</h3>
                    <p className="text-[#B3A0CD]">
                      ₹{cartItem.item.price} x {cartItem.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(cartItem.item.id)}
                      className="mr-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{cartItem.quantity}</span>
                    <Button variant="outline" size="sm" onClick={() => addToCart(cartItem.item)} className="ml-2">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <Separator className="my-4" />
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold text-[#D1EF53]">₹{totalAmount}</span>
            </div>
             <Button onClick={placeOrder} className="w-full mt-6 cursor-pointer" disabled={cart.length === 0}>
        <ShoppingCart className="mr-2 h-4 w-4" /> Place Order
      </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
