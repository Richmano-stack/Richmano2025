export const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
