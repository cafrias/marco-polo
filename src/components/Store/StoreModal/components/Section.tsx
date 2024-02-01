import classNames from "classnames";

interface SectionProps {
  title: string;
  gutter?: boolean;
  children?: React.ReactNode;
}

export function Section({ title, gutter = false, children }: SectionProps) {
  return (
    <section>
      <h3 className="font-bold text-lg">{title}</h3>
      <div
        className={classNames({
          "ml-2": gutter,
        })}
      >
        {children}
      </div>
    </section>
  );
}
