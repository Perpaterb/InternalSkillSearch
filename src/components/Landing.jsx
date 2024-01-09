import { motion, useTransform, useScroll } from "framer-motion";
import React, { useState, useEffect, useRef} from 'react';
import UserAdCard from "./UserAdCard";

export default function Landing() { 

  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel/>
    </div>
  );
};

const HorizontalScrollCarousel = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [peopleData , setPeopleData] = useState("")
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const inputRef = useRef();

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
  
    useEffect(() => {

      setPeopleData(JSON.parse(localStorage.getItem("peopleData")))

      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  
    }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[3000vh] bg-neutral-900 overflow-hidden" style={{ height: 2000 }} >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden" 
                style={{            
                  position: "sticky",
                  top: "0",
                  overflow: "hidden",
                  padding: 100
                }}>
        <motion.div style={{ x }}>
          {(() => {
              if (peopleData != "") {
                return (
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '50px',}}>
                    {peopleData.map((userData,index) => {
                      return <UserAdCard key={index} {...userData} />;
                    })}
                  </div>
                )
              } else {
                return (
                  <></>
                )
              }
            })()}

        </motion.div>
      </div>
    </section>
  );

};

