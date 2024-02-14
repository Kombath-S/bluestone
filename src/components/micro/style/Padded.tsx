import React, { ReactNode } from "react"

export const Padded = (
  {children, style,className}:
  {children: ReactNode | string,
    style?: React.CSSProperties,
    className?: string,
  }) => {
  return (
    <div className={`w-full max-w-pad mx-auto px-3 ${className}`} style={style}>
        {children} 
    </div>
)
}
