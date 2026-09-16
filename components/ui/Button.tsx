import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};

interface LinkButtonProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

interface NativeButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  href?: undefined;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Shared paper-cutout button. Renders a Link when `href` is given, otherwise a <button>. */
export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(variantClass[variant], className);

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _variant, className: _className, href: _href, children: btnChildren, ...buttonAttrs } =
    props as NativeButtonProps;
  return (
    <button className={classes} {...buttonAttrs}>
      {btnChildren}
    </button>
  );
}
