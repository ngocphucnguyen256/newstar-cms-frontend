import React from 'react';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our passionate team</h2>
            <p className="text-xl text-gray-400">Đội ngũ</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-3 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../teamMembers/minHUNGANH.jpg').default} width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Ông NGUYỄN TẤN HÙNG ANH</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@</a>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../teamMembers/minKHANH.JPG').default} width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Ông LÊ XUAN KHÁNH</h4>
                <div className="text-gray-500 mb-1">CTO & Co-founder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@</a>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../teamMembers/minHUNG.jpg').default} width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Ông ĐẶNG KHÁNH HƯNG</h4>
                <div className="text-gray-500 mb-1">CSA (CHIEF SCIENTIFIC ADVISER)</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@</a>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../teamMembers/minANH.JPG').default} width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl font-medium mb-1">Bà LÊ NGÔ NGUYÊN ANH</h4>
                <div className="text-gray-500 mb-1">CHRO</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@</a>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../teamMembers/minTIEN.JPG').default} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-medium mb-1">Ông NGUYỄN VĂN TIẾN</h4>
                <div className="text-gray-500 mb-1">CLO</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@</a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;