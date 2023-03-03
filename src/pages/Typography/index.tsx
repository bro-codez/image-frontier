import React from "react";

import { Text, Line } from "components";

const TypographyPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_50 flex font-proximanova items-center justify-end mx-[auto] py-[47px] w-[100%]">
        <div className="flex flex-col gap-[24px] items-center justify-start mt-[8px] w-[100%]">
          <div className="flex flex-col items-start justify-start max-w-[960px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-normal not-italic text-black_900 text-left tracking-[-0.24px] w-[auto]"
              as="h6"
              variant="h6"
            >
              TypeFace: Proxima Nova.
            </Text>
            <Text
              className="mt-[9px] text-black_900 text-left tracking-[-0.91px] w-[auto]"
              as="h1"
              variant="h1"
            >
              Display Heading
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[34px] w-[100%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Heading 01
              </Text>
              <Text
                className="font-semibold sm:ml-[0] ml-[154px] text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Heading 01
              </Text>
              <Text
                className="font-bold sm:ml-[0] ml-[93px] text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Heading 01
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[5px] md:w-[100%] w-[86%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[220px] text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[129px] text-black_900 text-left tracking-[-0.58px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Bold
              </Text>
            </div>
          </div>
          <div className="flex flex-col justify-start w-[100%]">
            <Line className="bg-black_900 h-[1px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[24px] md:px-[20px] md:w-[100%] w-[90%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Heading 02
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[194px] text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Heading 02
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[134px] text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Heading 02
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[3px] md:px-[20px] md:w-[100%] w-[78%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[255px] text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[170px] text-black_900 text-left tracking-[-0.46px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Bold
              </Text>
            </div>
            <Line className="bg-black_900 h-[1px] mt-[23px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[24px] md:px-[20px] md:w-[100%] w-[86%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Heading 03
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[226px] text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Heading 03
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[165px] text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Heading 03
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[5px] md:px-[20px] md:w-[100%] w-[77%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[276px] text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[196px] text-black_900 text-left tracking-[-0.38px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Bold
              </Text>
            </div>
            <Line className="bg-black_900 h-[1px] mt-[24px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[24px] md:px-[20px] md:w-[100%] w-[82%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Heading 04
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[266px] text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Heading 04
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[206px] text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Heading 04
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[7px] md:px-[20px] md:w-[100%] w-[75%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[304px] text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[229px] text-black_900 text-left tracking-[-0.29px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Bold
              </Text>
            </div>
            <Line className="bg-black_900 h-[1px] mt-[23px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[23px] md:px-[20px] md:w-[100%] w-[80%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Heading 05
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[286px] text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Heading 05
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[226px] text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Heading 05
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[9px] md:px-[20px] md:w-[100%] w-[74%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[318px] text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[246px] text-black_900 text-left tracking-[-0.24px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Bold
              </Text>
            </div>
            <Line className="bg-black_900 h-[1px] mt-[24px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[23px] md:px-[20px] md:w-[100%] w-[79%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                Heading 06
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[296px] text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                Heading 06
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[237px] text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                Heading 06
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[35px] mt-[9px] md:px-[20px] md:w-[100%] w-[74%]">
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                Medium
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[325px] text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                SemiBold
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[254px] text-black_900 text-left tracking-[-0.22px] w-[auto]"
                variant="body1"
              >
                Bold
              </Text>
            </div>
            <Line className="bg-black_900 h-[1px] mt-[23px] w-[100%]" />
            <Text
              className="font-normal md:ml-[0] ml-[35px] mt-[23px] not-italic text-black_900 text-left tracking-[-0.22px] w-[auto]"
              variant="body1"
            >
              Body
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[35px] mt-[16px] not-italic text-black_900 text-left tracking-[-0.22px] w-[auto]"
              variant="body1"
            >
              Regular
            </Text>
            <Line className="bg-black_900 h-[1px] mr-[880px] mt-[23px] w-[15%]" />
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[35px] mt-[23px] md:px-[20px] md:w-[100%] w-[21%]">
              <Text
                className="font-normal not-italic text-black_900 text-left tracking-[-0.14px] w-[auto]"
                variant="body2"
              >
                Caption
              </Text>
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.14px] w-[auto]"
                variant="body2"
              >
                Caption
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[35px] mt-[22px] md:px-[20px] md:w-[100%] w-[20%]">
              <Text
                className="font-normal not-italic text-black_900 text-left tracking-[-0.14px] w-[auto]"
                variant="body2"
              >
                Regular
              </Text>
              <Text
                className="font-medium text-black_900 text-left tracking-[-0.14px] w-[auto]"
                variant="body2"
              >
                Regular
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypographyPage;
