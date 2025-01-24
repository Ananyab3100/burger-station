export default function OrderConfirmation() {
    return (
      <div className="min-h-screen bg-[#1E1E1E] text-[#E9E3DC] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#D1EF53] mb-4">Order Confirmed!</h1>
        <p className="text-lg text-[#B3A0CD] mb-8">
          Thank you for your order! Your food is being prepared and will be delivered shortly.
        </p>
        <a
          href="/"
          className="bg-[#D1EF53] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C7E847] transition"
        >
          Back to Home
        </a>
      </div>
    )
  }
  