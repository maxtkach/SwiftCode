'use client'

import Navigation from '@/components/Navigation'
import AnimatedElement from '@/components/AnimatedElement'
import StatsCard from '@/components/StatsCard'
import TeamMember from '@/components/TeamMember'

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/team/john.jpg",
    bio: "10+ years of experience in software development and team management."
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "/team/sarah.jpg",
    bio: "Expert in React and React Native with a passion for creating beautiful user experiences."
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "/team/michael.jpg",
    bio: "Award-winning designer specializing in digital products and user interfaces."
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: "/team/emily.jpg",
    bio: "Certified PMP with expertise in agile methodologies and client communication."
  }
]

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Team Members" }
]

export default function About() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl text-text/70">
              We are a team of passionate developers and designers dedicated to creating exceptional digital experiences
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-text/70 mb-6">
                Founded in 2019, we started with a simple mission: to create digital solutions that make a difference. 
                What began as a small team of developers has grown into a full-service digital agency, serving clients 
                worldwide with innovative web and mobile solutions.
              </p>
              <p className="text-text/70">
                Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. 
                We believe in the power of technology to transform businesses and improve lives.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/about/office.jpg"
                  alt="Our Office"
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-text/70">
              The talented people behind our success
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember
                key={member.name}
                {...member}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <AnimatedElement delay={0.2} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-text/70">
              The principles that guide everything we do
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-accent text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-text/70">
                  We strive for excellence in every project, delivering the highest quality solutions to our clients.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-accent text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary mb-4">Collaboration</h3>
                <p className="text-text/70">
                  We believe in the power of teamwork and open communication to achieve exceptional results.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.5}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-accent text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
                <p className="text-text/70">
                  We constantly explore new technologies and approaches to stay ahead of the curve.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-12 text-white/80">
                We're always looking for talented individuals to join our growing team
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.4}>
              <a 
                href="/careers" 
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
} 