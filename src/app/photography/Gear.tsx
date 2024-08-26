"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Gear() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Sony" icon={<SonyIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Google Pixel" icon={<GoogleIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>
        <Card title="Fujifilm" icon={<FujifilmIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.4] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] relative h-screen"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const FujifilmIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 66 66"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className="flex items-center justify-center text-white group-hover/canvas-card:text-white border border-green-500 "
    >
      <path
        fill="currentColor"
        d="M18.288 10v3.129c0 .204.096.313.3.313h1.034v.352c0 .04-.028.068-.068.068h-1.672c-.518 0-.6-.284-.6-.544v-3.1c0-.148.056-.216.232-.216h.774m-1.916 0v3.656c0 .164-.068.204-.204.204h-.788v-3.655c0-.125.04-.205.216-.205h.776M0 10.532c0-.3 0-.53.49-.53h2.12v.366c0 .028-.012.054-.054.054H1.28c-.162 0-.244.083-.244.26v.979h1.496v.393c0 .04-.028.054-.056.054h-1.44v1.55c0 .15-.082.204-.246.204H0v-3.33m4.148-.531v2.95c0 .26.04.434.216.53.232.136.64.136.884 0 .164-.096.232-.244.232-.53v-2.76c0-.122.04-.19.218-.19h.774v2.853c0 .667-.42.94-.788 1.035a3.592 3.592 0 0 1-1.7 0c-.558-.164-.816-.49-.816-1.035v-2.663c0-.122.04-.204.19-.204h.79M22.872 10c-.19 0-.314.094-.354.272l-.626 2.663h-.014L21.212 10h-.884c-.176 0-.23.08-.23.23v3.644h.38c.054 0 .08-.026.08-.094v-3.06h.056l.802 3.14h.53c.204 0 .272-.08.328-.272l.72-2.868h.054v3.14h.708c.176 0 .244-.069.244-.23V10h-1.128m-11.708 2.093h-.992v1.767h.788c.136 0 .204-.04.204-.205v-1.562m-.054-.747c.04-.028.054-.056.054-.11V10h-.776c-.176 0-.216.08-.216.204v1.875l.938-.733m-3.4 2.216c.436-.055.572-.314.572-.695v-2.663c0-.164.08-.204.19-.204h.788v2.513c0 .612-.136.927-.49 1.198-.19.136-.516.3-1.25.3-.408 0-.6-.028-.626-.028-.04-.014-.054-.028-.054-.056v-.326c.204-.014.584 0 .87-.04M12.674 10c-.49 0-.49.244-.49.53v.992c0 .028-.014.028-.014.04l-.68.532h.694v1.766h.788c.164 0 .244-.054.244-.204v-1.562h1.442c.028 0 .054-.014.054-.056v-.394h-1.496v-.98c0-.176.082-.256.26-.256h1.278c.04 0 .054-.028.054-.056V10h-2.134"
      />
    </svg>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 66 66"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className="flex items-center justify-center text-white group-hover/canvas-card:text-white border border-green-500 "
    >
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  );
};

const SonyIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 66 66"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className="flex items-center justify-center text-white group-hover/canvas-card:text-white border border-green-500 "
    >
      <path
        fill="currentColor"
        d="M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z"
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
