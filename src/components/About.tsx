import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <Image
              src="/main.jpg"
              alt="Profile"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 mb-4">
            Welcome to AutoPartsHub, your one-stop shop for high-quality automobile parts and accessories. We offer a wide range of parts for cars, trucks, and motorcycles,
            from engines and brakes to suspension systems and electrical components.
            </p>
            <p className="text-gray-600">
            Whether you're a professional mechanic or a DIY enthusiast, our carefully selected inventory ensures that you’ll find the right part for your vehicle at competitive prices. With fast shipping and customer-focused service, we’re committed to helping you get back on the road quickly and safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}