import Header from '../components/Header';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header 
        title="Products" 
        leftContent={
          <button className="menu-button">
            <span className="material-icons">arrow_back</span>
          </button>
        }
        rightContent={
          <button className="menu-button">
            <span className="material-icons">filter_list</span>
          </button>
        }
      />
      {children}
    </>
  )
} 