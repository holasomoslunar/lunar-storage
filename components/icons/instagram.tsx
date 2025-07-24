const instagram = (props: React.PropsWithChildren) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="28"
        height="28"
        x="2"
        y="2"
        fill="url(#paint0_radial_87_7153)"
        rx="6"
      ></rect>
      <rect
        width="28"
        height="28"
        x="2"
        y="2"
        fill="url(#paint1_radial_87_7153)"
        rx="6"
      ></rect>
      <rect
        width="28"
        height="28"
        x="2"
        y="2"
        fill="url(#paint2_radial_87_7153)"
        rx="6"
      ></rect>
      <path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076"
        clipRule="evenodd"
      ></path>
      <defs>
        <radialGradient
          id="paint0_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-55.376 27.916 .066)scale(25.5196)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B13589"></stop>
          <stop offset="0.793" stopColor="#C62F94"></stop>
          <stop offset="1" stopColor="#8A3AC8"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-65.136 29.766 6.89)scale(22.5942)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E0E8B7"></stop>
          <stop offset="0.445" stopColor="#FB8A2E"></stop>
          <stop offset="0.715" stopColor="#E2425C"></stop>
          <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.157" stopColor="#406ADC"></stop>
          <stop offset="0.468" stopColor="#6A45BE"></stop>
          <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default instagram;
