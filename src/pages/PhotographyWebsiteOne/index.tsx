import React from "react";

import { Img } from "components";

const PhotographyWebsiteOnePage: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_300 flex md:px-[20px] px-[78px] relative w-[100%]">
          <div className="md:h-[1146px] h-[1200px] my-[auto] md:w-[100%] w-[48%]">
            <Img
              src="images/img_photographywebsite.png"
              className="absolute h-[1145px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
              alt="PhotographyWebsite"
            />
            <div className="absolute backdrop-opacity-[0.5] bg-gray_700_33 blur-[55.00px] bottom-[0] h-[1146px] right-[0] w-[16%]"></div>
          </div>
          <Img
            src="images/img_photographywebsite_1146x760.png"
            className="h-[1146px] ml-[-75px] mt-[auto] object-cover w-[48%] z-[1]"
            alt="PhotographyWebsite One"
          />
        </div>
      </div>
    </>
  );
};

export default PhotographyWebsiteOnePage;
