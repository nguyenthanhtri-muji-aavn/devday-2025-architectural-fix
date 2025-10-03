import Logo from "@/components/logo";

export default function RootLayout(props: {
  children: React.ReactNode;
  detail: React.ReactNode;
}) {
 
  return (
    <>
      {props.children}
      {props.detail}
    </>
  );
}
