interface TitleSecondProps {
  children: React.ReactNode;
}
export default function TitleSecond({ children }: TitleSecondProps) {
  return <h2 className="font-black text-2xl">{children}</h2>;
}
