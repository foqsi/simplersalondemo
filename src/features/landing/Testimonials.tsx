import Star from '@/components/Star';

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-2 mb-10">Five STARS on Google</h2>

        <div className="space-y-6 text-center">
          <blockquote className="italic text-gray-700">Lauryn says, “Friendly, clean, and professional.”</blockquote>
          <blockquote className="italic text-gray-700">“Wonderful service!” - Mckenzie</blockquote>
          <blockquote className="italic text-gray-700">“Very friendly staff. Had a very good experience and great service. 😍 Will definitely come back!” - Jesetta</blockquote>
          <blockquote className="italic text-gray-700">Kaidence said, “Very clean , loved the environment. My nails are phenomenal. I Will definitely be back !&rdquo;</blockquote>
          <a
            href="https://www.google.com/maps/place/White+House+Visitor+Center/@38.895211,-77.0351191,523m/data=!3m1!1e3!4m12!1m2!2m1!1sWhite+House!3m8!1s0x89b7b7bce3d77213:0x3e49841d60cf0fec!8m2!3d38.895211!4d-77.0327373!9m1!1b1!15sCgtXaGl0ZSBIb3VzZVoNIgt3aGl0ZSBob3VzZZIBDnZpc2l0b3JfY2VudGVyqgEzEAEyHhABIhpp21Vs7NbkaiqJF7yT1wraCoFeBsDCPJFbEjIPEAIiC3doaXRlIGhvdXNl4AEA!16s%2Fm%2F03czk04?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-blue-500 text-sm underline mt-1 block"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
