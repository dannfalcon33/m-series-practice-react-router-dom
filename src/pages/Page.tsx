import { motion } from "framer-motion";
import type { PageContent } from "../types";
import { PageWrapper } from "../components/PageWrapper";
import { HeroBackground } from "../components/HeroBackground";

interface PageProps {
  content: PageContent;
}

export const Page = ({ content }: PageProps) => {
  return (
    <PageWrapper className="flex items-center justify-start px-8 md:px-24">
      <HeroBackground image={content.backgroundImage} alt={content.title} />

      <div className="relative z-20 max-w-2xl text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-medium tracking-wide text-red-600 mb-2 uppercase">
            {content.subtitle}
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            {content.title}
          </h1>
          {content.description && (
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-lg">
              {content.description}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};
