import Titlebar from "@/components/title";
import Navbar from "@/components/navbar";
import { SectionTitle } from "@/components/section";

export default function Family() {
  return (
    <div>
      <Titlebar />
      <h1 className="text-[blue]">Family</h1>
      <SectionTitle title="Our Amazing Family" />
    </div>
  );
}