"use client";
import { motion } from "framer-motion";

const Moon = () => {
  return (
    <motion.svg
      xmlSpace="preserve"
      viewBox="0 0 508 508"
      width="100%"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, ease: "easeInOut", repeat: Infinity }}
    >
      <g fill="#f4efef">
        <path d="M66 76.4c-4.4 1.6-8.8 4.8-12.4 9.2-3.6 4.4-6 9.2-6.4 14-.4 3.6.4 6.4 2 8.4 8-11.2 16.8-21.6 26.4-31.2-2.8-1.6-6-1.6-9.6-.4zM382.8 478.8c4.8 0 10-2 14.8-4.8 4.8-3.2 8.4-7.2 10.4-11.6 1.6-3.6 1.6-6.8.4-9.2-10.8 8.4-22.4 16-34.4 22.4 1.6 2 4.8 3.2 8.8 3.2zM371.6 19.2c-9.6-5.6-20.8-5.2-24 .8 12.8 5.2 25.2 11.2 36.8 18.4 1.6-6-4-14-12.8-19.2z" />
      </g>
      <path
        fill="#e8e3e3"
        d="M502 254C502 117.2 390.8 6 254 6S6 117.2 6 254s111.2 248 248 248 248-111.2 248-248zM135.2 374.4c-3.2 3.2-8 5.2-13.2 5.2-8 0-16.4-4-23.2-10.4-5.6-5.6-9.2-12.4-10.4-19.2-1.2-7.2.4-13.2 4.8-17.6 3.2-3.2 8-5.2 13.2-5.2 8 0 16.4 4 23.2 10.4 5.6 5.6 9.2 12.4 10.4 19.2 1.2 7.2-.4 13.2-4.8 17.6zm27.2-117.2c-27.6 0-50.4-22.4-50.4-50.4s22.4-50.4 50.4-50.4 50.4 22.4 50.4 50.4-22.4 50.4-50.4 50.4zM270 347.6c-18.8 0-33.6-15.2-33.6-33.6 0-18.8 15.2-33.6 33.6-33.6s33.6 15.2 33.6 33.6-15.2 33.6-33.6 33.6zM341.2 200c-16.4 0-29.6-13.2-29.6-29.6s13.2-29.6 29.6-29.6c16.4 0 29.6 13.2 29.6 29.6S357.6 200 341.2 200zm75.2 168.8c-6.8 6.8-15.2 10.4-23.2 10.4-5.2 0-10-1.6-13.2-5.2-4.4-4.4-6-10.4-4.8-17.6 1.2-6.8 4.8-13.6 10.4-19.2 6.8-6.8 15.2-10.4 23.2-10.4 5.2 0 10 1.6 13.2 5.2 8.4 8.8 6 25.2-5.6 36.8z"
      />
      <path
        fill="#aeb1b4"
        d="M162.4 160.4c-25.6 0-46.4 20.8-46.4 46.4s20.8 46.4 46.4 46.4 46.4-20.8 46.4-46.4c0-25.6-20.8-46.4-46.4-46.4z"
      />
      <g fill="#7d8b95">
        <path d="M270 284c-16.4 0-30 13.2-30 30s13.2 30 30 30 30-13.2 30-30-13.6-30-30-30zM341.2 144.8c-14 0-25.6 11.6-25.6 25.6s11.6 25.6 25.6 25.6 25.6-11.6 25.6-25.6-11.2-25.6-25.6-25.6z" />
      </g>
      <path
        fill="#aeb1b4"
        d="M408.4 331.2c-6.8 0-14.4 3.6-20.4 9.6-4.8 4.8-8 10.8-9.2 16.8-.8 5.6.4 10.8 3.6 14 2.8 2.8 6.4 4 10.4 4 6.8 0 14.4-3.6 20.4-9.6 10-10 12.4-24 5.6-30.8-2.4-2.8-6-4-10.4-4z"
      />
      <path
        fill="#7d8b95"
        d="M106.8 331.2c-4.4 0-8 1.2-10.4 4-3.2 3.2-4.8 8.4-3.6 14 .8 6 4 12 9.2 16.8 6 6 13.6 9.6 20.4 9.6 4.4 0 8-1.2 10.4-4 3.2-3.2 4.8-8.4 3.6-14-.8-6-4-12-9.2-16.8-6-6-13.6-9.6-20.4-9.6z"
      />
      <path d="M254 508C114 508 0 394 0 254S114 0 254 0s254 114 254 254-114 254-254 254zm0-500C118.4 8 8 118.4 8 254s110.4 246 246 246 246-110.4 246-246S389.6 8 254 8z" />
      <path d="M162.4 259.2c-28.8 0-52.4-23.6-52.4-52.4s23.6-52.4 52.4-52.4c28.8 0 52.4 23.6 52.4 52.4s-23.6 52.4-52.4 52.4zm0-96.8c-24.4 0-44.4 20-44.4 44.4s20 44.4 44.4 44.4 44.4-20 44.4-44.4-20-44.4-44.4-44.4zM270 349.6c-19.6 0-35.6-16-35.6-35.6s16-35.6 35.6-35.6 35.6 16 35.6 35.6-16 35.6-35.6 35.6zm0-63.6c-15.2 0-27.6 12.4-27.6 27.6s12.4 27.6 27.6 27.6c15.2 0 27.6-12.4 27.6-27.6S285.2 286 270 286zM253.6 444c-20 0-35.6-11.2-35.6-25.6 0-2.4 1.6-4 4-4s4 1.6 4 4c0 9.6 12.8 17.6 27.6 17.6 15.2 0 27.6-8 27.6-17.6 0-2.4 1.6-4 4-4s4 1.6 4 4c.4 14.4-15.2 25.6-35.6 25.6zM416.8 139.2c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6 2.4-2.4 2.4-6.4 2-8.8-.8-4.4-3.2-8.8-7.2-12.4-7.2-7.2-16.8-9.6-21.2-5.2-1.6 1.6-4 1.6-5.6 0s-1.6-4 0-5.6c7.6-7.6 22-5.2 32.4 5.2 4.8 4.8 8 10.8 9.2 16.4 1.2 6.4 0 12-4 16-.4.8-1.6 1.2-2.8 1.2zM146 110.8c-1.2 0-2-.4-2.8-1.2-8.4-8.4-6.8-23.6 3.6-34 4.8-4.8 11.2-8 17.2-8.8 6.8-.8 12.8 1.2 16.8 5.2 1.6 1.6 1.6 4 0 5.6s-4 1.6-5.6 0c-2.4-2.4-6-3.6-10-2.8-4.4.4-8.8 2.8-12.8 6.4-7.2 7.2-8.8 17.6-3.6 22.8 1.6 1.6 1.6 4 0 5.6-.8.8-1.6 1.2-2.8 1.2zM48.8 114.8c-.8 0-2-.4-2.4-.8-4-3.2-6-8.8-5.2-15.2.8-5.6 3.6-12 8-17.2s9.6-9.2 15.2-10.8c6-2 12-1.2 16 2 1.6 1.6 2 4 .4 5.6s-4 2-5.6.4c-2.4-2-6.4-1.2-8.4-.8-4 1.2-8.4 4.4-11.6 8.4-3.2 4-5.6 8.8-6 12.8-.4 2-.4 6 2 8 1.6 1.6 2 4 .4 5.6-.8 1.6-2 2-2.8 2zM382.4 484.8c-6.4 0-11.2-2.4-14-6.8-1.2-2-.8-4.4 1.2-5.6s4.4-.8 5.6 1.2c1.6 2.8 5.6 3.2 7.6 3.2 4.4 0 9.2-1.6 13.6-4.8 9.2-6 12.4-14.8 10-18.8-1.2-2-.8-4.4 1.2-5.6s4.4-.8 5.6 1.2c5.6 8.8.4 22-12 30-6.4 3.6-12.4 5.6-18.8 6 .4 0 0 0 0 0zM385.6 45.2c-.8 0-1.2 0-2-.4-2-1.2-2.8-3.6-1.6-5.6 2.4-4.4-1.6-12.8-11.2-18-9.6-5.2-18.8-4.4-21.2 0-1.2 2-3.6 2.8-5.6 1.6-2-1.2-2.8-3.6-1.6-5.6 5.2-9.2 19.2-10.4 32.4-3.2s19.2 20 14.4 29.2c-.8 1.2-2.4 2-3.6 2zM341.2 202c-17.6 0-31.6-14-31.6-31.6s14-31.6 31.6-31.6 31.6 14 31.6 31.6c0 17.2-14 31.6-31.6 31.6zm0-55.2c-13.2 0-23.6 10.8-23.6 23.6 0 13.2 10.8 23.6 23.6 23.6 13.2 0 23.6-10.8 23.6-23.6 0-13.2-10.4-23.6-23.6-23.6zM393.2 381.2c-5.6 0-10.8-2-14.8-5.6-9.2-9.2-6.8-27.2 5.2-39.2 6-6 12.8-9.6 20-10.8 7.6-1.2 14.4.8 19.2 5.2 4.8 4.8 6.8 11.6 5.2 19.2-1.2 7.2-4.8 14.4-10.8 20-6.8 7.6-15.6 11.2-24 11.2zm15.2-48c-1.2 0-2 0-3.2.4-5.6.8-11.2 4-15.6 8.4-4.8 4.8-7.6 10.4-8.4 15.6-.8 5.2.4 9.6 3.2 12.4s7.2 4 12.4 3.2c5.6-.8 11.2-4 15.6-8.4s7.6-10.4 8.4-15.6c.8-5.2-.4-9.6-3.2-12.4-2.4-2.4-5.6-3.6-9.2-3.6zM122 381.6c-8 0-17.2-4-24.4-11.2-12.4-12.4-14.8-30-5.2-39.2 9.2-9.2 27.2-6.8 39.2 5.2 6 6 9.6 12.8 10.8 20 1.2 7.6-.8 14.4-5.2 19.2-4.4 4-9.6 6-15.2 6zm-19.2-16.8c9.2 9.2 22 11.6 28 5.2 2.8-2.8 4-7.2 3.2-12.4-.8-5.6-4-11.2-8.4-15.6-9.2-9.2-22-11.6-28-5.2-6 6-3.6 18.8 5.2 28z" />
    </motion.svg>
  );
};

export default Moon;
