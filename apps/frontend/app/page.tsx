import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    // TODO: Remove this example page and set up proper landing page
    <main style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Image alt="DevSandbox Logo" height={32} src="/logo.svg" width={32} />
      <p>Welcome to DevSandbox</p>
    </main>
  );
}
