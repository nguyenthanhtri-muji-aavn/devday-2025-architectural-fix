'use client';
import {
  CSSProperties,
  memo,
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import {
  products,
  cart,
  Product,
  generateRandomBackground,
} from '../../mock-data';
import Image from 'next/image';

const useFadeIn = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('labubu-card-fade-in');
      const timeoutId = setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove('labubu-card-fade-in');
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  });

  return ref;
};

const CartItem = ({
  item,
  hasLatestBid,
}: {
  item: Product & { quantity: number };
  hasLatestBid: boolean;
}) => {
  const ref = useFadeIn() as RefObject<HTMLDivElement>;

  return (
    <Link key={item.id} href='#'>
      <div key={item.id} className='cart-item' ref={ref}>
        <span className='cart-item-close material-icons'>cancel</span>
        <div
          className='cart-item-image'
          style={
            {
              '--labubu-card-bg': item.background,
            } as CSSProperties
          }
        >
          <img src={item.image} alt={item.name || ''} width='72' height='72' />
        </div>
        <div className='cart-item-info'>
          <div className='cart-item-name'>
            {item.name} #{item.id}
            <span>7h : 4m : 8s</span>
          </div>
          <div className='cart-item-price'>
            {hasLatestBid && (
              <div>
                <span>Latest bid </span> <span>5.20 ETH</span>
              </div>
            )}
            <div>
              <span>Your bid </span> <span>2.25 ETH</span>
            </div>
            <button>Bid more</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CartDetailsSection = () => {
  const [cartsData, setCartsData] = useState<
    (Product & { quantity: number })[]
  >([]);

  useLayoutEffect(() => {
    const fetchCartItems = async () => {
      const sessionId = sessionStorage.getItem('your-session-id') as string;

      try {
        const res = await fetch('/api/cart', {
          headers: {
            'X-Session-Id': sessionId,
          },
        });
        const data = await res.json();
        setCartsData(
          data?.data?.items
            ? data?.data?.items.map((cartItem: { product: any }) => ({
                ...cartItem,
                ...cartItem.product,
                background: generateRandomBackground(),
              }))
            : []
        );
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className='cart-detail'>
      <div className='cart-title'>
        <span>Your Biddings</span>
        <span>{cartsData.length} items</span>
      </div>

      <div className='cart-item-wrapper'>
        {cartsData.map((item, idx) => (
          <CartItem key={item?.id} item={item} hasLatestBid={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

const UserBalance = () => {
  const ref = useFadeIn() as RefObject<HTMLDivElement>;

  return (
    <div className='user-balance' ref={ref}>
      <div className='balance-left'>
        <img
          src='/assets/images/Ethereum.svg'
          alt='ETH'
          width='32'
          height='32'
        />

        <div className='label'>4,668 ETH</div>
      </div>
      <div className='balance-right'>
        <div className='label'>Add</div>
        <span className='material-icons'>chevron_right</span>
      </div>
    </div>
  );
};

const InteractiveSection = () => {
  const [followers, setFollowers] = useState(10);
  const [likes, setLikes] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      const followersIncrease = Math.random() * (1 - 0.05) + 0.05;
      setFollowers(
        (prev) => Math.round((prev + followersIncrease) * 100) / 100
      );

      const likesIncrease = Math.random() * (1 - 0.05) + 0.05;
      setLikes((prev) => Math.round((prev + likesIncrease) * 100) / 100);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='user-data'>
      <div className='user-data-item'>
        <div className='value'>12</div>
        <div className='label'>Asset</div>
      </div>
      <div className='user-data-item'>
        <div className='value'>{`${followers}K`}</div>
        <div className='label'>Followers</div>
      </div>
      <div className='user-data-item'>
        <div className='value'>{`${likes}K`}</div>
        <div className='label'>Likes</div>
      </div>
      <div className='user-data-item'>
        <div className='value'>60</div>
        <div className='label'>Bidding</div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className='cart'>
      <div className='user-info'>
        <div className='avatar-name'>
          <Image
            src='/assets/images/muji-logo.svg'
            alt='avatar'
            width='88'
            height='88'
          />
          <div className='name'>MUJI Team</div>
        </div>
        <InteractiveSection />

        <UserBalance />
      </div>

      <CartDetailsSection />
    </div>
  );
};

export default CartPage;
