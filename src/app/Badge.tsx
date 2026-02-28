type Props = {
  children: React.ReactNode[];
};

export default function Badge({ children }: Props) {
  return (
    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-100 rounded-full">
      {children}
    </span>
  );
}