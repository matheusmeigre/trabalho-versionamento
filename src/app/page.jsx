import { NavigationMenu } from "@/components/ui/navigation-menu";
export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-between p-24">
      <NavigationMenu />
        <h1 className="text-4xl font-bold flex h-screen">
          Seja bem-vindo ao Trabalho de Versionamento de Software!
        </h1>
        <p>
          Por: Matheus Meigre
        </p>
      </main>
    </>
  );
}
