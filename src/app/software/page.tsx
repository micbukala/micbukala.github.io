import Sidebar from '@/components/layout/Sidebar'

export default function SoftwarePage() {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20 bg-[#485365]" />

      <Sidebar />

      <main className="min-h-screen">
        <div className="w-full px-8 lg:pl-[300px] lg:pr-8 py-16 pt-24 lg:pt-16">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-20">
            <h1 className="text-4xl font-bold mb-8 text-slate-100">Software</h1>
            <p className="text-slate-300">Software projects and tools coming soon...</p>
          </div>
        </div>
      </main>
    </>
  )
}
