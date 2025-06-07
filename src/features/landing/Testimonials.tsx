import Star from '@/components/Star';
import { MAP_LINK_REVIEWS } from '@/lib/constants';

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
            href={MAP_LINK_REVIEWS}
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
