/** Ícones em SVG usados no cabeçalho, no hero e nos diferenciais. */

type IconProps = {
  size?: number;
  className?: string;
};

export function BrandFlame({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.8c.9 2.6-.4 4-1.5 5.3-1.2 1.4-2.3 2.7-2.3 4.9a3.8 3.8 0 0 0 7.6 0c0-1.4-.5-2.4-1.1-3.3" />
      <path d="M12 21.2a5.4 5.4 0 0 0 5.4-5.4c0-3.4-2.3-5.6-4-7.8" />
      <path d="M6.6 15.8A5.4 5.4 0 0 0 12 21.2" />
      <path d="M4 9.4h16" />
    </svg>
  );
}

export function GridIcon({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </svg>
  );
}

export function ArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ size = 13, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z" />
    </svg>
  );
}

export function FlameIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.6 1.5c.5 2.9-.9 4.4-2.2 5.7-.9.9-1.8 1.8-1.8 3.6 0 1.9 1.4 3.3 3.2 3.6-.9-.9-1.2-2-1-3 .4 1.1 1.5 1.6 2.6 1.9-.2-.9 0-1.7.5-2.4.7 1 2.2 1.4 2.6 3.3.3 1.3-.2 2.7-1.3 3.6 2-.7 3.4-2.6 3.4-4.9 0-2.4-1.4-4.2-2.7-5.8-1-1.3-2-2.5-2-4.6 0-.7-.1-1.3-.3-2z" />
      <path d="M9.1 7.9C7.3 9.9 5.4 11.8 5.4 15a6.6 6.6 0 0 0 13.2 0c0-1.3-.3-2.4-.8-3.5.2 3.5-1.6 5.9-4.6 5.9-2.6 0-4.6-1.9-4.6-4.4 0-1.7 1-3 2-4z" />
    </svg>
  );
}

export function SteakIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 15.5c-1.6-1.9-1-4.8 1-6.8 2.4-2.4 6-3.4 8.6-2.8 3.3.7 5.4 3.3 5.4 6.3 0 2.7-1.9 5.1-4.6 5.8-3 .8-6.4.1-8.3-.9-1-.5-1.7-1-2.1-1.6Z" />
      <path d="M9.5 10.5c1.6-.7 3.4-.6 4.9.4" />
      <path d="M8.5 14c1.4-.5 2.9-.4 4.2.4" />
    </svg>
  );
}

export function CoffeeIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 9h13v6.5A3.5 3.5 0 0 1 13.5 19h-6A3.5 3.5 0 0 1 4 15.5z" />
      <path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8.5 3v2.5M12 2.5v3M15.5 3.5v2" />
    </svg>
  );
}

export function ClockIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 2" />
    </svg>
  );
}
