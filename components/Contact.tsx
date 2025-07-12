'use client'

const socials = [
  { label: 'Behance', url: 'https://behance.net/ramanikantjha' },
  { label: 'Instagram', url: 'https://instagram.com/ramanikantjha' },
  { label: 'Twitter', url: 'https://twitter.com/ramanikantjha' },
  { label: 'Dribbble', url: 'https://dribbble.com/ramanikantjha' },
]

const Contact = () => {
  return (
    <section id="contact" className="section-contact section-padding bg-offwhite">
      <div className="container-custom">
        <div className="w-full max-w-2xl flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="text-mint font-accent italic">Talk</span>
          </h2>
          <p className="text-lg text-[#2d2d2d] mb-8 leading-relaxed">
            Interested in working together or want to say hello? Connect with me on any of the platforms below or send an email. I'm currently available for freelance projects worldwide.
          </p>
          <a href="mailto:ramanikant@example.com" className="btn-primary mb-4">
            Email Me
          </a>
          <div className="flex flex-wrap gap-4 mt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white rounded-full font-bold text-lg shadow hover:bg-mint hover:text-white transition-all border border-mint"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 