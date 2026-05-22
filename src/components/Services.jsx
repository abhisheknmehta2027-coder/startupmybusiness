import React from 'react'
import { 
  ShieldCheck, Fingerprint, Award, BarChart3, 
  GitMerge, Rocket, Building, Users, 
  HeartHandshake, Leaf, Landmark, PiggyBank, ArrowRight 
} from 'lucide-react'

const servicesData = [
  { title: "Trademark", icon: ShieldCheck },
  { title: "Legal Entity Identifier (LEI)", icon: Fingerprint },
  { title: "ISO Registration", icon: Award },
  { title: "ISIN & Dematerialisation", icon: BarChart3 },
  { title: "Merger & Amalgamation", icon: GitMerge },
  { title: "Startup Registration", icon: Rocket },
  { title: "Company Registration", icon: Building },
  { title: "LLP Registration", icon: Users },
  { title: "Section 8 Registration", icon: HeartHandshake },
  { title: "CSR Advisory", icon: Leaf },
  { title: "Loan Advisory", icon: Landmark },
  { title: "Subsidy Advisory", icon: PiggyBank },
]

const Services = () => {
  return (
    // ID add kiya taaki scroll ho sake
    <div id="core-expertise" className="bg-white py-24 sm:py-32 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          {/* Changed to Core Expertise */}
          <p className="text-[#2563EB] font-bold text-sm tracking-widest uppercase mb-3">
            Core Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
            Elite Corporate <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0B1020] to-[#2563EB]">Solutions</span>
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            From strategic incorporation to complex mergers, we provide comprehensive legal and financial structuring for visionary enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-full min-h-50"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#E2E8F0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#2563EB]/20 transition-transform duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] leading-tight mb-3">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 mt-4">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services