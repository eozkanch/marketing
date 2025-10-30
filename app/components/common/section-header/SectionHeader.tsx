type Props = {
  title2: string;
  title3?: string;
};

export default function SectionHeader({ title2, title3 }: Props) {
  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">{title2}</h2>
      {title3 ? (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{title3}</p>
      ) : null}
    </div>
  );
}


