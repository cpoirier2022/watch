/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const iconOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="320px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="39px"
        height="28px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="37px"
          height="27px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "foxface 1")}
        >
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="4.87%"
            bottom="5.57%"
            left="0.29%"
            right="0.29%"
            {...getOverrideProps(overrides, "Group3272652")}
          >
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group3272653")}
            >
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="0%"
                bottom="85.66%"
                left="0%"
                right="54.26%"
                {...getOverrideProps(overrides, "Group3272654")}
              >
                <Icon
                  width="16.8232421875px"
                  height="3.465576171875px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 16.8232421875,
                    height: 3.465576171875,
                  }}
                  paths={[
                    {
                      d: "M0 0L16.8233 0C16.6856 0.0250622 16.5484 0.0527428 16.41 0.0733163C15.1002 0.213964 13.8046 0.503862 12.5785 0.977051C11.0227 1.56545 9.5898 2.43365 8.30496 3.46569C7.50183 3.02654 6.63451 2.71308 5.76449 2.4258C5.22626 2.08764 4.63343 1.84263 4.03176 1.63241C3.23556 1.3586 2.41475 1.14351 1.57549 1.03989C1.29522 1.01446 1.01227 1.00922 0.731614 1.02643C0.557842 1.04588 0.370613 1.08553 0.239514 1.20635C0.138019 1.30099 0.0926532 1.43378 0.0580524 1.56246C0.0434432 1.5864 0.0146092 1.63391 0 1.65785L0 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272655")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="0%"
                bottom="99.69%"
                left="44.62%"
                right="52.51%"
                {...getOverrideProps(overrides, "Group3272656")}
              >
                <Icon
                  width="1.05615234375px"
                  height="0.0732421875px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 1.05615234375,
                    height: 0.0732421875,
                  }}
                  paths={[
                    {
                      d: "M0.413288 0L1.0561 0C0.703935 0.0205734 0.352544 0.0534909 0 0.0733162C0.138403 0.0527428 0.275654 0.0250622 0.413288 0Z",
                      fill: "rgba(255,223,211,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272657")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="0%"
                bottom="19.49%"
                left="0.58%"
                right="0%"
                {...getOverrideProps(overrides, "Group3272658")}
              >
                <Icon
                  width="36.5703125px"
                  height="19.4658203125px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 36.5703125,
                    height: 19.4658203125,
                  }}
                  paths={[
                    {
                      d: "M17.2542 0L19.3467 0C20.9718 0.0718199 22.5923 0.368825 24.1113 0.942637C25.6045 1.49737 26.9897 2.30722 28.2361 3.27716C29.0238 2.88402 29.8596 2.59412 30.6973 2.32143C31.5427 2.08053 32.4004 1.87069 33.2747 1.75809C33.7406 1.70946 34.2154 1.66458 34.6806 1.74612C34.9028 1.78802 35.1427 1.85909 35.2865 2.04088C35.4653 2.26869 35.5018 2.56532 35.5149 2.8425C35.4864 3.93813 35.0739 4.97278 34.701 5.9921C34.5499 6.28574 34.433 6.59472 34.2873 6.89097C34.0036 7.47414 33.7141 8.05767 33.3481 8.59707C33.3051 8.6442 33.3227 8.70031 33.3627 8.74258C34.1582 9.81053 34.9136 10.9054 35.6602 12.0063C36.0085 12.4959 36.2999 13.0312 36.4476 13.6125C36.6448 14.3213 36.5944 15.0788 36.3665 15.775C36.3584 15.7922 36.343 15.8266 36.3353 15.8438C36.2231 15.8629 36.1116 15.8831 36.0005 15.904C35.9828 15.8879 35.9478 15.8561 35.9305 15.84C34.5676 16.0705 33.2535 16.5014 31.9283 16.8758C30.2006 17.3801 28.4717 17.8839 26.7198 18.304C23.8844 18.9837 20.9803 19.4838 18.0511 19.4655C16.1542 19.4744 14.2623 19.2586 12.3989 18.9234C9.80769 18.4645 7.27299 17.7552 4.75252 17.0206C3.75063 16.7292 2.75144 16.4296 1.74264 16.1625C1.23977 16.0304 0.731142 15.919 0.217513 15.8322C-0.0100834 15.1443 -0.0750559 14.3984 0.0994857 13.6918C0.232506 13.1472 0.477787 12.6313 0.79919 12.1682C1.52081 11.0924 2.26665 10.0316 3.02287 8.97861C2.75759 8.77625 2.59535 8.48298 2.42696 8.20543C2.08711 7.61965 1.79069 7.01105 1.51543 6.39422C1.43392 6.21766 1.37202 6.03288 1.28052 5.86043C1.09791 5.35582 0.90799 4.85233 0.769587 4.33388C0.621188 3.78962 0.499317 3.22666 0.546989 2.66033C0.581974 2.36295 0.70077 2.03265 0.999105 1.8965C1.36395 1.73714 1.77608 1.73266 2.169 1.745C3.32312 1.81383 4.45149 2.09475 5.55256 2.42579C6.42258 2.71307 7.28991 3.02654 8.09303 3.46569C9.37787 2.43365 10.8107 1.56545 12.3666 0.977051C13.5926 0.503862 14.8882 0.213964 16.1981 0.0733162C16.5506 0.0534909 16.902 0.0205734 17.2542 0Z",
                      fill: "rgba(255,105,50,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272659")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="4.16%"
                bottom="75.22%"
                left="84.03%"
                right="0.84%"
                {...getOverrideProps(overrides, "Group3272660")}
              >
                <Icon
                  width="5.565673828125px"
                  height="4.985595703125px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.565673828125,
                    height: 4.985595703125,
                  }}
                  paths={[
                    {
                      d: "M2.80804 0.259599C3.40009 0.118578 4.00407 0.00374062 4.61496 0C4.88792 0.0231919 5.21432 0.0213216 5.40501 0.245385C5.60762 0.506481 5.56879 0.855481 5.5488 1.16221C5.44845 1.87069 5.19933 2.54961 4.9256 3.2102C4.65994 3.82067 4.3716 4.42591 4.00368 4.9855C4.3766 3.96618 4.78912 2.93153 4.81757 1.8359C4.8045 1.55872 4.76797 1.26209 4.5892 1.03428C4.44542 0.852488 4.20552 0.781416 3.98331 0.739521C3.51812 0.657976 3.04332 0.702863 2.57737 0.751491C1.70312 0.864084 0.84541 1.07393 0 1.31483C0.874628 0.828174 1.83614 0.50648 2.80804 0.259599Z",
                      fill: "rgba(88,61,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272661")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="4.21%"
                bottom="75.76%"
                left="0.12%"
                right="84.33%"
                {...getOverrideProps(overrides, "Group3272662")}
              >
                <Icon
                  width="5.720458984375px"
                  height="4.843994140625px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.720458984375,
                    height: 4.843994140625,
                  }}
                  paths={[
                    {
                      d: "M0.195412 0.189948C0.326511 0.0691259 0.513739 0.0294754 0.687512 0.0100242C0.968163 -0.00718269 1.25112 -0.00194587 1.53139 0.0234903C2.37065 0.127105 3.19146 0.342191 3.98766 0.616004C4.58933 0.826227 5.18215 1.07124 5.72039 1.40939C4.61931 1.07834 3.49094 0.797424 2.33682 0.728597C1.94391 0.716253 1.53177 0.720742 1.16693 0.880092C0.86859 1.01625 0.749794 1.34655 0.714808 1.64393C0.667136 2.21026 0.789008 2.77322 0.937407 3.31748C1.07581 3.83593 1.26573 4.33942 1.44834 4.84403C1.40144 4.82009 1.38337 4.77221 1.38799 4.72208C0.888966 3.84191 0.469912 2.91574 0.17965 1.94991C0.0720027 1.48981 -0.0398732 1.02186 0.0139503 0.546055C0.0485511 0.417378 0.0939165 0.284586 0.195412 0.189948Z",
                      fill: "rgba(88,61,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272663")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="6.46%"
                bottom="87.73%"
                left="0%"
                right="99.39%"
                {...getOverrideProps(overrides, "Group3272664")}
              >
                <Icon
                  width="0.2236328125px"
                  height="1.40380859375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 0.2236328125,
                    height: 1.40380859375,
                  }}
                  paths={[
                    {
                      d: "M0.0580524 0C0.00422899 0.475808 0.116105 0.94376 0.223752 1.40386C0.0884242 1.12181 0.069586 0.806105 0 0.506481L0 0.0953859C0.0146092 0.0714459 0.0434432 0.02394 0.0580524 0Z",
                      fill: "rgba(213,206,191,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272665")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="14.57%"
                bottom="71.88%"
                left="81.65%"
                right="8.38%"
                {...getOverrideProps(overrides, "Group3272666")}
              >
                <Icon
                  width="3.6650390625px"
                  height="3.2763671875px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 3.6650390625,
                    height: 3.2763671875,
                  }}
                  paths={[
                    {
                      d: "M2.3561 0.0214479C2.65752 -0.000247824 2.98123 -0.0365322 3.26265 0.0966345C3.48602 0.196509 3.67979 0.414215 3.66402 0.666334C3.64557 1.05873 3.44642 1.41259 3.24919 1.74513C3.07158 2.04177 2.87012 2.32418 2.69135 2.62007C2.53449 2.86732 2.35341 3.11533 2.08737 3.26084C2.04546 3.29189 1.9951 3.27356 1.97049 3.23316C1.35959 2.50972 0.713709 1.81396 0.031685 1.15336C-0.0140652 1.12531 -0.00829856 1.06995 0.0362983 1.04376C0.564925 0.623316 1.19159 0.332669 1.8394 0.132171C2.01048 0.0902756 2.18079 0.0446398 2.3561 0.0214479Z",
                      fill: "rgba(255,195,126,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272667")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="16.11%"
                bottom="70.48%"
                left="8.3%"
                right="81.93%"
                {...getOverrideProps(overrides, "Group3272668")}
              >
                <Icon
                  width="3.592529296875px"
                  height="3.243408203125px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 3.592529296875,
                    height: 3.243408203125,
                  }}
                  paths={[
                    {
                      d: "M0.650282 0.0168587C1.36267 -0.0669314 2.06046 0.173965 2.69442 0.466109C3.00429 0.610497 3.29801 0.788925 3.56751 0.99653C3.62326 1.02645 3.57213 1.07583 3.54521 1.10389C2.88049 1.77084 2.24922 2.46922 1.65524 3.19639C1.62795 3.24689 1.55913 3.25849 1.51453 3.2222C1.29155 3.07782 1.12931 2.86348 0.989754 2.64503C0.694879 2.15837 0.344642 1.69977 0.11743 1.1772C0.038617 0.940046 -0.059034 0.675584 0.0455373 0.430947C0.149724 0.196409 0.403847 0.066235 0.650282 0.0168587Z",
                      fill: "rgba(255,195,126,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272669")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="59.37%"
                bottom="29.88%"
                left="21.37%"
                right="71.39%"
                {...getOverrideProps(overrides, "Group3272670")}
              >
                <Icon
                  width="2.659912109375px"
                  height="2.59765625px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.659912109375,
                    height: 2.59765625,
                  }}
                  paths={[
                    {
                      d: "M1.13835 0.0158127C1.69312 -0.0747099 2.2821 0.231646 2.52353 0.724283C2.70423 1.05645 2.69269 1.45595 2.56352 1.8027C2.61696 1.54422 2.61234 1.25919 2.47394 1.0254C2.28479 0.674534 1.87112 0.457205 1.46591 0.492367C0.940744 0.52491 0.49055 0.990614 0.501699 1.50495C0.48363 1.93474 0.787347 2.34845 1.20486 2.48312C1.41823 2.5497 1.6539 2.55793 1.86804 2.48948C1.53626 2.629 1.14643 2.63723 0.814258 2.49359C0.503236 2.36865 0.250267 2.12028 0.111095 1.82327C-0.026539 1.51767 -0.0361505 1.16006 0.081492 0.846975C0.247575 0.413439 0.664707 0.0775327 1.13835 0.0158127Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272671")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="59.37%"
                bottom="29.88%"
                left="71.74%"
                right="21.02%"
                {...getOverrideProps(overrides, "Group3272672")}
              >
                <Icon
                  width="2.660888671875px"
                  height="2.5986328125px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.660888671875,
                    height: 2.5986328125,
                  }}
                  paths={[
                    {
                      d: "M1.1384 0.0155241C1.68278 -0.0723806 2.25792 0.220884 2.50858 0.696317C2.73541 1.10629 2.70696 1.63521 2.43707 2.01938C2.1176 2.49481 1.45096 2.73197 0.900429 2.52137C1.14917 2.56027 1.41328 2.52698 1.6328 2.40204C1.99111 2.20566 2.20679 1.79269 2.15296 1.39507C2.10683 0.943199 1.717 0.553426 1.25335 0.500309C0.746649 0.419511 0.219569 0.762152 0.0950071 1.24582C0.0542554 1.40404 0.0638669 1.56975 0.078476 1.73097C-0.0280164 1.4422 -0.0276312 1.11527 0.0888569 0.829484C0.256092 0.402304 0.672066 0.0768704 1.1384 0.0155241Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272673")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="61.39%"
                bottom="30.13%"
                left="22.73%"
                right="71.57%"
                {...getOverrideProps(overrides, "Group3272674")}
              >
                <Icon
                  width="2.09423828125px"
                  height="2.04833984375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.09423828125,
                    height: 2.04833984375,
                  }}
                  paths={[
                    {
                      d: "M0.964974 0.00371367C1.37019 -0.0314485 1.78386 0.185884 1.97301 0.536757C2.11141 0.770548 2.11603 1.05559 2.06259 1.31407C1.95379 1.63165 1.69774 1.89873 1.36711 2.00085C1.15297 2.0693 0.917302 2.06107 0.70393 1.99449C0.286414 1.85983 -0.0173036 1.44611 0.000765651 1.01631C-0.0103835 0.501968 0.439811 0.0362574 0.964974 0.00371367Z",
                      fill: "rgba(85,48,24,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272675")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="61.39%"
                bottom="30.13%"
                left="71.92%"
                right="22.38%"
                {...getOverrideProps(overrides, "Group3272676")}
              >
                <Icon
                  width="2.09521484375px"
                  height="2.04833984375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.09521484375,
                    height: 2.04833984375,
                  }}
                  paths={[
                    {
                      d: "M0.0291087 0.757328C0.153672 0.273665 0.68076 -0.0689769 1.18747 0.0118207C1.65113 0.0649376 2.04096 0.454711 2.0871 0.906579C2.14092 1.30421 1.92524 1.71717 1.56693 1.91356C1.34741 2.03849 1.08329 2.07179 0.834543 2.03288C0.432787 1.94909 0.101771 1.63301 0.0125775 1.24249C-0.00203184 1.08127 -0.0116435 0.915557 0.0291087 0.757328Z",
                      fill: "rgba(85,48,24,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272677")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="63.9%"
                bottom="33.93%"
                left="25.84%"
                right="72.69%"
                {...getOverrideProps(overrides, "Group3272678")}
              >
                <Icon
                  width="0.5419921875px"
                  height="0.525146484375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 0.5419921875,
                    height: 0.525146484375,
                  }}
                  paths={[
                    {
                      d: "M0.19704 0.0125078C0.403495 -0.0566943 0.613794 0.175227 0.518064 0.364878C0.455397 0.535451 0.193964 0.582584 0.0740132 0.443806C-0.0666986 0.315502 0.00365779 0.0491662 0.19704 0.0125078Z",
                      fill: "rgba(153,92,60,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272679")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="63.9%"
                bottom="33.93%"
                left="75.01%"
                right="23.53%"
                {...getOverrideProps(overrides, "Group3272680")}
              >
                <Icon
                  width="0.535888671875px"
                  height="0.52587890625px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 0.535888671875,
                    height: 0.52587890625,
                  }}
                  paths={[
                    {
                      d: "M0.181668 0.0128014C0.346219 -0.0414379 0.545371 0.083499 0.534991 0.258935C0.554983 0.467663 0.26894 0.607563 0.106312 0.472526C-0.0693885 0.361803 -0.0155626 0.0681629 0.181668 0.0128014Z",
                      fill: "rgba(153,92,60,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272681")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="65.24%"
                bottom="0%"
                left="49.31%"
                right="0.55%"
                {...getOverrideProps(overrides, "Group3272682")}
              >
                <Icon
                  width="18.442138671875px"
                  height="8.40380859375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 18.442138671875,
                    height: 8.40380859375,
                  }}
                  paths={[
                    {
                      d: "M18.4099 0.0688273C18.4176 0.0516204 18.433 0.0172068 18.441 0C18.4537 0.183664 18.3568 0.347129 18.2853 0.510594C17.987 1.13116 17.5795 1.69974 17.1035 2.20322C16.3911 2.96556 15.5584 3.61419 14.6746 4.1779C13.6377 4.85719 12.5239 5.41717 11.3859 5.91691C9.93156 6.5416 8.42605 7.05294 6.89054 7.45393C6.75214 7.48647 6.61451 7.52164 6.48187 7.57101C6.2535 7.59458 6.03706 7.67126 5.81331 7.71615C4.09634 8.0932 2.34478 8.35392 0.583983 8.39694C0.38945 8.35617 0.194149 8.43472 0 8.38909C0.0607435 8.35841 0.144939 8.3255 0.124179 8.24208C0.122256 7.55605 0.124948 6.87002 0.121872 6.18399C0.800431 6.28761 1.48283 5.86155 1.76925 5.27315C1.8719 5.08013 1.88459 4.82428 1.73273 4.65183C1.50898 4.37989 1.14913 4.25832 0.808504 4.19361C0.544 4.14311 0.272578 4.13713 0.00461442 4.16032C0.0488265 4.13189 0.126486 4.11767 0.11995 4.05147C0.129946 3.93102 0.124179 3.81057 0.125717 3.6905C3.05486 3.70882 5.95901 3.2087 8.79435 2.52903C10.5463 2.10896 12.2752 1.6051 14.0029 1.10086C15.3281 0.726428 16.6422 0.295509 18.0051 0.0650864C18.0224 0.0811711 18.0573 0.112967 18.075 0.129052C18.1861 0.108104 18.2976 0.0879044 18.4099 0.0688273Z",
                      fill: "rgba(245,232,187,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272683")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="65.48%"
                bottom="0.07%"
                left="1.17%"
                right="50.35%"
                {...getOverrideProps(overrides, "Group3272684")}
              >
                <Icon
                  width="17.835205078125px"
                  height="8.331787109375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 17.835205078125,
                    height: 8.331787109375,
                  }}
                  paths={[
                    {
                      d: "M0 0C0.513629 0.0867828 1.02226 0.198253 1.52513 0.330298C2.53393 0.597379 3.53312 0.897005 4.53501 1.1884C7.05548 1.92306 9.59018 2.63229 12.1814 3.09126C14.0448 3.42643 15.9367 3.64226 17.8336 3.63328C17.8321 3.75336 17.8379 3.87381 17.8279 3.99425C17.8344 4.06046 17.7567 4.07468 17.7125 4.10311C17.3062 4.15473 16.8686 4.26246 16.5868 4.57218C16.4115 4.75398 16.4288 5.03565 16.5538 5.23876C16.8183 5.6955 17.2981 6.03477 17.8298 6.12679C17.8329 6.81282 17.8302 7.49886 17.8321 8.18489C17.8528 8.26831 17.7687 8.30122 17.7079 8.3319C15.8252 8.27841 13.9603 7.96307 12.1303 7.54262C9.86161 6.98826 7.6437 6.21058 5.57034 5.15236C4.29665 4.49625 3.07101 3.73316 2.00492 2.78491C1.32521 2.17518 0.713929 1.47942 0.285264 0.677804C0.17608 0.458228 0.0603591 0.238653 0 0Z",
                      fill: "rgba(251,238,190,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272685")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                position="absolute"
                top="82.39%"
                bottom="9.12%"
                left="45.91%"
                right="45.67%"
                {...getOverrideProps(overrides, "Group3272686")}
              >
                <Icon
                  width="3.096923828125px"
                  height="2.05224609375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 3.096923828125,
                    height: 2.05224609375,
                  }}
                  paths={[
                    {
                      d: "M0.129207 0.48206C0.411014 0.172338 0.848528 0.0646088 1.2549 0.0129883C1.52287 -0.0102035 1.79429 -0.00421793 2.0588 0.0462803C2.39943 0.110993 2.75928 0.232563 2.98304 0.504505C3.1349 0.676948 3.12221 0.932805 3.01956 1.12582C2.73314 1.71422 2.05073 2.14027 1.37216 2.03666C0.840454 1.94464 0.360651 1.60537 0.0961443 1.14864C-0.0288043 0.945522 -0.0461055 0.663854 0.129207 0.48206Z",
                      fill: "rgba(85,48,24,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector3272687")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
      </Flex>
      <Flex
        gap="48px"
        direction="row"
        width="131px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3213247646")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The Leash"
          {...getOverrideProps(overrides, "text")}
        ></Text>
      </Flex>
      <Flex
        gap="31px"
        direction="row"
        width="25px"
        height="24px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3213247651")}
      >
        <View
          width="25px"
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
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="12.5%"
            bottom="4.17%"
            left="0%"
            right="3.51%"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "vector")}
          >
            <Icon
              width="7.77587890625px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 7.77587890625, height: 20 }}
              paths={[
                {
                  d: "M7.7758 17.627L0 20L0 0L7.7758 1.42402L7.7758 17.627Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="67.77%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "svg_1")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="16.14%"
              bottom="20.64%"
              left="0%"
              right="42.25%"
              {...getOverrideProps(overrides, "svg_2")}
            >
              <Icon
                width="13.931396484375px"
                height="12.6435546875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.931396484375,
                  height: 12.6435546875,
                }}
                paths={[
                  {
                    d: "M7.83886 12.4312L13.6598 6.90031C13.8325 6.75122 13.9314 6.54152 13.9314 6.32253C13.9314 6.10355 13.8325 5.89384 13.6598 5.74476L7.83886 0.212605C7.59091 -0.00266813 7.2276 -0.05958 6.91731 0.0653775C6.60488 0.190954 6.40351 0.474892 6.40351 0.78976L6.40351 2.76495L0.853467 2.76495C0.381946 2.76495 0 3.11879 0 3.55491L0 9.08706C0 9.52318 0.381946 9.8764 0.853467 9.8764L6.40351 9.8764L6.40351 11.8522C6.40351 12.1671 6.60488 12.4516 6.9166 12.5772C7.2276 12.7034 7.5902 12.6465 7.83886 12.4312L7.83886 12.4312Z",
                    fill: "rgba(167,169,172,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "svg_3")}
              ></Icon>
              <Icon
                width="13.931396484375px"
                height="12.6435546875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.931396484375,
                  height: 12.6435546875,
                }}
                paths={[
                  {
                    d: "M7.83886 12.4312L13.6598 6.90031C13.8325 6.75122 13.9314 6.54152 13.9314 6.32253C13.9314 6.10355 13.8325 5.89384 13.6598 5.74476L7.83886 0.212605C7.59091 -0.00266813 7.2276 -0.05958 6.91731 0.0653775C6.60488 0.190954 6.40351 0.474892 6.40351 0.78976L6.40351 2.76495L0.853467 2.76495C0.381946 2.76495 0 3.11879 0 3.55491L0 9.08706C0 9.52318 0.381946 9.8764 0.853467 9.8764L6.40351 9.8764L6.40351 11.8522C6.40351 12.1671 6.60488 12.4516 6.9166 12.5772C7.2276 12.7034 7.5902 12.6465 7.83886 12.4312L7.83886 12.4312Z",
                    fill: "rgba(167,169,172,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "svg_4")}
              ></Icon>
            </View>
            <Icon
              width="3.232666015625px"
              height="4.456298828125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.232666015625,
                height: 4.456298828125,
              }}
              paths={[
                {
                  d: "M3.23257 0.5C3.50871 0.5 3.73257 0.276142 3.73257 0C3.73257 -0.276142 3.50871 -0.5 3.23257 -0.5L3.23257 0.5ZM-0.5 4.45641C-0.5 4.73255 -0.276142 4.95641 0 4.95641C0.276142 4.95641 0.5 4.73255 0.5 4.45641L-0.5 4.45641ZM3.23257 -0.5L2.30959 -0.5L2.30959 0.5L3.23257 0.5L3.23257 -0.5ZM2.30959 -0.5C0.829555 -0.5 -0.5 0.549306 -0.5 1.99375L0.5 1.99375C0.5 1.23474 1.23854 0.5 2.30959 0.5L2.30959 -0.5ZM-0.5 1.99375L-0.5 4.45641L0.5 4.45641L0.5 1.99375L-0.5 1.99375Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="7.06%"
              bottom="70.65%"
              left="50.4%"
              right="36.2%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "svg_5")}
            ></Icon>
            <Icon
              width="3.232666015625px"
              height="4.302978515625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.232666015625,
                height: 4.302978515625,
              }}
              paths={[
                {
                  d: "M0.5 0C0.5 -0.276142 0.276142 -0.5 0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0L0.5 0ZM3.23257 4.80299C3.50871 4.80299 3.73257 4.57913 3.73257 4.30299C3.73257 4.02685 3.50871 3.80299 3.23257 3.80299L3.23257 4.80299ZM-0.5 0L-0.5 2.30924L0.5 2.30924L0.5 0L-0.5 0ZM-0.5 2.30924C-0.5 3.75288 0.828624 4.80299 2.30959 4.80299L2.30959 3.80299C1.23804 3.80299 0.5 3.06781 0.5 2.30924L-0.5 2.30924ZM2.30959 4.80299L3.23257 4.80299L3.23257 3.80299L2.30959 3.80299L2.30959 4.80299Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              position="absolute"
              top="66.67%"
              bottom="11.82%"
              left="50.4%"
              right="36.2%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "svg_6")}
            ></Icon>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
