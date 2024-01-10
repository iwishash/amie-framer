import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "../lib/utils";
import { useFeatureStore } from "../data/store";

type TitleProps = {
  children: React.ReactNode;
  id: string;
};

export default function FeatureTitle({ children, id }: TitleProps) {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(titleRef, { margin: "-50% 0px -50% 0px" });
  const setinViewFeaturedCard = useFeatureStore(
    (state) => state.setinViewFeaturedCard,
  );
  const inViewFeaturedCard = useFeatureStore(
    (state) => state.inViewFeaturedCard,
  );

  useEffect(() => {
    if (inView) {
      setinViewFeaturedCard(id);
    } else if (!inView && inViewFeaturedCard === id) {
      setinViewFeaturedCard(null);
    }
  }, [inView, setinViewFeaturedCard, inViewFeaturedCard, id]);

  return (
    <p
      ref={titleRef}
      className={cn(
        "title font-heading py-16 text-5xl font-semibold  transition-colors duration-300",
        {
          "text-black": inView,
        },
        { "text-gray-300": !inView },
      )}
    >
      {children}
    </p>
  );
}
