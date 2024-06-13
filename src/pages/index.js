import Switcher from "@/compornents/switcher";
import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main
        className={`pt-8 text-center bg-light w-full min-h-[100vh] dark:bg-dark ${
          isChecked ? "dark" : ""
        }`}
      >
        <Switcher isChecked={isChecked} onChange={handleCheckboxChange} />

        <h1 className="mt-28 text-7xl font-extrabold dark:text-light">
          Hello!
        </h1>
      </main>
    </>
  );
}
