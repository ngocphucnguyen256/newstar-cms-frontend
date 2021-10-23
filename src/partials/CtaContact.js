import React from 'react';

function CtaContact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="bg-gray-800 py-10 px-8 md:py-16 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-3/4">
              <h3 className="h3 text-white mb-2">Just want to say hello?</h3>
              <p className="text-gray-400 text-lg">Drop us a line and we will get back to you shortly.</p>
            </div>

            {/* CTA button */}
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
              <a className="btn text-white bg-purple-600 hover:bg-purple-700" href="#0">Contact us</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CtaContact;
