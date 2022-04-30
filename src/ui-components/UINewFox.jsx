/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Fox } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UINewFox(props) {
  const { fx, overrides, ...rest } = props;
  const [
    textFieldThreeTwoFourSevenSevenNineEightValue,
    setTextFieldThreeTwoFourSevenSevenNineEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoFourSevenSevenNineSevenValue,
    setTextFieldThreeTwoFourSevenSevenNineSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoFourSevenSevenNineNineValue,
    setTextFieldThreeTwoFourSevenSevenNineNineValue,
  ] = useStateMutationAction("");
  const vectorThreeTwoFourSevenSevenNineOneOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      fid: textFieldThreeTwoFourSevenSevenNineEightValue,
      name: textFieldThreeTwoFourSevenSevenNineSevenValue,
      src: textFieldThreeTwoFourSevenSevenNineNineValue,
    },
    model: Fox,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UINewFox")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              onClick={() => {
                vectorThreeTwoFourSevenSevenNineOneOnClick();
              }}
              {...getOverrideProps(overrides, "Vector3247791")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create a Fox"
            {...getOverrideProps(overrides, "Create a Fox")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3247793")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 1")}
          >
            <Icon
              width="96px"
              height="96px"
              viewBox={{ minX: 0, minY: 0, width: 96, height: 96 }}
              paths={[
                {
                  d: "M95.5 48C95.5 74.2335 74.2335 95.5 48 95.5L48 96.5C74.7858 96.5 96.5 74.7858 96.5 48L95.5 48ZM48 95.5C21.7665 95.5 0.5 74.2335 0.5 48L-0.5 48C-0.5 74.7858 21.2142 96.5 48 96.5L48 95.5ZM0.5 48C0.5 21.7665 21.7665 0.5 48 0.5L48 -0.5C21.2142 -0.5 -0.5 21.2142 -0.5 48L0.5 48ZM48 0.5C74.2335 0.5 95.5 21.7665 95.5 48L96.5 48C96.5 21.2142 74.7858 -0.5 48 -0.5L48 0.5Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 0,
                },
                {
                  d: "M96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48Z",
                  fill: "rgba(196,196,196,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse 1")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="21.88%"
              bottom="21.65%"
              left="7.83%"
              right="6.25%"
              {...getOverrideProps(overrides, "Group3283650")}
            >
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group3283651")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="0%"
                  bottom="99.69%"
                  left="44.62%"
                  right="52.51%"
                  {...getOverrideProps(overrides, "Group3283654")}
                >
                  <Icon
                    width="2.3681640625px"
                    height="0.164306640625px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 2.3681640625,
                      height: 0.164306640625,
                    }}
                    paths={[
                      {
                        d: "M0.926732 0L2.36812 0C1.57846 0.0461326 0.790524 0.119945 0 0.1644C0.310347 0.118267 0.618109 0.0561979 0.926732 0Z",
                        fill: "rgba(255,223,211,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283655")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="0%"
                  bottom="19.49%"
                  left="0.58%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group3283656")}
                >
                  <Icon
                    width="82.0029296875px"
                    height="43.649169921875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 82.0029296875,
                      height: 43.649169921875,
                    }}
                    paths={[
                      {
                        d: "M38.6897 0L43.3819 0C47.0259 0.161045 50.6595 0.827031 54.0656 2.11371C57.4139 3.35761 60.52 5.17356 63.3148 7.3485C65.0812 6.46695 66.9553 5.8169 68.8338 5.20543C70.7295 4.66526 72.6528 4.19471 74.6131 3.94224C75.658 3.8332 76.7226 3.73254 77.7657 3.9154C78.264 4.00934 78.8019 4.16871 79.1244 4.57635C79.5252 5.08716 79.6071 5.75231 79.6364 6.37384C79.5726 8.83061 78.6476 11.1507 77.8114 13.4363C77.4726 14.0948 77.2105 14.7876 76.8838 15.4519C76.2476 16.7595 75.5985 18.068 74.7778 19.2775C74.6812 19.3832 74.7209 19.509 74.8105 19.6038C76.5942 21.9985 78.2881 24.4536 79.9623 26.9221C80.7433 28.0201 81.3968 29.2204 81.7278 30.5238C82.1701 32.1133 82.0571 33.8118 81.5459 35.3728C81.5278 35.4114 81.4933 35.4885 81.4761 35.5271C81.2244 35.5699 80.9744 35.6152 80.7252 35.6622C80.6856 35.6261 80.6071 35.5548 80.5683 35.5187C77.5123 36.0354 74.5657 37.0017 71.5941 37.8413C67.72 38.972 63.8432 40.1018 59.9148 41.0437C53.557 42.5678 47.0449 43.6892 40.4767 43.6481C36.2233 43.6683 31.981 43.1843 27.8025 42.4327C21.9922 41.4036 16.3085 39.8132 10.6568 38.1659C8.41019 37.5125 6.16966 36.8406 3.90758 36.2417C2.77999 35.9457 1.63947 35.6957 0.487737 35.5011C-0.0226104 33.9586 -0.168301 32.2861 0.223081 30.7016C0.521358 29.4804 1.07136 28.3237 1.79205 27.2853C3.41017 24.873 5.08259 22.4942 6.77829 20.1331C6.18346 19.6793 5.81966 19.0217 5.44207 18.3993C4.68 17.0858 4.01534 15.7211 3.3981 14.338C3.21534 13.9421 3.07654 13.5277 2.87137 13.1411C2.46189 12.0096 2.03602 10.8806 1.72567 9.71804C1.39291 8.49762 1.11964 7.23527 1.22653 5.96536C1.30498 5.29854 1.57136 4.5579 2.24033 4.25258C3.05844 3.89527 3.98258 3.8852 4.86362 3.91288C7.45157 4.06722 9.98175 4.69713 12.4507 5.43945C14.4016 6.08363 16.3464 6.78652 18.1473 7.77124C21.0284 5.45706 24.2413 3.51027 27.7301 2.19088C30.4793 1.12983 33.3845 0.479779 36.3215 0.1644C37.1121 0.119945 37.9 0.0461326 38.6897 0Z",
                        fill: "rgba(255,105,50,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283657")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="4.16%"
                  bottom="75.22%"
                  left="84.03%"
                  right="0.84%"
                  {...getOverrideProps(overrides, "Group3283658")}
                >
                  <Icon
                    width="12.47998046875px"
                    height="11.17919921875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 12.47998046875,
                      height: 11.17919921875,
                    }}
                    paths={[
                      {
                        d: "M6.29657 0.582109C7.62416 0.265891 8.97848 0.00838775 10.3483 0C10.9604 0.052004 11.6923 0.0478103 12.1199 0.550236C12.5742 1.1357 12.4871 1.91828 12.4423 2.60607C12.2173 4.19471 11.6587 5.71709 11.0449 7.19836C10.4492 8.56724 9.80262 9.92438 8.97761 11.1792C9.81382 8.89353 10.7388 6.57348 10.8026 4.11671C10.7733 3.49517 10.6914 2.83003 10.2905 2.31921C9.96813 1.91157 9.43021 1.7522 8.93193 1.65826C7.88882 1.4754 6.82416 1.57606 5.77933 1.6851C3.81898 1.93757 1.8957 2.40812 0 2.94829C1.96121 1.85705 4.11726 1.1357 6.29657 0.582109Z",
                        fill: "rgba(88,61,0,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283659")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="4.21%"
                  bottom="75.76%"
                  left="0.12%"
                  right="84.32%"
                  {...getOverrideProps(overrides, "Group3283660")}
                >
                  <Icon
                    width="12.8271484375px"
                    height="10.862060546875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 12.8271484375,
                      height: 10.862060546875,
                    }}
                    paths={[
                      {
                        d: "M0.43818 0.425928C0.732148 0.155004 1.15198 0.0660938 1.54164 0.0224776C2.17095 -0.016106 2.80544 -0.00436331 3.43389 0.0526733C5.3158 0.285014 7.15632 0.767308 8.94168 1.38129C10.2908 1.85268 11.6201 2.40208 12.827 3.16033C10.3581 2.41801 7.82788 1.7881 5.23993 1.63376C4.35889 1.60608 3.43475 1.61615 2.61664 1.97346C1.94767 2.27878 1.68129 3.01942 1.60284 3.68624C1.49595 4.95614 1.76922 6.2185 2.10198 7.43891C2.41233 8.60145 2.83819 9.73044 3.24768 10.8619C3.14251 10.8083 3.10199 10.7009 3.11233 10.5885C1.99336 8.61487 1.0537 6.53807 0.402835 4.37236C0.161454 3.34067 -0.0894091 2.29136 0.0312813 1.22444C0.108868 0.935902 0.210593 0.638137 0.43818 0.425928Z",
                        fill: "rgba(88,61,0,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283661")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="6.46%"
                  bottom="87.73%"
                  left="0%"
                  right="99.39%"
                  {...getOverrideProps(overrides, "Group3283662")}
                >
                  <Icon
                    width="0.501708984375px"
                    height="3.14794921875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.501708984375,
                      height: 3.14794921875,
                    }}
                    paths={[
                      {
                        d: "M0.130173 0C0.00948282 1.06692 0.260346 2.11623 0.501727 3.14792C0.198277 2.51549 0.156035 1.80756 0 1.1357L0 0.213888C0.0327588 0.160206 0.0974144 0.0536816 0.130173 0Z",
                        fill: "rgba(213,206,191,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283663")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="14.57%"
                  bottom="71.88%"
                  left="81.65%"
                  right="8.38%"
                  {...getOverrideProps(overrides, "Group3283664")}
                >
                  <Icon
                    width="8.218017578125px"
                    height="7.346923828125px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.218017578125,
                      height: 7.346923828125,
                    }}
                    paths={[
                      {
                        d: "M5.28318 0.0480934C5.95905 -0.000555705 6.68493 -0.0819176 7.31597 0.216687C7.81684 0.440641 8.25133 0.92881 8.21598 1.49415C8.1746 2.37402 7.72804 3.16751 7.28579 3.91318C6.88751 4.57833 6.43578 5.21161 6.03491 5.87508C5.68319 6.42951 5.27715 6.98562 4.68059 7.31191C4.58663 7.38152 4.47369 7.34042 4.41852 7.24984C3.04867 5.62764 1.60038 4.06751 0.0710485 2.58623C-0.031539 2.52333 -0.0186082 2.39919 0.0813931 2.34047C1.26675 1.39769 2.67194 0.745956 4.12455 0.296371C4.50817 0.202428 4.89008 0.100098 5.28318 0.0480934Z",
                        fill: "rgba(255,195,126,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283665")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="16.11%"
                  bottom="70.48%"
                  left="8.3%"
                  right="81.93%"
                  {...getOverrideProps(overrides, "Group3283666")}
                >
                  <Icon
                    width="8.0556640625px"
                    height="7.272705078125px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 8.0556640625,
                      height: 7.272705078125,
                    }}
                    paths={[
                      {
                        d: "M1.45815 0.0378029C3.05558 -0.150083 4.62024 0.390089 6.0418 1.04517C6.73663 1.36894 7.39526 1.76904 7.99957 2.23456C8.12457 2.30166 8.00991 2.41238 7.94957 2.47529C6.45904 3.97082 5.04352 5.53682 3.71161 7.1674C3.65041 7.28063 3.4961 7.30664 3.3961 7.22527C2.89609 6.90151 2.5323 6.42089 2.21936 5.93104C1.55815 4.8398 0.772803 3.81146 0.263317 2.63969C0.0865923 2.1079 -0.132374 1.51489 0.10211 0.966329C0.335732 0.440416 0.905563 0.148521 1.45815 0.0378029Z",
                        fill: "rgba(255,195,126,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283667")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="59.37%"
                  bottom="29.88%"
                  left="21.37%"
                  right="71.39%"
                  {...getOverrideProps(overrides, "Group3283668")}
                >
                  <Icon
                    width="5.964599609375px"
                    height="5.8251953125px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 5.964599609375,
                      height: 5.8251953125,
                    }}
                    paths={[
                      {
                        d: "M2.55257 0.0354575C3.79654 -0.167525 5.11724 0.519428 5.65862 1.62409C6.06379 2.36892 6.03793 3.26472 5.74827 4.04226C5.8681 3.46267 5.85776 2.82353 5.54741 2.2993C5.12327 1.51253 4.19568 1.02521 3.28706 1.10405C2.10947 1.17703 1.09998 2.22129 1.12498 3.3746C1.08446 4.33835 1.7655 5.26603 2.70171 5.56799C3.18016 5.71729 3.70861 5.73574 4.18879 5.58225C3.44482 5.89511 2.57067 5.91356 1.82584 5.59147C1.12843 5.31132 0.561183 4.75438 0.249113 4.0884C-0.0595095 3.40312 -0.0810617 2.60126 0.182733 1.89921C0.555148 0.92707 1.4905 0.173855 2.55257 0.0354575Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283669")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="59.37%"
                  bottom="29.88%"
                  left="71.74%"
                  right="21.02%"
                  {...getOverrideProps(overrides, "Group3283670")}
                >
                  <Icon
                    width="5.966796875px"
                    height="5.826904296875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 5.966796875,
                      height: 5.826904296875,
                    }}
                    paths={[
                      {
                        d: "M2.55268 0.0348103C3.77337 -0.162302 5.06302 0.495296 5.62509 1.56138C6.1337 2.48068 6.06991 3.6667 5.46474 4.52813C4.74837 5.59421 3.25354 6.12599 2.01907 5.65376C2.57682 5.741 3.16906 5.66634 3.6613 5.38619C4.46474 4.94584 4.94837 4.01983 4.82768 3.12821C4.72423 2.11497 3.85009 1.24097 2.81044 1.12186C1.67424 0.940687 0.492347 1.709 0.213038 2.79354C0.121659 3.14834 0.143211 3.51992 0.17597 3.88143C-0.0628223 3.2339 -0.0619585 2.50081 0.199247 1.85998C0.574246 0.902102 1.507 0.172369 2.55268 0.0348103Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283671")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="61.4%"
                  bottom="30.13%"
                  left="22.73%"
                  right="71.57%"
                  {...getOverrideProps(overrides, "Group3283672")}
                >
                  <Icon
                    width="4.696044921875px"
                    height="4.59326171875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.696044921875,
                      height: 4.59326171875,
                    }}
                    paths={[
                      {
                        d: "M2.1638 0.00832731C3.07242 -0.0705182 4.00002 0.416814 4.42416 1.20359C4.7345 1.72783 4.74485 2.36698 4.62502 2.94658C4.38105 3.6587 3.80691 4.25759 3.06553 4.48658C2.58535 4.64008 2.0569 4.62163 1.57845 4.47232C0.642237 4.17036 -0.0388006 3.24267 0.00171685 2.27891C-0.0232833 1.12558 0.986206 0.0813013 2.1638 0.00832731Z",
                        fill: "rgba(85,48,24,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283673")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="61.4%"
                  bottom="30.13%"
                  left="71.92%"
                  right="22.38%"
                  {...getOverrideProps(overrides, "Group3283674")}
                >
                  <Icon
                    width="4.6982421875px"
                    height="4.5927734375px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.6982421875,
                      height: 4.5927734375,
                    }}
                    paths={[
                      {
                        d: "M0.0652717 1.69819C0.344585 0.613648 1.5265 -0.15467 2.66271 0.026506C3.70238 0.145612 4.57653 1.01962 4.67998 2.03286C4.80067 2.92448 4.31704 3.85048 3.51359 4.29084C3.02134 4.57099 2.42909 4.64564 1.87133 4.55841C0.970455 4.37053 0.228205 3.66176 0.0282029 2.78608C-0.00455607 2.42457 -0.0261087 2.05299 0.0652717 1.69819Z",
                        fill: "rgba(85,48,24,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283675")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="63.9%"
                  bottom="33.93%"
                  left="25.84%"
                  right="72.69%"
                  {...getOverrideProps(overrides, "Group3283676")}
                >
                  <Icon
                    width="1.215087890625px"
                    height="1.177490234375px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.215087890625,
                      height: 1.177490234375,
                    }}
                    paths={[
                      {
                        d: "M0.441831 0.0280467C0.904772 -0.127128 1.37633 0.392917 1.16167 0.818179C1.02115 1.20066 0.434934 1.30635 0.165963 0.995163C-0.149561 0.707461 0.00820201 0.110247 0.441831 0.0280467Z",
                        fill: "rgba(153,92,60,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283677")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="63.9%"
                  bottom="33.93%"
                  left="75.01%"
                  right="23.53%"
                  {...getOverrideProps(overrides, "Group3283678")}
                >
                  <Icon
                    width="1.201904296875px"
                    height="1.17919921875px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.201904296875,
                      height: 1.17919921875,
                    }}
                    paths={[
                      {
                        d: "M0.407361 0.028705C0.776339 -0.0929179 1.22291 0.187233 1.19963 0.58062C1.24446 1.04866 0.603055 1.36236 0.238387 1.05956C-0.155592 0.811284 -0.0348966 0.152844 0.407361 0.028705Z",
                        fill: "rgba(153,92,60,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283679")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="65.24%"
                  bottom="0%"
                  left="49.31%"
                  right="0.55%"
                  {...getOverrideProps(overrides, "Group3283680")}
                >
                  <Icon
                    width="41.353515625px"
                    height="18.84423828125px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 41.353515625,
                      height: 18.84423828125,
                    }}
                    paths={[
                      {
                        d: "M41.2812 0.154334C41.2985 0.11575 41.3329 0.0385836 41.351 0C41.3795 0.411838 41.1623 0.778381 41.0019 1.14493C40.3329 2.53645 39.4191 3.81139 38.3519 4.94038C36.7545 6.6498 34.8872 8.10423 32.9053 9.36826C30.5803 10.8915 28.0829 12.1471 25.5311 13.2677C22.2699 14.6685 18.894 15.8151 15.4509 16.7142C15.1406 16.7872 14.832 16.8661 14.5345 16.9768C14.0225 17.0296 13.5371 17.2016 13.0354 17.3022C9.18538 18.1477 5.25778 18.7323 1.30949 18.8288C0.87328 18.7374 0.435347 18.9135 0 18.8112C0.136207 18.7424 0.325002 18.6686 0.27845 18.4815C0.27414 16.9432 0.280175 15.4049 0.273278 13.8666C1.79484 14.0989 3.32501 13.1436 3.96726 11.8242C4.19743 11.3914 4.22588 10.8177 3.88537 10.431C3.38364 9.8212 2.57674 9.5486 1.81294 9.40349C1.21983 9.29026 0.611212 9.27683 0.0103471 9.32884C0.109485 9.26509 0.283624 9.23322 0.268969 9.08476C0.291383 8.81467 0.278451 8.54459 0.281899 8.27534C6.85003 8.31644 13.3621 7.195 19.7199 5.67095C23.6484 4.729 27.5251 3.59918 31.3993 2.46851C34.3708 1.6289 37.3174 0.66263 40.3735 0.145946C40.4122 0.182013 40.4907 0.253311 40.5303 0.289378C40.7795 0.242407 41.0295 0.197111 41.2812 0.154334Z",
                        fill: "rgba(245,232,187,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283681")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="65.48%"
                  bottom="0.07%"
                  left="1.17%"
                  right="50.35%"
                  {...getOverrideProps(overrides, "Group3283682")}
                >
                  <Icon
                    width="39.99267578125px"
                    height="18.682861328125px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 39.99267578125,
                      height: 18.682861328125,
                    }}
                    paths={[
                      {
                        d: "M0 0C1.15173 0.194596 2.29225 0.444551 3.41985 0.74064C5.68193 1.33953 7.92246 2.01139 10.169 2.6648C15.8208 4.31216 21.5044 5.90248 27.3148 6.93166C31.4933 7.68321 35.7356 8.16718 39.989 8.14705C39.9856 8.4163 39.9985 8.68639 39.9761 8.95647C39.9908 9.10494 39.8166 9.13681 39.7175 9.20055C38.8063 9.31631 37.8252 9.55787 37.1933 10.2524C36.8002 10.66 36.839 11.2916 37.1192 11.7471C37.7123 12.7712 38.7882 13.532 39.9804 13.7383C39.9873 15.2767 39.9813 16.815 39.9856 18.3533C40.0321 18.5403 39.8433 18.6142 39.7071 18.6829C35.4855 18.563 31.3036 17.8559 27.2002 16.9131C22.1131 15.67 17.1398 13.9262 12.4906 11.5533C9.63454 10.0821 6.88625 8.371 4.49572 6.2447C2.97157 4.87749 1.60087 3.31737 0.639659 1.51987C0.39483 1.0275 0.135346 0.53514 0 0Z",
                        fill: "rgba(251,238,190,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283683")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  position="absolute"
                  top="82.39%"
                  bottom="9.12%"
                  left="45.91%"
                  right="45.67%"
                  {...getOverrideProps(overrides, "Group3283684")}
                >
                  <Icon
                    width="6.9443359375px"
                    height="4.601806640625px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 6.9443359375,
                      height: 4.601806640625,
                    }}
                    paths={[
                      {
                        d: "M0.289726 1.08094C0.921633 0.386439 1.90269 0.144875 2.81391 0.0291243C3.41478 -0.0228796 4.02341 -0.00945802 4.61652 0.103776C5.38033 0.248884 6.18724 0.521485 6.68898 1.13127C7.0295 1.51795 7.00105 2.09166 6.77087 2.52447C6.12862 3.84386 4.59842 4.79922 3.07684 4.56688C1.88458 4.36054 0.808702 3.59977 0.215588 2.57563C-0.064589 2.12018 -0.103384 1.48859 0.289726 1.08094Z",
                        fill: "rgba(85,48,24,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector3283685")}
                  ></Icon>
                </View>
              </View>
            </View>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="name"
            placeholder="Johnny Fox"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenNineSevenValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenNineSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247797")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="id"
            placeholder="Fox321"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenNineEightValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenNineEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247798")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="image"
            placeholder="http://foximage.com/e345.png"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenNineNineValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenNineNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247799")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3247800")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
