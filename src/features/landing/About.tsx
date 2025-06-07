import StoreFront from "@/components/StoreFront";
import { COMPANY_NAME } from "@/lib/constants";

export default function About() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">About Us</h2>
            <p className="text-gray-600 text-justify leading-relaxed">
              <b className="text-red-600">
                <span className="text-gray-500">{COMPANY_NAME}</span>
              </b>,
              <br /><br />
              <span className="text-red-600">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Vivamus
              in vulputate tortor. Cras dapibus, sapien at vehicula luctus, justo nulla
              sodales massa, sed gravida justo risus et erat.
              <br />
              <span className="text-red-600">Suspendisse</span> potenti. Integer feugiat, risus sed finibus rutrum, sapien
              arcu tristique sapien, in tempor leo nisl a odio.
              <br />
              <span className="text-red-600">Donec</span> convallis orci vel fermentum suscipit. Aliquam erat volutpat.
              Proin sit amet lacus ut arcu tincidunt porta.
              <br />
              <span className="text-red-600">Praesent</span> nec fringilla libero. Vestibulum ac dictum augue. Quisque
              blandit vitae augue nec ultrices. Nullam tincidunt metus
              a lacus elementum, at dapibus lorem tincidunt.
              <br />
              <span className="text-red-600">Thank you</span> for visiting our salon. We look forward to pampering you!
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <StoreFront className="w-3xl h-3xl rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
