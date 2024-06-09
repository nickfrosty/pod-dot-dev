type SimpleComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

type Option<T> = Some<T> | None;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type NotFoundResponse = { notFound: true };

type ImageSize = {
  width: number;
  height: number;
};

type LinkDetails = {
  title: string;
  href: string;
  label?: string;
  description?: React.ReactNode;
  icon?: string;
};
