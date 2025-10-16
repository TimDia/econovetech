import WalletGate from "@/components/WalletGate";
import Navbar from "@/components/Navbar";

export default function Page(){
  return (
    <WalletGate>
      <Navbar/>
      <h1 className="text-2xl font-bold mb-2">Sovereign Bank</h1>
      <p>Read-only balances + SplitRouter preview coming next.</p>
    </WalletGate>
  );
}
