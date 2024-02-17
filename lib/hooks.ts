import { SectionName, useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeLastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeLastClicked, sectionName]);

  return {
    ref,
  };
}
