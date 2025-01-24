import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import burgerImage from './images/hamburger-group2.png'
import frenchFriesImage from './images/french-fries1.jpg'
import chikenSandhichImage from './images/chicken-sandwhich.jpg'
import peopleImage from './images/people.jpg'
import { RetroButton } from "@/components/ui/retro-button";
import { MarqueeEffectDoubleExample } from "@/components/ui/marquee-animation"


export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#E9E3DC] relative">
      {/* Decorative Lines */}
      <div className="absolute top-40 right-4 w-20 h-1 bg-[#D1EF53] rotate-45" />
      <div className="absolute top-96 left-4 w-20 h-1 bg-[#D1EF53] -rotate-45" />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold">BURGER STATION</div>
        <nav className="flex flex-col sm:flex-row gap-6 items-center mt-4 sm:mt-0">
          <Link href="/about" className="hover:text-[#D1EF53]">
            ABOUT
          </Link>
          <Link href="/menu" className="hover:text-[#D1EF53]">
            MENU
          </Link>
          <Button className="bg-[#B3A0CD] text-[#1E1E1E] hover:bg-[#B3A0CD]/90 w-full sm:w-auto">
          <Link href="/order-online" className="hover:text-[#D1EF53]">
          ORDER ONLINE
          </Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-12 relative flex flex-col items-center justify-center text-center">
  <h1 className="text-4xl sm:text-6xl md:text-7xl leading-tight max-w-4xl">
    INDIA'S <br></br>
    <span>FAVORITE ORGANIC HAMBURGER JOINT</span>
  </h1>
  <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full">
    <Image
      src={burgerImage} // Replace this with your actual image path
      alt="Delicious burger"
      fill
      className="object-contain"
      priority
    />
  </div>
</section>



      {/* Feature Card */}
     
      <section className="container mx-auto px-4 mb-12">
  {/* Outer Section */}
  <div className="bg-[#D1EF53] text-[#1E1E1E] p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* First Column (Heading) */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl">THE BURGER ABOVE ALL BURGERS</h2>
    </div>
    
    {/* Second Column (Paragraph and Button) */}
    <div className="md:w-1/2 text-center md:text-left">
      <p className="mb-6 text-lg">
      Serving the ultimate burgers crafted with love, flavor, and a whole lot of sizzle!
      </p>
    
      <RetroButton>
      <Link href="/about" className="hover:text-[#B3A0CD]">
      About Us
      </Link>
       </RetroButton>
   
    </div>
  </div>
</section>


      {/* Menu Grid */}
      <section className="container mx-auto px-4 mb-12 grid sm:grid-cols-2 gap-6">
        <div className="bg-[#1E1E1E] rounded-lg p-4 border border-[#E9E3DC]/10">
          <div className="relative h-[250px] mb-4">
            <Image
              src= {frenchFriesImage}
              alt="Salt & Vinegar French Fries"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl mb-2">SALT & VINEGAR FRENCH FRIES</h3>
          <p className="text-[#B3A0CD]/70">ORDER ONLINE</p>
        </div>
        <div className="bg-[#1E1E1E] rounded-lg p-4 border border-[#E9E3DC]/10">
          <div className="relative h-[250px] mb-4">
            <Image
              src= {chikenSandhichImage}
              alt="Crispy Chicken Sandwich"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl mb-2">CRISPY CHICKEN SANDWICH</h3>
          <p className="text-[#B3A0CD]/70">ORDER ONLINE</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 mb-12 relative overflow-hidden">
        {/* <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#D1EF53]">"THE BEST BURGER I'VE EVER HAD"</h2> */}
        <MarqueeEffectDoubleExample/>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="relative h-[300px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={peopleImage}
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">ORDER ONLINE OR <br></br>COME VISIT US TODAY</h2>
          <Button className="bg-[#D1EF53] text-[#1E1E1E] hover:bg-[#D1EF53]/90">GET STARTED</Button>
        </div>
      </section>

      {/* Footer */}
      <div className=" bg-[#B3A0CD] text-[#1E1E1E] p-6 w-[95%] mx-auto rounded-lg">
  <footer className=" py-12">
    <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      
      <div>
        <h3 className="mb-4">BURGER STATION</h3>
        <p className="text-sm " style={{ fontFamily: '"Yusei Magic", serif' }}>
  Made with all Rights Reserved
</p>
      </div>
      <div>
        <h4 className="mb-4">MORE</h4>
        <ul className="space-y-2 text-sm " style={{ fontFamily: '"Yusei Magic", serif' }}>
          <li> <Link href="/about" className="hover:text-[#D1EF53]">
          About
          </Link></li>
          <li> <Link href="/menu" className="hover:text-[#D1EF53]">
          Menu
          </Link></li>
          <li>
          <Link href="/order-online" className="hover:text-[#D1EF53]">
          Order Online
          </Link>
            </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4">HOURS</h4>
        <ul className="space-y-2 text-sm " style={{ fontFamily: '"Yusei Magic", serif' }}>
          <li>Mon-Fri: 8am - 9pm</li>
          <li>Sat-Sun: 8am - 10pm</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4">JOIN OUR NEWSLETTER</h4>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#E9E3DC] border-none text-[#1E1E1E] placeholder:text-[#1E1E1E]/50"
          />
          <Button variant="outline" className="bg-[#1E1E1E] text-[#E9E3DC] hover:bg-[#1E1E1E]/90">
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  </footer>
</div>

<section className="py-6">

</section>

    </div>
  )
}

