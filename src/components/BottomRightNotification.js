import React, { useEffect, useState } from "react";

const BottomRightNotification = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
    setTimeout(() => {
      setShow(true);
    }, 12000);
  }, []);
  if (!show) return false;
  return (
    <div className="absolute bottom-2 right-2 bg-white rounded-md p-3">
      <h4 class="font-medium">
        We have limited 100 request free from youtube api
      </h4>
      <p className="text-gray-600">
        if there is not showing video <br /> sorry we have reached the limit for
        this month
      </p>
      <a className="text-red-500" href="https://netlifix-fullstack.vercel.app/">
        Visit my second website click here
      </a>
    </div>
  );
};

export default BottomRightNotification;
