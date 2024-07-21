import React, { useEffect, useState} from "react";
import Link from "next/link";
import NodeDwifiStreamUser from "../components/nodedataDwifiUser";
import { motion } from "framer-motion";

const Dwifi = () => {

    return(
      <div className="bg-black">
      <div className="container mx-auto py-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(86, 150, 255, 0.6) 4%, #0162FF80 10%, black 30%), url("/globe_image.png")',  
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
          }}
          >
      <div className="flex flex-col items-center justify-center lg:h-full mt-10 lg:ml-0 lg:mr-0 md:ml-0 md:mr-0 ml-4 mr-4 mb-36 lg:mb-0 px-20 py-40">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="text-6xl font-semibold text-gray-300 mb-8 w-3/5"
        >
          Manage Your ÐWi-Fi Nodes
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="text-2xl text-white mb-8"
        >
          <p>
          Discover data across your ÐWi-Fi network
          </p>
        </motion.h1>

      </div>
    </div>
      <NodeDwifiStreamUser />
            {/* <img src="/mapRegions.png"/> */}
            <div className="h-[30vh]"></div>
        </div>
        
    )
}

export default Dwifi;