import React from "react";

import { Img, Text, Button, List, Input } from "components";

const PhotographyWebsitePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-proximanova sm:gap-[40px] md:gap-[40px] gap-[94px] items-end justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[93px] items-start justify-start md:px-[20px] md:w-[100%] w-[92%]">
          <div className="h-[900px] relative w-[100%]">
            <Img
              src="images/img_unsplashwt6cf73fwgm.png"
              className="absolute h-[900px] inset-y-[0] my-[auto] object-cover right-[0] w-[54%]"
              alt="unsplashwT6cf73FWGM"
            />
            <div className="absolute flex flex-col gap-[56px] items-start justify-start left-[0] top-[25%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="leading-[76.00px] text-black_901 text-left tracking-[-0.91px]"
                  as="h1"
                  variant="h1"
                >
                  Capture The
                  <br />
                  Beautiful Moments.
                </Text>
                <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[580px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam facilisi consequat porta est diam. Massa ac fermentum
                    venenatis neque volutpat imperdiet. Enim aliquam est donec
                    turpis sem senectus gravida
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center sm:w-[100%] w-[auto]">
                <Button className="bg-gray_700 cursor-pointer font-normal min-w-[169px] not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                  View Services
                </Button>
                <div className="flex h-[67px] md:h-[auto] items-center justify-center sm:px-[20px] px-[30px] py-[23px] rounded-[10px] w-[225px]">
                  <div className="flex flex-row gap-[16px] items-center justify-end w-[auto]">
                    <Img
                      src="images/img_play.svg"
                      className="h-[67px] rounded-[10px] w-[66px]"
                      alt="play"
                    />
                    <Text
                      className="font-normal leading-[18.00px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                      variant="body1"
                    >
                      See how capture
                      <br />
                      the moment made
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-[16px] items-start justify-start left-[0] w-[auto]">
              <Text
                className="font-semibold text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Our Best Work
              </Text>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-3 justify-start sm:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative w-[100%]"
                  style={{
                    backgroundImage:
                      "url('images/img_unsplashemhvjwkiiyu_200x178.png')",
                  }}
                >
                  <Img
                    src="images/img_unsplashemhvjwkiiyu.png"
                    className="h-[200px] m-[auto] object-cover w-[100%]"
                    alt="unsplashEMhVJwkIIYU"
                  />
                  <div className="absolute bg-black_900_30 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] p-[7px] w-[178px]">
                    <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.14px]"
                        variant="body2"
                      >
                        Asian Best Capture
                        <br />
                        Nagontes Photo Challange
                      </Text>
                      <Img
                        src="images/img_icon_white_a700.svg"
                        className="h-[1px] w-[15px]"
                        alt="Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[200px] relative w-[100%]">
                  <Img
                    src="images/img_unsplashtbwv5c1omgq.png"
                    className="h-[200px] m-[auto] object-cover w-[100%]"
                    alt="unsplashtbwv5C1OMGQ"
                  />
                  <div className="absolute bg-black_900_26 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] p-[7px] w-[178px]">
                    <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.14px]"
                        variant="body2"
                      >
                        Asian Best Capture
                        <br />
                        Nagontes Photo Challange
                      </Text>
                      <Img
                        src="images/img_icon_white_a700.svg"
                        className="h-[1px] w-[15px]"
                        alt="Icon One"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative w-[100%]"
                  style={{
                    backgroundImage:
                      "url('images/img_unsplashtubxlwego80.png')",
                  }}
                >
                  <Img
                    src="images/img_unsplashmu1v2ayd6pi.png"
                    className="h-[200px] m-[auto] object-cover w-[100%]"
                    alt="unsplashmu1v2Ayd6pI"
                  />
                  <div className="absolute bg-black_900_26 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] p-[7px] w-[178px]">
                    <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.14px]"
                        variant="body2"
                      >
                        Asian Best Capture
                        <br />
                        Nagontes Photo Challange
                      </Text>
                      <Img
                        src="images/img_icon_white_a700.svg"
                        className="h-[1px] w-[15px]"
                        alt="Icon Two"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex items-center justify-start left-[0] py-[4px] top-[2%] w-[auto]">
              <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start w-[auto]">
                <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-gray_400 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    Studio
                  </Text>
                  <Text
                    className="font-bold text-black_901 text-left tracking-[-0.29px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Pixcel.
                  </Text>
                </div>
                <div className="flex flex-row gap-[31px] items-start justify-start py-[4px] w-[auto]">
                  <Text
                    className="font-medium text-black_901 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    How it Work
                  </Text>
                  <Text
                    className="font-medium text-black_901 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    Why Us
                  </Text>
                  <Text
                    className="font-medium text-black_901 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    Pricing
                  </Text>
                  <Text
                    className="font-medium text-black_901 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    Contact
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[43px] items-start justify-start md:w-[100%] w-[91%]">
            <Text
              className="font-bold text-black_900 text-left tracking-[-0.58px] w-[auto]"
              as="h2"
              variant="h2"
            >
              We Have Done Thousands Of Photos.
            </Text>
            <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] gap-[438px] items-center justify-between md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-start py-[4px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Personal Album
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Family Album
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Wedding Album
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Product Album
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_icon_bluegray_400.svg"
                      className="h-[1px] w-[97px]"
                      alt="Icon Three"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_unsplashwzgckve0vko.png"
                      className="h-[729px] sm:h-[auto] object-cover md:w-[100%] w-[576px]"
                      alt="unsplashwZgcKvE0vko"
                    />
                    <Img
                      src="images/img_unsplashhuygtmkxtia.png"
                      className="h-[729px] sm:h-[auto] object-cover md:w-[100%] w-[576px]"
                      alt="unsplashhuyGTmkxTiA"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_unsplashqpkkcu2sdj4.png"
                      className="h-[731px] sm:h-[auto] object-cover md:w-[100%] w-[473px]"
                      alt="unsplashQpkKCU2sdjFour"
                    />
                    <Img
                      src="images/img_unsplashzkz5pzmdkcc.png"
                      className="h-[731px] sm:h-[auto] object-cover md:w-[100%] w-[675px]"
                      alt="unsplashZkZ5PzmDKcc"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_unsplashpn5yl1uphr8.png"
                      className="h-[731px] sm:h-[auto] object-cover md:w-[100%] w-[675px]"
                      alt="unsplashPN5YL1UphrEight"
                    />
                    <Img
                      src="images/img_unsplashzxweycfuv7m.png"
                      className="h-[731px] sm:h-[auto] object-cover md:w-[100%] w-[473px]"
                      alt="unsplashZxWeYCfuv7M"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[100%]">
          <div className="flex flex-col gap-[120px] md:gap-[40px] items-start justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[69px] items-end justify-end md:px-[20px] md:w-[100%] w-[auto]">
              <div className="md:h-[720px] h-[785px] relative md:w-[100%] w-[62%]">
                <div className="absolute bg-bluegray_100 h-[672px] right-[0] top-[0] w-[77%]"></div>
                <Img
                  src="images/img_unsplashas4duj2j7r4.png"
                  className="absolute bottom-[0] h-[720px] left-[0] object-cover w-[90%]"
                  alt="unsplashaS4Duj2j7rFour"
                />
              </div>
              <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold leading-[48.00px] text-black_901 text-left tracking-[-0.58px]"
                    as="h2"
                    variant="h2"
                  >
                    Make Your
                    <br />
                    Reservation Now.
                  </Text>
                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[429px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Diam facilisi consequat porta est diam. Massa ac fermentum
                      venenatis neque volutpat imperdiet.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-center justify-center sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Input
                      className="font-normal not-italic pl-[29px] pr-[35px] sm:px-[20px] py-[19px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left tracking-[-0.22px] w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid rounded-[10px] w-[100%]"
                      type="text"
                      name="TextInputField"
                      placeholder="Your Name"
                    ></Input>
                    <Input
                      className="font-normal not-italic pl-[29px] pr-[35px] sm:px-[20px] py-[19px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left tracking-[-0.22px] w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid rounded-[10px] w-[100%]"
                      type="number"
                      name="TextInputField One"
                      placeholder="Phone Number"
                    ></Input>
                    <Input
                      className="font-normal not-italic pl-[29px] pr-[35px] sm:px-[20px] py-[19px] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 text-left tracking-[-0.22px] w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid rounded-[10px] w-[100%]"
                      name="TextInputField Two"
                      placeholder="Product Photo Service"
                    ></Input>
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start p-[19px] rounded-[10px] w-[100%]">
                      <Text
                        className="font-normal mb-[115px] md:ml-[0] ml-[9px] not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                        variant="body1"
                      >
                        Additional Information
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_700 cursor-pointer font-normal not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] text-center text-white_A700 tracking-[-0.22px] w-[375px]">
                    Create Reservation
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_100 flex h-[371px] md:h-[auto] items-center justify-center max-w-[1180px] mx-[auto] md:px-[20px] px-[352px] py-[86px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-center justify-center sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-center justify-center sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-black_901 text-left tracking-[-0.58px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Subscribe Newsletter
                  </Text>
                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[429px] not-italic text-center text-gray_900 tracking-[-0.22px]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Diam facilisi consequat porta est diam. Massa ac.
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[98%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-row items-center justify-between sm:pl-[20px] pl-[29px] rounded-[10px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Your Email
                    </Text>
                    <Button className="bg-gray_700 cursor-pointer font-normal min-w-[137px] not-italic sm:px-[20px] px-[30px] py-[20px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] text-[18px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray_700 flex items-center justify-center md:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[53px] items-center justify-center mb-[15px] ml-[139px] mr-[129px] mt-[126px] w-[82%]">
                <div className="flex sm:flex-col flex-row gap-[207px] md:gap-[40px] items-start justify-between md:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[49px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_400 text-left tracking-[-0.22px] w-[auto]"
                        variant="body1"
                      >
                        Studio
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.29px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pixcel.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.24px]"
                        as="h6"
                        variant="h6"
                      >
                        3421 mARKET sT.#221
                        <br />
                        Magladesh, California
                        <br />
                        2234
                      </Text>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <a
                          className="font-normal not-italic text-[18px] text-left text-white_A700 tracking-[-0.22px] underline w-[auto]"
                          href="javascript:"
                        >
                          +92 343 1279488
                        </a>
                        <a
                          className="font-normal not-italic text-[18px] text-left text-white_A700 tracking-[-0.22px] underline w-[auto]"
                          href="javascript:"
                        >
                          artalisajid@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-[24px] items-start justify-start py-[4px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-medium text-left text-white_A700 tracking-[-0.22px]"
                        variant="body1"
                      >
                        About
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        Image Gallery
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        Partners
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-[24px] items-start justify-start py-[4px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-medium text-left text-white_A700 tracking-[-0.22px]"
                        variant="body1"
                      >
                        Feedback
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[18px] text-left text-white_A700 tracking-[-0.22px]"
                        href="javascript:"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                  <Img
                    src="images/img_arrowup_white_a700.svg"
                    className="h-[57px] w-[57px]"
                    alt="arrowup"
                  />
                </div>
                <Text
                  className="font-normal not-italic text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                  variant="body2"
                >
                  Copyright @2021 Studio Pixcel
                </Text>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyWebsitePage;
