import Image from "next/image";

export default function Home() {

  return (
    <div className={"h-screen w-screen flex flex-col bg-main-color py-5"}>
      <header className={"styles?.header"}>
        <Image src="/logo.png" alt="logo" width={250} height={40} />
      </header>
      <main
        className={"w-screen flex flex-1 justify-between items-center px-40"}
      >
        <div className="flex flex-col justify-start gap-10">
          <div className={"text-6xl max-w-40 text-white"}>Sempre conectado</div>
          <button
            className={
              "bg-gradient-to-bl from-custom-pink to-custom-purple text-black p-2 rounded-md font-bold"
            }
          >
            Saiba mais
          </button>
        </div>
        <div className="relative hidden lg:block">
          <Image
            className="rounded-xl z-10 relative"
            src="/cellphone.png"
            alt="foto telefone"
            width={280}
            height={280}
          />
          <div
            className={
              "bg-custom-gradient-radial bg-main-color w-[400px] h-[400px] rounded-full absolute top-[-50px] right-[-35px] z-0"
            }
          ></div>
        </div>
      </main>
    </div>
  );
}
