/* eslint-disable @next/next/no-img-element */
import { Button, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import Container from "@/components/custom-components/container";
import Shadow from "@/components/custom-components/shadow";
import { useMantineColorScheme } from "@mantine/core";
import Image from "next/image";


export default function ConnectSection() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Container>
      <section className="relative grid grid-cols-1  gap-3 sm:grid-cols-2">
        <Shadow />
        <div className={`flex flex-col justify-center gap-y-7 pt-5 order-2 lg:order-1`}>
          <p className={`${dark ? "text-slate-400" : "text-slate-600"}`}>Connect with techies near and far 🚀</p>
          <h2 className="text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">Become part of something bigger</h2>
          <p className={`text-xl  ${dark ? "text-slate-400" : "text-slate-600"} `}>
            There is strength in numbers.
            Teksade connects you with your tech tribe and even helps you discover more. We can all help to make the world a better place. Join in the fun!
          </p>
          <Link href="communities">
            <Button className="text-base rounded-full" size="lg" variant="gradient" gradient={{ from: "indigo", to: "cyan", deg: 45 }}>
              Explore Communities</Button>
          </Link>
        </div>
        <div className="order-1 lg:order-2 flex items-center gap-3 sm:order-2 p-4">
          <div className=" flex-[7]">
            <Image className="h-[40vh] w-full rounded-md object-cover sm:h-full" src="/img/g-2.webp" alt="contrib-1" width={500} height={700} />
          </div>
          <div className=" flex h-full flex-[3] flex-col ">
            <Image className="mb-1 w-full flex-[25] rounded-md object-cover" src="/img/g-3.webp" alt="contrib-2" width={500} height={700}/>
            <Image className="mb-1 w-full flex-[50] rounded-md object-cover" src="/img/g-4.webp" alt="contrib-3" width={500} height={700}/>
            <Image className="w-full flex-[25] rounded-md object-cover" src="/img/g-1.webp" alt="contrib-4" width={500} height={700} />
          </div>
        </div>
      </section>
    </Container>
  );
}
