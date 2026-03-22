import storedevlayout from "../../store-dev/app/layout";

export default function storelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <storedevlayout>{children}</storedevlayout>;
}
