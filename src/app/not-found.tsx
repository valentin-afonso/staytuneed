import Link from "next/link";
import GridLayout from "@/ui/GridLayout";
import ButtonPrimary from "@/ui/ButtonPrimary";

export default function NotFound() {
  return (
    <>
      <GridLayout
        size="boxed"
        additional_class="flex flex-col justify-center items-center gap-8"
      >
        <h1 className="font-black text-4xl text-center">
          Oops! Page Not Found
        </h1>
        <ButtonPrimary url="/" additional_class="">
          Return Home
        </ButtonPrimary>
      </GridLayout>
    </>
  );
}
