import WalletGate from "@/components/WalletGate";
import Navbar from "@/components/Navbar";

export default function Page(){
  return (
    <WalletGate>
      <Navbar/>
      <h1 className="text-2xl font-bold mb-2">Avatar Console</h1>
      <p>144,000 Avatar registry (stub).</p>
    </WalletGate>
  );
}
