import WalletGate from "@/components/WalletGate";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Page(){
  return (
    <WalletGate>
      <Navbar/>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Welcome to Econovetech</h1>
        <p>Unified dashboard for TrustVault, SplitRouter 50/37/13, Avatars, DAO and Metaverse.</p>
      </div>
    </WalletGate>
  );
}
