import Image from 'next/image'

export default function Home() { 
  return (
    <div className="min-h-screen text-slate-100 flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/background/tatry4.jpg')`, // ← TUTAJ ŚCIEŻKA DO TŁA
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Content */}
      <div className="text-center relative z-10">
        <div className="w-40 h-40 mx-auto rounded-full bg-slate-700 mb-8 flex items-center justify-center overflow-hidden ring-4 ring-slate-600/50">
          <Image 
            src="/images/profile/MB1.jpeg" // ← TUTAJ ŚCIEŻKA DO AVATARA
            alt="Michał Bukała" 
            width={160}
            height={160}
            className="w-full h-full object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Michał Bukała</h1>
        <div className="text-lg space-y-1 mb-8">
          <p>Geologist by education</p>
          <p>Scientist by profession</p>
          <p>Developer by interest</p>
        </div>
        <nav className="space-y-4">
          <a href="/projects" className="block text-lg hover:text-teal-400 transition-colors">Projects</a>
          <a href="/publications" className="block text-lg hover:text-teal-400 transition-colors">Papers</a>
          <a href="/collaboration" className="block text-lg hover:text-teal-400 transition-colors">Collab</a>
          <a href="/about" className="block text-lg hover:text-teal-400 transition-colors">About</a>
        </nav>
      </div>
    </div>
  ); 
}
