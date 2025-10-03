import {
  FC,
  memo,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface LabubuNFTProps {
  name: string;
  imageUrl: string;
  description: string;
  backgroundColor?: string;
  backgroundImg?: string;
  price: number;
  isFlashSale: boolean;
}

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

const useButtonAnimation = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('button-bounce-in');
      const timeoutId = setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove('button-bounce-in');
        }
      }, 600);
      return () => clearTimeout(timeoutId);
    }
  });

  return ref;
};

/**
 * LabubuImage Component
 */
const LabubuImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  console.log('render LabubuImage');
  const ref = useFadeIn() as RefObject<HTMLImageElement>;

  return <img src={imageUrl} alt={name} ref={ref} />;
};
const MemoizedLabubuImage = memo(LabubuImage);

/**
 * LabubuBackground Component
 */
const LabubuBackground = ({ backgroundImg }: { backgroundImg?: string }) => {
  const ref = useFadeIn() as RefObject<HTMLDivElement>;
  return (
    <div className='card-top' ref={ref}>
      {backgroundImg && <img src={backgroundImg} alt='product' />}
    </div>
  );
};
const MemoizedLabubuBackground = memo(LabubuBackground);

const PlaceABidButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  const ref = useButtonAnimation();

  return (
    <button ref={ref} onClick={onClick}>
      Place a Bid
    </button>
  );
};
const MemoizedPlaceABidButton = memo(PlaceABidButton);

const LabubuInfo = ({ name }: { name: string }) => {
  const ref = useFadeIn() as RefObject<HTMLDivElement>;
  return (
    <div className='flex flex-col gap-1' ref={ref}>
      <span className='item-name'>{name}</span>
      <span>By LunaAI</span>
    </div>
  );
};

const MemoizedLabubuInfo = memo(LabubuInfo);

const LabubuPrice = ({
  labubuPriceData,
}: {
  labubuPriceData: { price: number; currency: string };
}) => {
  const ref = useFadeIn() as RefObject<HTMLDivElement>;

  return (
    <div ref={ref}>
      <img
        src='/assets/images/price.svg'
        alt={labubuPriceData.currency}
        width='32'
        height='32'
      />
      <span className='item-price'>
        {labubuPriceData.price} {labubuPriceData.currency}
      </span>
    </div>
  );
};
const MemoizedLabubuPrice = memo(LabubuPrice);

const FlashSaleCollocation = ({ isFlashSale }: { isFlashSale: boolean }) => {
  const ref = useFadeIn() as RefObject<HTMLSpanElement>;

  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 4,
    seconds: 8,
  });

  useEffect(() => {
    if (!isFlashSale) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
          return prev;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [isFlashSale]);

  const formatTime = (timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    return `${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`;
  };

  const formattedCounter = formatTime(timeLeft);
  const memoizedFormattedCounter = useMemo(
    () => formattedCounter,
    [formattedCounter]
  );

  return <span ref={ref}>{formattedCounter}</span>;
};
const FlashSaleCounter = ({
  formattedCounter,
}: {
  formattedCounter: string;
}) => {
  const ref = useFadeIn() as RefObject<HTMLSpanElement>;
  return <span ref={ref}>{formattedCounter}</span>;
};
const MemoizedFlashSaleCounter = memo(FlashSaleCounter);

const FlashSaleBadgeWithCounterWrapper = ({
  labubuInfoSection,
  cartItemPriceSection,
  isFlashSale,
}: {
  labubuInfoSection: ReactNode;
  cartItemPriceSection: ReactNode;
  isFlashSale: boolean;
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 4,
    seconds: 8,
  });

  useEffect(() => {
    if (!isFlashSale) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
          return prev;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [isFlashSale]);

  const formatTime = (timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    return `${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`;
  };

  const formattedCounter = formatTime(timeLeft);
  const memoizedFormattedCounter = useMemo(
    () => formattedCounter,
    [formattedCounter]
  );

  return (
    <>
      <div>Badge Component</div>
      <div className='card-body'>
        <div className='cart-item-name'>
          {labubuInfoSection}

          {isFlashSale && (
            <FlashSaleCounter formattedCounter={formattedCounter} />
          )}
        </div>
        {cartItemPriceSection}
      </div>
    </>
  );
};

const LabubuNFT: FC<LabubuNFTProps> = ({
  isFlashSale,
  name,
  imageUrl,
  backgroundColor,
  backgroundImg,
  price,
}) => {
  const data = {
    name,
    price,
    isFlashSale,
  };
  const memoizedData = useMemo(
    () => ({
      name,
      price,
      isFlashSale,
    }),
    [name, price, isFlashSale]
  );

  const onClick = () => console.log('Place a Bid clicked');
  const memoizedOnClick = useCallback(() => {
    console.log('Place a Bid clicked');
  }, []);

  const labubuPriceData = {
    price,
    currency: 'ETH',
  };
  const memoizedLabubuPriceData = useMemo(
    () => ({
      price,
      currency: 'ETH',
    }),
    [price]
  );

  return (
    <div
      className='labubu-card labubu-card-fade-in'
      style={
        {
          '--labubu-card-bg': backgroundColor,
          '--labubu-card-bg-img': backgroundImg,
        } as React.CSSProperties
      }
    >
      <LabubuImage imageUrl={imageUrl} name={name} />

      <LabubuBackground backgroundImg={backgroundImg} />

      <FlashSaleBadgeWithCounterWrapper
        labubuInfoSection={<LabubuInfo name={name} />}
        cartItemPriceSection={
          <div className='cart-item-price'>
            <LabubuPrice labubuPriceData={labubuPriceData} />

            <PlaceABidButton onClick={onClick} />
          </div>
        }
        isFlashSale={isFlashSale}
      />
    </div>
  );
};

export default LabubuNFT;
