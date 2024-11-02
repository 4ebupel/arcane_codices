import Codices from "../components/Codices";
import Header from "../components/Header";

export default function CodicesPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Codices />
    </div>
  );
}