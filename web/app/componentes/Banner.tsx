"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { BannerData } from '@/sanity/queries/marketing';

export default function NewsBanner({ data }: { data: BannerData | null }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const shouldBeVisible = pathname !== '/news';

  useEffect(() => {
    if (!shouldBeVisible || !data) {
      setIsVisible(false);
      return;
    }
    const dismissed = localStorage.getItem(`banner-dismissed-${data._id}`);
    if (!dismissed) setIsVisible(true);
  }, [shouldBeVisible, data])

  const dismiss = () => {
    if (data) localStorage.setItem(`banner-dismissed-${data._id}`, '1');
    setIsVisible(false);
  };

  if (!data) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="news-banner"
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          exit={{ y: -100, opacity: 0}}
          transition={{duration: 0.4}}
          className='sticky top-0 z-40 isolate flex items-center gap-x-6 overflow-hidden bg-greenDark px-6 py-1.5 sm:px-3.5 sm:before:flex-1'
        >
          <div className="flex items-center justify-between md:justify-around">
            <p className="text-xs lg:text-sm font-zain tracking-wide text-yellowLight!">
              {data.body}
            </p>
            {data.buttonText && data.buttonUrl && (
              <Link
                href={data.buttonUrl}
                className="ml-1 sm:ml-4 flex-none italic rounded-full bg-orangeDark px-3 py-1 text-xs font-semibold text-white shadow-xs hover:bg-orangeLight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenDark"
                onClick={dismiss}
              >
                {data.buttonText}<span aria-hidden="true"></span>
              </Link>
            )}
          </div>

          {/* Dismiss Button */}
          <div className="flex flex-1 justify-end">
            <button type="button" onClick={dismiss} className="-m-3 p-2 focus-visible:outline-offset-[-4px]">
              <span className="sr-only">Dismiss</span>
              <IoMdClose aria-hidden="true" className="size-5 text-yellowLight" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
