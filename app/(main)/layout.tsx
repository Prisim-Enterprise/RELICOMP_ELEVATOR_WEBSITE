import MainProviders from "./providers";

/**
 * Server layout shell. Client islands (toasters, floating buttons) live in providers.
 * RSC page children still stream as Server Components through this slot.
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainProviders>{children}</MainProviders>;
}
