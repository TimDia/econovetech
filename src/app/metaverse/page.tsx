import WalletGate from "@/components/WalletGate";
import Navbar from "@/components/Navbar";

export default function Page(){
  return (
    <WalletGate>
      <Navbar/>
      <h1 className="text-2xl font-bold mb-2">Metaverse Mirror</h1>
      <p>3D Earth + Dorset parcels (React Three Fiber / Cesium planned).</p>
    </WalletGate>
  );
}
