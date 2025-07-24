
const tiktok = (props: React.PropsWithChildren) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="512" height="512" fill="#fff" rx="15%"></rect>
      <defs>
        <path
          id="t"
          d="M219 200a117 117 0 1 0 101 115V187a150 150 0 0 0 88 28v-63a88 88 0 0 1-88-88h-64v252a54 54 0 1 1-37-51z"
          style={{ mixBlendMode: "multiply" }}
        ></path>
      </defs>
      <use x="18" y="15" fill="#f05" href="#t"></use>
      <use fill="#0ee" href="#t"></use>
    </svg>
  );
};

export default tiktok;
