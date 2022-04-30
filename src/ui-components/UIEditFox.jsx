/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Fox } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UIEditFox(props) {
  const { fx, overrides, ...rest } = props;
  const [
    textFieldThreeTwoFourSevenSevenOneEightValue,
    setTextFieldThreeTwoFourSevenSevenOneEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoFourSevenSevenOneSevenValue,
    setTextFieldThreeTwoFourSevenSevenOneSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoFourSevenSevenOneNineValue,
    setTextFieldThreeTwoFourSevenSevenOneNineValue,
  ] = useStateMutationAction("");
  const iconOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      fid: textFieldThreeTwoFourSevenSevenOneEightValue,
      name: textFieldThreeTwoFourSevenSevenOneSevenValue,
      src: textFieldThreeTwoFourSevenSevenOneNineValue,
    },
    id: fx?.id,
    model: Fox,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeTwoFourSevenSevenOneEightValue === "" &&
      fx !== undefined &&
      fx?.fid !== undefined
    )
      setTextFieldThreeTwoFourSevenSevenOneEightValue(fx?.fid);
  }, [fx]);
  useEffect(() => {
    if (
      textFieldThreeTwoFourSevenSevenOneSevenValue === "" &&
      fx !== undefined &&
      fx?.name !== undefined
    )
      setTextFieldThreeTwoFourSevenSevenOneSevenValue(fx?.name);
  }, [fx]);
  useEffect(() => {
    if (
      textFieldThreeTwoFourSevenSevenOneNineValue === "" &&
      fx !== undefined &&
      fx?.src !== undefined
    )
      setTextFieldThreeTwoFourSevenSevenOneNineValue(fx?.src);
  }, [fx]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UIEditFox")}
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
            onClick={() => {
              iconOnClick();
            }}
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
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="228px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={fx?.id}
            {...getOverrideProps(overrides, "Edit")}
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
          {...getOverrideProps(overrides, "Divider3247712")}
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
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src={fx?.src}
            {...getOverrideProps(overrides, "image")}
          ></Image>
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
            placeholder="Jane Fox"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenOneSevenValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenOneSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247717")}
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
            placeholder="F00008"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenOneEightValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenOneEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247718")}
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
            placeholder="https://art.com/fox-drawing.jpg"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeTwoFourSevenSevenOneNineValue}
            onChange={(event) => {
              setTextFieldThreeTwoFourSevenSevenOneNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3247719")}
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
          {...getOverrideProps(overrides, "Divider3247720")}
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
