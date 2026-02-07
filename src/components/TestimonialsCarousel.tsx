import type { testimonials as TestimonialsType } from '../lib/data'

type Testimonial = (typeof TestimonialsType)[number]

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="w-full overflow-hidden">
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="testimonial-item">
              <blockquote className="text-center">
                {/* Quote mark */}
                <span
                  className="block font-serif text-4xl md:text-5xl text-accent/20 leading-none select-none mb-2"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p
                  className="text-sm md:text-base leading-relaxed text-foreground-medium mb-4 italic"
                  style={{ fontFamily: 'var(--font-serif)', lineHeight: '1.7' }}
                >
                  {testimonial.quote}
                </p>

                {/* Attribution */}
                <footer>
                  <cite className="not-italic">
                    <span className="block text-xs md:text-sm font-medium text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-foreground-light mt-0.5">
                      {testimonial.position}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
