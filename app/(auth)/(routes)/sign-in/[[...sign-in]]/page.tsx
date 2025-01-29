import { DemoTxt } from "@/components/ui/demo-txt";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <DemoTxt />
      <SignIn />
    </>
  );
}
