import type React from "react"

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function RetroButton({ children, ...props }: RetroButtonProps) {
  return (
    <button
      className="relative bg-white text-black font-bold px-4 py-2 uppercase border border-black border-2"
      style={{
        boxShadow: "6px 6px 0 0 black",
      }}
      {...props}
    >
      {children}
    </button>
  )
}

