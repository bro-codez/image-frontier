import React from "react";

import { Text, Img, Button, Input, SelectBox, List } from "components";

const ComponentsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-proximanova items-center justify-start mx-[auto] p-[9px] w-[100%]">
        <div className="flex flex-col gap-[32px] justify-start max-w-[9974px] mb-[119px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start md:mt-[0] mt-[36px] md:w-[100%] w-[7%]">
              <div className="border-[1px] border-deep_purple_A200 border-solid flex items-center justify-start p-[18px] rounded-[5px] md:w-[100%] w-[98%]">
                <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between mb-[25px] mt-[2px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:w-[100%] w-[80%]">
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
                    <div className="flex items-start justify-start py-[4px] sm:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_400 text-left tracking-[-0.22px] w-[auto]"
                            variant="body1"
                          >
                            Studio
                          </Text>
                          <Text
                            className="font-bold text-black_900 text-left tracking-[-0.29px] w-[auto]"
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
                  <div className="flex flex-col gap-[24px] items-start justify-start py-[4px] w-[auto]">
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
                    <Text
                      className="font-medium text-black_901 text-left tracking-[-0.22px] w-[auto]"
                      variant="body1"
                    >
                      Contact
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[48px] items-start justify-start p-[20px] rounded-[5px] w-[100%]">
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
                      className="font-normal leading-[18.00px] sm:leading-[1px] md:max-w-[100%] max-w-[580px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Diam facilisi consequat porta est diam. Massa ac fermentum
                      venenatis neque volutpat imperdiet. Enim aliquam est donec
                      turpis sem senectus gravida
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-[-0.14px]"
                      variant="body2"
                    >
                      Asian Best Capture
                      <br />
                      Nagontes Photo Challange
                    </Text>
                    <Img
                      src="images/img_icon.svg"
                      className="h-[1px] w-[15px]"
                      alt="Icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start mb-[64px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold leading-[48.00px] text-black_901 text-left tracking-[-0.58px]"
                    as="h2"
                    variant="h2"
                  >
                    Capture The
                    <br />
                    Beautiful Moments.
                  </Text>
                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[18.00px] sm:leading-[1px] md:max-w-[100%] max-w-[429px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                      variant="body1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Diam facilisi consequat porta est diam. Massa ac fermentum
                      venenatis neque volutpat imperdiet.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[10px] md:w-[100%] w-[11%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[2px] items-start justify-start md:mt-[0] mt-[33px] w-[auto]">
                  <Text
                    className="font-bold text-gray_400 text-left tracking-[-0.22px] w-[auto]"
                    variant="body1"
                  >
                    Studio
                  </Text>
                  <Text
                    className="font-bold text-black_900 text-left tracking-[-0.29px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Pixcel.
                  </Text>
                </div>
                <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 items-center justify-start md:ml-[0] ml-[16px] p-[15px] rounded-[5px] md:w-[100%] w-[41%]">
                  <div className="flex flex-col items-center justify-start mb-[74px] mt-[5px] md:w-[100%] w-[98%]">
                    <div className="flex flex-row gap-[57px] items-start justify-start md:w-[100%] w-[95%]">
                      <Button className="bg-gray_700 cursor-pointer font-normal min-w-[169px] mt-[2px] not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] sm:text-[1px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                        View Services
                      </Button>
                      <Button className="bg-gray_700 cursor-pointer font-normal mb-[8px] not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] sm:text-[1px] text-center text-white_A700 tracking-[-0.22px] w-[136px]">
                        View Services
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[42px] items-end justify-end ml-[auto] mt-[16px] md:w-[100%] w-[73%]">
                      <Img
                        src="images/img_play.svg"
                        className="h-[67px] rounded-[10px] w-[66px]"
                        alt="play"
                      />
                      <Button className="bg-gray_700 cursor-pointer font-normal mb-[3px] min-w-[169px] mt-[6px] not-italic sm:px-[20px] px-[30px] py-[20px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] text-[18px] sm:text-[1px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                        View Services
                      </Button>
                    </div>
                    <div className="flex h-[67px] md:h-[auto] items-center justify-center mt-[15px] sm:px-[20px] px-[30px] py-[23px] rounded-[10px] w-[225px]">
                      <div className="flex flex-row gap-[16px] items-center justify-end w-[auto]">
                        <Img
                          src="images/img_play.svg"
                          className="h-[67px] rounded-[10px] w-[66px]"
                          alt="play One"
                        />
                        <Text
                          className="font-normal leading-[18.00px] sm:leading-[1px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                          variant="body1"
                        >
                          See how capture
                          <br />
                          the moment made
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_700 cursor-pointer font-normal mt-[33px] not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] sm:text-[1px] text-center text-white_A700 tracking-[-0.22px] w-[375px]">
                      View Services
                    </Button>
                  </div>
                </div>
                <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 flex-col gap-[20px] items-center justify-start md:ml-[0] ml-[73px] md:mt-[0] mt-[16px] p-[20px] rounded-[5px] md:w-[100%] w-[45%]">
                  <Input
                    className="font-normal not-italic pl-[29px] pr-[35px] sm:px-[20px] py-[19px] text-[18px] sm:text-[1px] placeholder:text-bluegray_400 text-bluegray_400 text-left tracking-[-0.22px] w-[100%]"
                    wrapClassName="bg-white_A700 border-[1px] border-bluegray_100 border-solid rounded-[10px] w-[100%]"
                    type="text"
                    name="Property1Only"
                    placeholder="Your Name"
                  ></Input>
                  <SelectBox
                    className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-normal not-italic sm:pl-[20px] pl-[29px] py-[19px] rounded-[10px] text-[18px] sm:text-[1px] text-bluegray_400 text-left tracking-[-0.22px] w-[100%]"
                    placeholderClassName="text-bluegray_400"
                    name="Property1With"
                    placeholder="Your Name"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[11px] mr-[29px] w-[14px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center md:ml-[0] ml-[76px] mt-[148px] sm:w-[100%] w-[auto]">
                <Button className="bg-gray_700 cursor-pointer font-normal min-w-[169px] not-italic sm:px-[20px] px-[30px] py-[23px] rounded-[10px] text-[18px] sm:text-[1px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                  View Services
                </Button>
                <div className="flex h-[67px] md:h-[auto] items-center justify-center sm:px-[20px] px-[30px] py-[23px] rounded-[10px] w-[225px]">
                  <div className="flex flex-row gap-[16px] items-center justify-end w-[auto]">
                    <Img
                      src="images/img_play.svg"
                      className="h-[67px] rounded-[10px] w-[66px]"
                      alt="play Two"
                    />
                    <Text
                      className="font-normal leading-[18.00px] sm:leading-[1px] not-italic text-gray_900 text-left tracking-[-0.22px]"
                      variant="body1"
                    >
                      See how capture
                      <br />
                      the moment made
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-deep_purple_A200 border-solid flex items-center justify-start md:ml-[0] ml-[156px] mt-[19px] p-[12px] rounded-[5px] md:w-[100%] w-[23%]">
                <div className="flex flex-row items-start justify-between mb-[8px] mt-[2px] md:w-[100%] w-[97%]">
                  <div className="flex flex-col items-start justify-start mt-[18px] w-[auto]">
                    <Img
                      src="images/img_icon.svg"
                      className="h-[1px] md:ml-[0] ml-[8px] w-[auto]"
                      alt="Property1Small"
                    />
                    <Img
                      src="images/img_property1large.svg"
                      className="h-[1px] mt-[20px] w-[auto]"
                      alt="Property1Large"
                    />
                    <Img
                      src="images/img_icon.svg"
                      className="h-[1px] md:ml-[0] ml-[8px] mt-[40px] w-[auto]"
                      alt="Property1VariantFive"
                    />
                  </div>
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="h-[12px] mt-[30px] w-[17px]"
                    alt="arrowdown"
                  />
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[57px] w-[57px]"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 items-center justify-start mb-[41px] md:ml-[0] ml-[173px] md:mt-[0] mt-[16px] p-[20px] rounded-[5px] md:w-[100%] w-[32%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-gray_501 h-[900px] w-[23%]"></div>
                <div className="bg-gray_501 h-[729px] md:ml-[0] ml-[130px] md:mt-[0] my-[85px] w-[19%]"></div>
                <div className="bg-gray_501 h-[731px] md:ml-[0] ml-[87px] md:mt-[0] my-[84px] w-[16%]"></div>
                <div className="bg-gray_501 h-[731px] md:ml-[0] ml-[89px] md:mt-[0] my-[84px] w-[23%]"></div>
                <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start md:ml-[0] ml-[155px] md:w-[100%] w-[6%]">
                  <Img
                    src="images/img_property1small.svg"
                    className="h-[196px] w-[auto]"
                    alt="Property1Small One"
                  />
                  <div className="bg-gray_502 flex items-center justify-end pt-[162px] w-[100%]">
                    <div className="bg-black_900_26 flex items-center justify-center p-[7px] w-[178px]">
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
                </div>
              </div>
            </div>
            <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 md:flex-col flex-row gap-[116px] md:gap-[40px] items-start justify-start md:ml-[0] ml-[127px] md:mt-[0] mt-[103px] p-[20px] rounded-[5px] md:w-[100%] w-[39%]">
              <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start mb-[123px] md:w-[100%] w-[auto]">
                <div className="bg-gray_501 h-[731px] w-[41%]"></div>
                <div className="bg-gray_501 h-[731px] w-[58%]"></div>
              </div>
              <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="bg-gray_501 h-[729px] w-[49%]"></div>
                <div className="bg-gray_501 h-[729px] w-[49%]"></div>
              </div>
              <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start mb-[123px] md:w-[100%] w-[auto]">
                <div className="bg-gray_501 h-[731px] w-[58%]"></div>
                <div className="bg-gray_501 h-[731px] w-[41%]"></div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[408px] md:mt-[0] mt-[82px] sm:w-[100%] w-[auto]">
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
                <div className="bg-gray_502 flex items-center justify-end pt-[162px] w-[100%]">
                  <div className="bg-black_900_26 flex items-center justify-center p-[7px] w-[178px]">
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
                <div className="bg-gray_502 flex items-center justify-end pt-[162px] w-[100%]">
                  <div className="bg-black_900_26 flex items-center justify-center p-[7px] w-[178px]">
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
                        alt="Icon Three"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray_502 flex items-center justify-end pt-[162px] w-[100%]">
                  <div className="bg-black_900_26 flex items-center justify-center p-[7px] w-[178px]">
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
                        alt="Icon Four"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex items-center justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[12%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[430px] items-center justify-between md:w-[100%] w-[auto]">
              <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-start py-[4px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-black_900 text-left tracking-[-0.22px] w-[auto]"
                  variant="body1"
                >
                  Personal Album
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_100 text-left tracking-[-0.22px] w-[auto]"
                  variant="body1"
                >
                  Family Album
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_100 text-left tracking-[-0.22px] w-[auto]"
                  variant="body1"
                >
                  Wedding Album
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_100 text-left tracking-[-0.22px] w-[auto]"
                  variant="body1"
                >
                  Product Album
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-center w-[auto]">
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[-0.22px] w-[auto]"
                  variant="body1"
                >
                  See more
                </Text>
                <Img
                  src="images/img_property1large.svg"
                  className="h-[1px] w-[97px]"
                  alt="Icon Five"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
