import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

import Button from '../Button'
import { DevIcon } from '@/svg'
import SectionTitle from '../SectionTitle'
import Testimonial from '../Testimonial'
import { useInView } from 'react-intersection-observer'

const useHomeHorizontalScroll = () => {
  return {}
}

const HomeHorizontalScroll = () => {
  /**
   * Server Section
   */
  const serverControls = useAnimation()
  const imageControls = useAnimation()
  const [serverTitleRef, serverTitleInView] = useInView()
  const [serverDescriptionRef, serverDescriptionInView] = useInView()
  const [serverImageRef, serverImageInView] = useInView({
    threshold: 0.4
  })

  const serverVariants = {
    title: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 100 }
    },
    description: {
      visible: { opacity: 1, duration: 2000 },
      hidden: { opacity: 0, duration: 2000 }
    },
    serverLeft: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -50 }
    },
    serverRight: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 50 }
    }
  }

  useEffect(() => {
    if (serverTitleInView) {
      serverControls.start('visible')
    }
  }, [serverControls, serverTitleInView])

  useEffect(() => {
    if (serverDescriptionInView) {
      serverControls.start('visible')
    }
  }, [serverControls, serverDescriptionInView])

  useEffect(() => {
    if (serverImageInView) {
      imageControls.start('visible')
    }
  }, [imageControls, serverImageInView])

  /**
   * Cloud Section
   */

  const cloudControls = useAnimation()
  const [cloudTitleRef, cloudTitleInView] = useInView()
  const [cloudDescriptionRef, cloudDescriptionInView] = useInView()
  const [cloudImageRef, cloudImageInView] = useInView()

  const cloudVariants = {
    title: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 }
    },
    description: {
      visible: { opacity: 1, duration: 2000 },
      hidden: { opacity: 0, duration: 2000 }
    },
    cloud: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }
  }

  useEffect(() => {
    if (cloudTitleInView) {
      cloudControls.start('visible')
    }
  }, [cloudControls, cloudTitleInView])

  /**
   * Successor Section
   */

  const successorControls = useAnimation()
  const successorImageControls = useAnimation()
  const [successorTitleRef, successorTitleInView] = useInView({
    threshold: 0.4
  })
  const [successorImageRef, successorImageInView] = useInView({
    threshold: 0.2
  })

  const successorVariants = {
    title: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 100 }
    },
    image: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 }
    }
  }

  useEffect(() => {
    if (successorTitleInView) {
      successorControls.start('visible')
    }
  }, [successorControls, successorTitleInView])

  useEffect(() => {
    if (successorImageInView) {
      successorImageControls.start('visible')
    }
  }, [successorImageControls, successorImageInView])

  /**
   * Conclusion Section
   */

  const conclusionControls = useAnimation()
  const conclusionImageControls = useAnimation()
  const [conclusionTitleRef, conclusionTitleInView] = useInView({
    threshold: 0.4
  })
  const [conclusionImageRef, conclusionImageInView] = useInView({
    threshold: 0.2
  })

  const conclusionVariants = {
    title: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 }
    },
    image: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 }
    }
  }

  useEffect(() => {
    if (conclusionTitleInView) {
      conclusionControls.start('visible')
    }
  }, [conclusionControls, conclusionTitleInView])

  useEffect(() => {
    if (conclusionImageInView) {
      conclusionImageControls.start('visible')
    }
  }, [conclusionImageControls, conclusionImageInView])



  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-between p-24 text-7xl sticky top-0 left-0 bg-seashell -z-10"
        style={{
          boxShadow: '0 0 70px rgba(0,0,0,.2)'
        }}
      >
        <motion.h2
          ref={serverTitleRef}
          animate={serverControls}
          initial="hidden"
          variants={serverVariants.title}
          className={'z-10'}
        >
          On-Premise Servers
        </motion.h2>
        <motion.h3
          ref={serverDescriptionRef}
          className="font-robotoMono text-lg max-w-md text-center"
          initial="hidden"
          animate={serverControls}
          variants={serverVariants.description}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          In the internet’s early days, online data was stored in local servers.
          This was inconvenient and expensive for most people.
        </motion.h3>
        <div />
        <motion.img
          ref={serverImageRef}
          animate={imageControls}
          variants={serverVariants.serverLeft}
          initial="hidden"
          src={'/assets/home/server.png'}
          className="absolute bottom-56 lg:top-0 left-0 w-[20%] lg:w-auto"
          transition={{ delay: 0.6 }}
        />
        <motion.img
          ref={serverImageRef}
          animate={imageControls}
          variants={serverVariants.serverRight}
          initial="hidden"
          src={'/assets/home/serverRight.png'}
          className="absolute bottom-56 lg:top-0 right-0 w-[20%] lg:w-auto"
          transition={{ delay: 0.6 }}
        />
      </div>
      <div className="w-screen h-screen flex items-center justify-center text-7xl sticky top-0 left-0 bg-seashell -z-10"
        style={{
          boxShadow: '0 0 70px rgba(0,0,0,.2)'
        }}
      >
        <div className="relative h-full w-screen	shrink-0 px-5 lg:px-[109px] pt-[120px]">
          <div className="w-full lg:w-2/5 ml-auto">
            <motion.h2
              className="text-7xl font-fkDispla z-10"
              ref={cloudTitleRef}
              animate={cloudControls}
              initial="hidden"
              variants={cloudVariants.title}
            >
              The Cloud
            </motion.h2>
            <motion.div
              className="flex flex-col gap-6 mt-12 ml-16"
              ref={cloudDescriptionRef}
              animate={cloudControls}
              initial="hidden"
              variants={cloudVariants.description}
            >
              <p className="font-robotoMono text-base max-w-md z-10">
                With the advent of the cloud, data storage became more
                affordable, convenient, and performant.
              </p>
              <p className="font-robotoMono text-base max-w-md z-10">
                But, data centralized in the cloud.
              </p>
            </motion.div>
          </div>
          {/* center of screen absolute image */}
          <motion.img
            ref={cloudImageRef}
            animate={cloudControls}
            variants={cloudVariants.cloud}
            initial="hidden"
            transition={{
              delay: 0.6
            }}
            src="/assets/home/cloud.png"
            alt="cloud"
            className="absolute bottom-52 lg:bottom-10 -left-32 right-0 mx-auto max-w-[70%]"
          />
        </div>
      </div>
      <div className="w-screen h-screen flex items-start justify-center text-7xl sticky top-0 left-0 bg-seashell -z-10"
        style={{
          boxShadow: '0 0 70px rgba(0,0,0,.2)'
        }}
      >
        <div className="flex flex-col gap-6 mt-36">
          <motion.h2 className="font-robotoMono text-base max-w-md z-10 text-center"
            ref={successorTitleRef}
            animate={successorControls}
            initial="hidden"
            variants={successorVariants.title}
          >
            Bundlr is the successor to on-premise servers and the cloud.
          </motion.h2>
          <motion.h3 className="font-robotoMono text-base max-w-md z-10 text-center"
            animate={successorControls}
            initial="hidden"
            variants={successorVariants.title}
          >
            Through cryptographic guarantees and trustless provenance, you
            can now secure your data, make it censorship resistant and
            available forever – all while retaining the performance and
            convenience that you expect
          </motion.h3>
        </div>
        <motion.img
          ref={successorImageRef}
          animate={successorImageControls}
          initial="hidden"
          variants={successorVariants.image}
          src="/assets/home/dataverse.png"
          alt="dataverse"
          className="absolute bottom-0 left-0 right-0 mx-auto"
        />
      </div>
      <div className="w-screen h-screen flex items-start justify-center sticky top-0 left-0 bg-seashell -z-10"
        style={{
          boxShadow: '0 0 70px rgba(0,0,0,.2)'
        }}
      >
        <div className="flex flex-col gap-6 mt-36">
          <motion.h2 className="text-center text-7xl font-fkDisplay z-10"
            ref={conclusionTitleRef}
            animate={conclusionControls}
            initial="hidden"
            variants={conclusionVariants.title}
          >
            Bundlr is the trustless <br /> source of truth
          </motion.h2>
          <div className="self-center z-10">
            <Button>
              LEARN MORE
              <DevIcon />
            </Button>
          </div>
        </div>
        <motion.img
          ref={conclusionImageRef}
          animate={conclusionImageControls}
          initial="hidden"
          variants={conclusionVariants.image}
          src="/assets/home/dataverse.png"
          alt="dataverse"
          className="absolute bottom-0 left-0 right-0 mx-auto"
        />
      </div>
    </>
  )
}

export default HomeHorizontalScroll