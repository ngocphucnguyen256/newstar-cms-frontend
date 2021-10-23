import React from 'react';

function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">Refreshing news for developers and designers</h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/news-01.jpg').default} width="352" height="198" alt="News 01" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="blog-post.html">The quick brown fox jumped over the lazy dog.</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-01.jpg').default} width="40" height="40" alt="Author 01" />
                  </a>
                  <div className="font-medium">
                    <a className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Anastasia Dan</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/news-02.jpg').default} width="352" height="198" alt="News 02" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out" href="#0">Desing</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="blog-post.html">The quick brown fox jumped over the lazy dog.</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-02.jpg').default} width="40" height="40" alt="Author 02" />
                  </a>
                  <div className="font-medium">
                    <a className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Markus Barker</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 12, 2020</span>
                  </div>
                </footer>
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/news-03.jpg').default} width="352" height="198" alt="News 03" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out" href="#0">Tutorials and articles</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="blog-post.html">The quick brown fox jumped over the lazy dog.</a>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-03.jpg').default} width="40" height="40" alt="Author 03" />
                  </a>
                  <div className="font-medium">
                    <a className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Lisa Crockett</a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Jan 9, 2020</span>
                  </div>
                </footer>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;
