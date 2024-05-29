import React from 'react';
const Gallery: React.FC = () => {
    return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="gallery">
          <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
            <div className="flex-1">
              <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              <div className='text-center sm:text-left'>
                <span className="text-white">Gallery</span>
                </div>
              </h2>
              <p className="text-[#8892b0] mb-8">
                Embark on a visual journey through my gallery. Each image captures a unique moment, a story waiting to be told, a piece of beauty longing to be shared.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4">

                {/* Repeat this structure for each image */}
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      maxWidth: "calc(100% )", // Adjust the value as needed
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>

                {/* End of repeated structure */}
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                  <img
                    alt="Gallery 1"
                    className="rounded-lg object-cover w-full h-full"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      Project Title
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      This is a description of the project, showcasing the work that was done.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
    );

}
export default Gallery;