import Link from "next/link";
import GridLayout from "@/ui/GridLayout";
import ButtonPrimary from "@/ui/ButtonPrimary";
import Icon404 from "@/ui/svg/Icon404";

export default function NotFound() {
  return (
    <>
      <GridLayout
        size="boxed"
        additional_class="flex flex-col justify-center items-center gap-8 flex-grow"
      >
        <Icon404 />
        <ButtonPrimary url="/" additional_class="">
          Return Home
        </ButtonPrimary>
      </GridLayout>
    </>
  );
}
