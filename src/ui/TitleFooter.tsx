interface TitleFooterProps {
  children: React.ReactNode;
}

export default function TitleFooter({ children }: TitleFooterProps) {
  return <h2 className="text-base font-black">{children}</h2>;
}
