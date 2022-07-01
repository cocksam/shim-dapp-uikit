import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 70 70" {...props}>
      <circle cx="35" cy="35" r="35" fill="#1B3D51"></circle>
      <path d="M69.7275 30.6263C68.9952 24.7401 66.795 19.3071 63.5116 14.7017C57.173 5.80098 46.7609 0 34.9966 0C27.2139 0 20.0272 2.53772 14.2166 6.8365C6.65191 12.4263 1.4169 21 0.252045 30.817C0.0817457 32.1898 0 33.583 0 35C0 36.71 0.126021 38.3893 0.361035 40.038C1.26703 46.3158 3.83856 52.0623 7.61921 56.8005C14.0259 64.8428 23.9101 70 34.9966 70C44.1655 70 52.5068 66.4779 58.7466 60.711C65.0954 54.8419 69.2643 46.6599 69.908 37.4968V37.4934C69.9693 36.6691 70 35.838 70 35C70 33.5182 69.9046 32.0569 69.7275 30.6263ZM60.5995 45.3654L28.4162 18.3362C29.547 17.9105 30.6403 17.6073 31.686 17.4029C38.9237 15.9961 43.951 19.3173 43.951 19.3173V22.8667V26.5421L46.4203 24.1747L51.0218 19.7533L53.0007 17.856C52.5715 17.3654 52.0027 16.7693 51.2875 16.1392C51.0797 15.9552 50.4292 15.3898 49.4755 14.7256C49.1587 14.5041 47.3978 13.2915 45.1192 12.3207C40.9537 10.5426 36.846 10.3246 36.2807 10.3007C34.3971 10.2156 32.6601 10.3518 31.1172 10.5971C27.2718 11.2102 24.6356 12.5182 23.968 12.8657C20.8208 14.4769 18.6717 16.4832 17.408 17.8526L17.97 18.326L54.1928 48.8161L57.7214 51.7864C57.7112 51.8 57.7009 51.8136 57.6907 51.8273L57.6975 51.8341C55.7221 54.4978 53.2902 56.7971 50.5143 58.6195H50.5109C46.0593 61.5523 40.7289 63.2589 35 63.2589C26.3828 63.2589 18.6683 59.4029 13.4877 53.3192C9.57765 48.7309 7.10491 42.8754 6.78134 36.4545C6.7575 35.9742 6.74387 35.4871 6.74387 35C6.74387 31.1747 7.5034 27.5265 8.87942 24.2019L22.0504 35.2623L41.5804 51.6603C40.923 51.909 40.2861 52.1134 39.656 52.2837H39.6526C31.703 54.4195 26.0456 50.6793 26.0456 50.6793V49.6745V43.4579L17.6226 51.5411L17.6192 51.5445L16.9959 52.1406C17.4251 52.6346 17.9939 53.2272 18.7091 53.8574C18.9169 54.0414 19.5674 54.6102 20.5211 55.2711C20.8413 55.4925 22.5988 56.7051 24.8774 57.6759C29.0429 59.454 33.1505 59.672 33.7159 59.6993C40.2963 59.9956 45.092 57.618 46.032 57.1343C46.4033 56.9436 46.7575 56.7494 47.1015 56.5484C49.673 55.0565 51.4748 53.3533 52.5886 52.144L49.4959 49.5382L14.2507 19.8725L12.2786 18.2136C12.282 18.2102 12.2854 18.2102 12.2854 18.2068L12.2786 18.1966C15.7255 13.5367 20.5722 9.98053 26.1989 8.14112C28.968 7.23163 31.9278 6.74112 35 6.74112C44.3665 6.74112 52.6669 11.2988 57.8031 18.3158C60.4802 21.964 62.299 26.2764 62.9666 30.9635C63.1574 32.2818 63.2561 33.6307 63.2561 35C63.2561 38.3961 62.6567 41.6526 61.5565 44.6672C61.233 44.909 60.9162 45.1406 60.5995 45.3654Z" fill="url(#paint0_linear_logoround)"/>
      <defs>
      <linearGradient id="paint0_linear_logoround" x1="0" y1="34.9986" x2="70" y2="34.9986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#216DAB"/>
      <stop offset="0.25" stop-color="#84C1FF"/>
      <stop offset="0.3076" stop-color="#92C8FF"/>
      <stop offset="0.4151" stop-color="#B5DAFF"/>
      <stop offset="0.5" stop-color="#D6EAFF"/>
      <stop offset="0.5663" stop-color="#D1E7FD"/>
      <stop offset="0.6411" stop-color="#C4DDF7"/>
      <stop offset="0.72" stop-color="#ADCEEC"/>
      <stop offset="0.8018" stop-color="#8EB8DD"/>
      <stop offset="0.8858" stop-color="#659CCB"/>
      <stop offset="0.9704" stop-color="#347AB4"/>
      <stop offset="1" stop-color="#216DAB"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
