import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroButton } from "@/components/ui/retro-button";
import foundersImage from "../images/two-women.jpg";
import founder1 from "../images/founder1.jpg";
import founder2 from "../images/founder2.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#E9E3DC] relative">
      {/* Decorative Lines */}
      <div className="absolute top-40 right-4 w-20 h-1 bg-[#D1EF53] rotate-45" />
      <div className="absolute top-96 left-4 w-20 h-1 bg-[#D1EF53] -rotate-45" />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold">BURGER STATION</div>
        <nav className="flex flex-col sm:flex-row gap-6 items-center mt-4 sm:mt-0">
          <Link href="/" className="hover:text-[#D1EF53]">
            HOME
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
      <section className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl leading-tight mb-6">
          FROM FLATMATES TO FOUNDERS
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#B3A0CD]">
          The Organic Story Behind Burger Station
        </h2>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 flex flex-col lg:flex-row gap-12">
        <div className="relative lg:w-1/2 h-[300px] sm:h-[400px]">
          <Image
            src={foundersImage}
            alt="Ananya and Ayushi"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-center sm:text-lg mb-6" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Burger Station isn’t just about burgers; it’s about making a difference. Born from the shared vision of two flatmates with a deep passion for organic food and sustainability, we created a brand rooted in nature. We believe in serving more than just a meal; we offer wholesome, organic flavors that are good for you and the planet.
          </p>
          <p className="text-center sm:text-lg mb-6" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Ananya Bhagat and Ayushi Shetkar, both with a background in IT, came together to combine their love for nature’s bounty and their entrepreneurial spirit. Over countless evenings spent experimenting with fresh, organic ingredients, they came up with a concept to create burgers that celebrate the purity of natural produce and sustainable practices. Burger Station is their vision come to life—bringing the goodness of organic ingredients to the burger experience.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-12 text-center bg-[#D1EF53] text-[#1E1E1E] ">
        <h2 className="text-3xl sm:text-4xl mb-6">Our Organic Philosophy</h2>
        <p className="text-base sm:text-lg">
          At Burger Station, we believe in a farm-to-table philosophy that ensures every bite is a natural, eco-friendly experience. Our organic burgers are crafted with love, passion, and a commitment to sustainability. We use only the finest organic ingredients—grown without harmful chemicals or pesticides. Our commitment to sourcing locally and ethically supports farmers and producers who share our values.
        </p>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card for Ananya */}
        <div className="bg-[#1E1E1E] text-[#E9E3DC] p-6 rounded-lg text-center border border-[#E9E3DC]/10">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image src={founder2} alt="Ananya" className="object-cover w-full h-full" />
          </div>
          <h3 className="text-2xl mb-4" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Ananya Bhagat
          </h3>
          <p className="text-base sm:text-lg" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Ananya is the visionary behind Burger Station’s organic approach. With a deep-rooted belief in sustainability, Ananya ensures that every aspect of the brand reflects her commitment to promoting healthier eating habits through organic, pesticide-free ingredients.
          </p>
        </div>

        {/* Card for Ayushi */}
        <div className="bg-[#1E1E1E] text-[#E9E3DC] p-6 rounded-lg text-center border border-[#E9E3DC]/10">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image src={founder1} alt="Ayushi" className="object-cover w-full h-full" />
          </div>
          <h3 className="text-2xl mb-4" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Ayushi Shetkar
          </h3>
          <p className="text-base sm:text-lg" style={{ fontFamily: '"Yusei Magic", serif' }}>
            Ayushi brings her design expertise to Burger Station, ensuring that the brand stands out as a leader in the organic food movement. With a passion for creating visually appealing and sustainable packaging, Ayushi is dedicated to reducing the environmental impact.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl mb-6 text-[#B3A0CD]">Ready to Experience Organic Goodness?</h2>
        <RetroButton>
        <Link href="/about" className="hover:text-[#D1EF53]">
        Explore Our Organic Menu
      </Link>
          </RetroButton>
      </section>
    </div>
  );
}
