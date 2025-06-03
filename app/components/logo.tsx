export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
      width={props.width || 120}
      height={props.height || 40}
      {...props}
    >
      {/* Square */}
      <path d="M10 10 H 90 V 90 H 10 Z" fill="white" />
      {/* Circle */}
      <path
        d="M150 50 
           m -40, 0
           a 40,40 0 1,0 80,0
           a 40,40 0 1,0 -80,0"
        fill="white"
      />
      {/* Triangle */}
      <path d="M210 90 L260 10 L310 90 Z" fill="white" />
    </svg>
  );
}
