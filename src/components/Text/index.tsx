import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[76px]",
  h2: "sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "sm:text-[34px] md:text-[36px] text-[38px]",
  h4: "sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "text-[20px]",
  body1: "text-[18px]",
  body2: "text-[12px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
