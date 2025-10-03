import Logo from "@/components/logo";

export default function RootLayout(props: {
  children: React.ReactNode;
  cart: React.ReactNode;
}) {
  return (
    <>
      <div className="main-container">
      <div className="sticky-bg"/>     
        <div className="header">        
          <div className="logo">
            <Logo />
          </div>
          <div className="nav">
            <span>Market</span>
            <span>Features</span>
            <span>Community</span>
          </div>
        </div>
        <div className="main-content">{props.children && props.children}</div>
      </div>
      {props.cart && (
        <div className="cart-container">
          <div className="cart-content">{props.cart}</div>
        </div>
      )}
    </>
  );
}
