"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"


import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  price: string
  description?: string
}

interface MenuCategory {
  id: string
  name: string
  icon: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: "burgers",
    name: "BURGERS",
    icon: "/1.png" ,
    items: [
      {
        name: "Classic Burger",
        price: "199/-",
        description: "Fresh organic beef patty with lettuce and tomato",
      },
      {
        name: "Cheese Burger",
        price: "229/-",
        description: "Classic burger with organic cheddar cheese",
      },
      {
        name: "Veggie Burger",
        price: "179/-",
        description: "House-made vegetable patty with special sauce",
      },
    ],
  },
  {
    id: "wraps",
    name: "WRAPS AND SANDWICHES",
    icon: "/4.png",
    items: [
      {
        name: "Chicken Wrap",
        price: "159/-",
        description: "Grilled organic chicken with fresh vegetables",
      },
      {
        name: "Falafel Wrap",
        price: "149/-",
        description: "Homemade falafel with tahini sauce",
      },
    ],
  },
  {
    id: "signature",
    name: "SIGNATURE",
    icon: "/3.png",
    items: [
      {
        name: "Monster Burger",
        price: "299/-",
        description: "Double patty with special sauce and toppings",
      },
      {
        name: "Truffle Burger",
        price: "349/-",
        description: "Premium beef with truffle mayo and mushrooms",
      },
    ],
  },
  {
    id: "sides",
    name: "SIDES",
    icon: "/2.png",
    items: [
      {
        name: "French Fries",
        price: "99/-",
        description: "Hand-cut organic potatoes",
      },
      {
        name: "Onion Rings",
        price: "119/-",
        description: "Crispy battered onion rings",
      },
    ],
  },
  {
    id: "desserts",
    name: "DESSERTS",
    icon: "/5.png",
    items: [
      {
        name: "Chocolate Cake",
        price: "149/-",
        description: "Rich organic chocolate cake",
      },
      {
        name: "Ice Cream",
        price: "99/-",
        description: "Organic vanilla ice cream",
      },
    ],
  },
  {
    id: "beverages",
    name: "BEVERAGES",
    icon: "/6.png",
    items: [
      {
        name: "Hot Cappuccino",
        price: "49/-",
        description: "Organic coffee with steamed milk",
      },
      {
        name: "Hot Choco Mocha",
        price: "69/-",
        description: "Rich chocolate with coffee",
      },
      {
        name: "Lemon Mojito",
        price: "129/-",
        description: "Fresh lemon with mint",
      },
      {
        name: "Cold Drink / Slush of the Day",
        price: "59/-",
        description: "Ask server for today's special",
      },
      {
        name: "Hot Chocolate",
        price: "99/-",
        description: "Rich organic cocoa",
      },
      {
        name: "Peach Ice Tea",
        price: "MRP",
        description: "Refreshing peach flavored ice tea",
      },
    ],
  },
]

export default function MenuSlider() {
  const [selectedCategory, setSelectedCategory] = React.useState(menuData[0])
  const [sliderPosition, setSliderPosition] = React.useState(0)
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const categoryRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 200
      const newPosition =
        direction === "left"
          ? Math.max(0, sliderPosition - scrollAmount)
          : Math.min(sliderRef.current.scrollWidth - sliderRef.current.clientWidth, sliderPosition + scrollAmount)

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setSliderPosition(newPosition)
    }
  }

  // Calculate the indicator position based on the selected category's center
  const getIndicatorPosition = React.useCallback(() => {
    const selectedIndex = menuData.findIndex((category) => category.id === selectedCategory.id)
    const selectedElement = categoryRefs.current[selectedIndex]
    const containerElement = sliderRef.current

    if (selectedElement && containerElement) {
      const containerRect = containerElement.getBoundingClientRect()
      const elementRect = selectedElement.getBoundingClientRect()
      const containerWidth = containerRect.width
      const elementCenterX = elementRect.left + elementRect.width / 2 - containerRect.left

      return (elementCenterX / containerWidth) * 100
    }
    return 0
  }, [selectedCategory.id])

  // Ensure selected category is visible
  React.useEffect(() => {
    const selectedIndex = menuData.findIndex((category) => category.id === selectedCategory.id)
    const selectedElement = categoryRefs.current[selectedIndex]

    if (selectedElement && sliderRef.current) {
      const container = sliderRef.current
      const elementRect = selectedElement.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      if (elementRect.left < containerRect.left || elementRect.right > containerRect.right) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [selectedCategory.id])

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
    
          <Button className="bg-[#B3A0CD] text-[#1E1E1E] hover:bg-[#B3A0CD]/90 w-full sm:w-auto">
          <Link href="/order-online" className="hover:text-[#D1EF53]">
          ORDER ONLINE
          </Link>
          </Button>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Category Slider */}
        <div className="relative mb-16 w-full max-w-4xl">
          <div
            className="flex overflow-x-auto scrollbar-hide md:overflow-x-hidden gap-4 sm:gap-6 md:gap-8 py-6 px-2 justify-start md:justify-center"
            ref={sliderRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {menuData.map((category, index) => (
              <div
                key={category.id}

                ref={(el) => {
                  categoryRefs.current[index] = el; // Assign the element to the ref array
                }}
                
                className={cn(
                  "flex-shrink-0 cursor-pointer transition-all duration-300",
                  "flex flex-col items-center gap-3 w-20 sm:w-24 md:w-28",
                  "scroll-snap-align-center",
                )}
                onClick={() => setSelectedCategory(category)}
              >
                <div
                  className={cn(
                    "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full transition-transform duration-300 hover:scale-110",
                    "bg-[#E9E3DC] shadow-lg",
                    selectedCategory.id === category.id ? "ring-4 ring-[#D1EF53]" : "",
                  )}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-contain p-2"
                  />
                  {category.id === "signature" && (
                    <span className="absolute -top-2 -right-2 bg-[#D1EF53] text-[#1E1E1E] text-xs px-2 py-1 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <span className="text-center text-[11px] sm:text-xs md:text-sm font-semibold whitespace-normal min-h-[2rem] flex items-center">
                  {category.name}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#E9E3DC]/10 hover:bg-[#E9E3DC]/20 text-[#E9E3DC] hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#E9E3DC]/10 hover:bg-[#E9E3DC]/20 text-[#E9E3DC] hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Progress Line with Diamond Indicator */}
          <div className="relative w-full mt-8">
            {/* Center line */}
            <div className="absolute left-0 right-0 h-[1px] bg-[#D1EF53]" />

            {/* Centered diamond indicator */}
            <motion.div
              className="absolute left-0 top-0 w-3 h-3 bg-[#D1EF53] rotate-45"
              style={{
                top: "-6px", // Centers the diamond vertically (-height/2)
              }}
              animate={{
                left: `${getIndicatorPosition()}%`,
                x: "-50%", // Center the indicator horizontally
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="w-full max-w-3xl px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D1EF53] mb-6 md:mb-8 text-center">
                {selectedCategory.name}
              </h2>

              <div className="grid gap-3 sm:gap-4 md:gap-6">
                {selectedCategory.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#B3A0CD]/30 pb-4 hover:bg-[#E9E3DC]/5 p-3 sm:p-4 rounded-lg transition-colors"
                  >
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#E9E3DC]">{item.name}</h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm md:text-base text-[#B3A0CD] mt-1">{item.description}</p>
                      )}
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#D1EF53] sm:ml-4">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

