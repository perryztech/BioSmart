import GridImages from "@/components/mycomponent/imagegrid";
import { LoginForm } from "@/components/mycomponent/loginform";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen gap-16 px-20">
      <div className="w-1/2 flex flex-col items-center justify-center gap-4">
        <div className="w-full text-center ">
          <h1 className="text-xl font-bold">Welcome to BioSmart</h1>
          <p className=" text-sm text-gray-600">
            We don&apos;t just verify, we validate
          </p>
        </div>
        <div className="w-full h-fit">
          <LoginForm />
        </div>
      </div>
      <div className="w-1/2">
        <GridImages />
      </div>
    </main>
  );
}
