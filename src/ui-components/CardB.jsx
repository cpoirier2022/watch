/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Fox } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardB(props) {
  const { cb, overrides, ...rest } = props;
  const cardBOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${cb?.id}`,
  });
  const vectorOnClick = useDataStoreDeleteAction({
    id: cb?.id,
    model: Fox,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        cardBOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "CardB")}
    >
      <Image
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={cb?.src}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="row"
        height="88px"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="240px"
          height="22px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            height="22px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={cb?.name}
            {...getOverrideProps(overrides, "Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            height="22px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={cb?.fid}
            {...getOverrideProps(overrides, "FID0658")}
          ></Text>
        </Flex>
        <View
          width="25px"
          height="30px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "trash 1")}
        >
          <Icon
            width="24.998291015625px"
            height="29.998046875px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 24.998291015625,
              height: 29.998046875,
            }}
            paths={[
              {
                d: "M1.53982e-09 8.43695L1.53982e-09 6.3863C0.0372 5.64417 0.3162 5.01921 0.837 4.51143C1.3578 4.00365 1.9716 3.74976 2.6784 3.74976L5.3568 3.74976L5.3568 2.81232C5.3568 2.03112 5.6172 1.3671 6.138 0.820259C6.6588 0.27342 7.2912 0 8.0352 0L16.9632 0C17.7072 0 18.3396 0.27342 18.8604 0.820259C19.3812 1.3671 19.6416 2.03112 19.6416 2.81232L19.6416 3.74976L22.32 3.74976C23.0268 3.74976 23.6406 4.00365 24.1614 4.51143C24.6822 5.01921 24.9612 5.64417 24.9984 6.3863L24.9984 8.43695C24.9984 8.94473 24.8217 9.38416 24.4683 9.75524C24.1149 10.1263 23.6964 10.3119 23.2128 10.3118L23.2128 26.2483C23.2128 27.3029 22.8687 28.1915 22.1805 28.9142C21.4923 29.6368 20.646 29.9981 19.6416 29.9981L5.3568 29.9981C4.3524 29.9981 3.50609 29.6368 2.81789 28.9142C2.12968 28.1916 1.78558 27.3029 1.7856 26.2483L1.7856 10.3118C1.302 10.3118 0.883495 10.1263 0.530086 9.75524C0.176676 9.38418 -1.90461e-05 8.94475 1.53982e-09 8.43695L1.53982e-09 8.43695ZM1.7856 8.43695L23.2128 8.43695L23.2128 6.56207C23.2128 6.28865 23.1291 6.06405 22.9617 5.88828C22.7943 5.7125 22.5804 5.62461 22.32 5.62461L2.67837 5.62461C2.41797 5.62461 2.20407 5.7125 2.03666 5.88828C1.86925 6.06405 1.78554 6.28865 1.78554 6.56207L1.78554 8.43695L1.7856 8.43695ZM3.5712 26.2483C3.5712 26.7561 3.7479 27.1955 4.10129 27.5666C4.45468 27.9377 4.87318 28.1232 5.3568 28.1232L19.6416 28.1232C20.1252 28.1232 20.5437 27.9376 20.8971 27.5666C21.2505 27.1955 21.4272 26.7561 21.4272 26.2483L21.4272 10.3118L3.5712 10.3118L3.5712 26.2483L3.5712 26.2483ZM5.3568 25.3109L5.3568 13.1241C5.3568 12.8507 5.4405 12.6261 5.60791 12.4503C5.77532 12.2746 5.98923 12.1867 6.24963 12.1867L8.03523 12.1867C8.29563 12.1867 8.50953 12.2746 8.67694 12.4503C8.84435 12.6261 8.92806 12.8507 8.92806 13.1241L8.92806 25.3109C8.92806 25.5843 8.84435 25.8089 8.67694 25.9847C8.50953 26.1604 8.29563 26.2483 8.03523 26.2483L6.24963 26.2483C5.98923 26.2483 5.77532 26.1604 5.60791 25.9847C5.4405 25.8089 5.3568 25.5843 5.3568 25.3109ZM6.2496 25.3109L8.0352 25.3109L8.0352 13.1241L6.2496 13.1241L6.2496 25.3109L6.2496 25.3109ZM7.1424 3.74976L17.856 3.74976L17.856 2.81232C17.856 2.5389 17.7723 2.3143 17.6049 2.13852C17.4375 1.96274 17.2236 1.87485 16.9632 1.87485L8.03517 1.87485C7.77477 1.87485 7.56087 1.96274 7.39346 2.13852C7.22605 2.3143 7.14234 2.5389 7.14234 2.81232L7.14234 3.74976L7.1424 3.74976ZM10.7136 25.3109L10.7136 13.1241C10.7136 12.8507 10.7973 12.6261 10.9647 12.4503C11.1321 12.2746 11.346 12.1867 11.6064 12.1867L13.392 12.1867C13.6524 12.1867 13.8663 12.2746 14.0337 12.4503C14.2012 12.6261 14.2849 12.8507 14.2849 13.1241L14.2849 25.3109C14.2849 25.5843 14.2012 25.8089 14.0337 25.9847C13.8663 26.1604 13.6524 26.2483 13.392 26.2483L11.6064 26.2483C11.346 26.2483 11.1321 26.1604 10.9647 25.9847C10.7973 25.8089 10.7136 25.5843 10.7136 25.3109ZM11.6064 25.3109L13.392 25.3109L13.392 13.1241L11.6064 13.1241L11.6064 25.3109ZM16.0704 25.3109L16.0704 13.1241C16.0704 12.8507 16.1541 12.6261 16.3215 12.4503C16.4889 12.2746 16.7028 12.1867 16.9632 12.1867L18.7488 12.1867C19.0092 12.1867 19.2231 12.2746 19.3905 12.4503C19.558 12.6261 19.6417 12.8507 19.6417 13.1241L19.6417 25.3109C19.6417 25.5843 19.558 25.8089 19.3905 25.9847C19.2231 26.1604 19.0092 26.2483 18.7488 26.2483L16.9632 26.2483C16.7028 26.2483 16.4889 26.1604 16.3215 25.9847C16.1541 25.8089 16.0704 25.5843 16.0704 25.3109ZM16.9632 25.3109L18.7488 25.3109L18.7488 13.1241L16.9632 13.1241L16.9632 25.3109Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0.01%"
            bottom="0%"
            left="0%"
            right="0.01%"
            onClick={() => {
              vectorOnClick();
            }}
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
