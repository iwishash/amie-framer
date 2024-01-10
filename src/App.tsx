import { useEffect } from "react";
import { Hero } from "./components/Hero";
import FeatureTitle from "./components/Title";
import { features } from "./data/features";
import { stagger, useAnimate } from "framer-motion";
import { useFeatureStore } from "./data/store";
import { useHidePageOverflow } from "./lib/toggle-page-overflow";

function App() {
  const [scope, animate] = useAnimate();
  const visualImage = useFeatureStore((state) => state.visualImage);
  const lastVisualImage = useFeatureStore((state) => state.lastVisualImage);
  const setVisualImage = useFeatureStore((state) => state.setVisualImage);

  useHidePageOverflow(!!visualImage);

  useEffect(() => {
    console.log(lastVisualImage, visualImage);
    if (visualImage) {
      animate([
        [
          ".title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.fullScreen-${lastVisualImage}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".btn-back", { opacity: 1, y: 0 }, { at: "<", duration: 0.3 }],
        [".btn-show", { opacity: 0 }, { at: "<" }],
      ]);
    } else {
      animate([
        [
          ".title",
          { opacity: 1, x: 0 },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.fullScreen-${lastVisualImage}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [".btn-back", { opacity: 0, y: "200%" }, { at: "<", duration: 0.3 }],
        [".btn-show", { opacity: 1 }, { at: "<" }],
      ]);
    }
  }, [animate, visualImage]);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4">
        <div ref={scope}>
          <Hero />
          {features.map((feature) => {
            return <feature.visualImage key={feature.id} id={feature.id} />;
          })}
          <button
            className="btn-back fixed bottom-4 left-1/2 z-10 -translate-x-1/2 translate-y-[200%] rounded-full bg-black px-4 py-2 text-white"
            onClick={() => {
              setVisualImage(null);
            }}
          >
            Back to site
          </button>
          <div className="flex w-full items-start gap-20">
            <div className="w-full py-[50vh]">
              <ul>
                {features.map((feature) => {
                  return (
                    <li key={feature.id}>
                      <FeatureTitle id={feature.id}>
                        {feature.title}
                      </FeatureTitle>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sticky top-0 flex h-screen w-full items-center">
              <div className="relative aspect-square w-full rounded-2xl bg-gray-100 has-[.active-card]:bg-transparent">
                {features.map((feature) => (
                  <feature.card id={feature.id} key={feature.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen">More to scroll</div>
      </div>
    </>
  );
}

export default App;
