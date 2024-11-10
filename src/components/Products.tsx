import Image from "next/image"

interface Product {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}

const products: Product[] = [
  {
    title: "Tires",
    description: "High-performance tires for durability, safety, and smooth driving experience.",
    image: "/tire.jpg",
    tech: ["Transportation", "Wheels", "Offroading", "Leather"],
    link: "https://maxxis.pk/"
  },
  {
    title: "Suspensions",
    description: "Suspension systems enhance comfort, control, and stability for smooth driving.",
    image: "/suspension.jpg",
    tech: ["Cars", "Trucks", "Sedans", "Offroad"],
    link: "https://autoprotoway.com/car-suspension-parts/"
  },
  {
    title: "Headlights",
    description: "Bright, durable headlights improve visibility and safety during nighttime driving.",
    image: "/headlight.jpg",
    tech: ["Car headlights", "Night Accessories", "Lights", "Sedans"],
    link: "https://www.amazon.com/OBNDVU-2007-2014-Headlight-D1S-Headlights/dp/B0BTBY6RTG"
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="obduct-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={product.link}
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}