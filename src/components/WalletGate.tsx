"use client";
import { useState } from "react";
import EthereumProvider from "@walletconnect/ethereum-provider";

export default function WalletGate({ children }:{children:React.ReactNode}) {
  const [address,setAddress] = useState<string|undefined>();
  const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID ?? "demo-placeholder";

  async function connect() {
    const evm = await EthereumProvider.init({
      projectId,
      chains: [1,137,8453],
      optionalChains: [1,137,8453],
      showQrModal: true
    });
    await evm.enable();
    // Cast the unknown return to string[]
    const accounts = (await evm.request({ method: "eth_requestAccounts" })) as unknown as string[];
    const a = accounts?.[0];
    setAddress(a);
  }

  return (
    <div className="min-h-screen">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="font-semibold">Econovetech • Interactive Dashboard</div>
        <button onClick={connect} className="px-3 py-1.5 rounded-xl border">
          {address ? address.slice(0,6)+"…"+address.slice(-4) : "Connect Wallet"}
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
