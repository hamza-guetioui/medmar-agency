import React from "react";
import Link from "next/link";
import Image from "next/image";

function Index() {
  return (
    <div className="-mt-2">
      <Link href="/">
        <Image
          src="/assets/medmar.png"
          width={150}
          height={41}
          alt="medmarLogo"
        />
      </Link>
    </div>
  );
}

export default Index;
