import WalletGate from "@/components/WalletGate";
import Navbar from "@/components/Navbar";

export default function Page(){
  return (
    <WalletGate>
      <Navbar/>
      <h1 className="text-2xl font-bold mb-2">DAO Governance</h1>
      <p>Proposals & votes after contract deploy.</p>
    </WalletGate>
  );
}
