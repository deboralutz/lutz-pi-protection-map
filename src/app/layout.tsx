import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lutz PI | Mapa de Proteção",
  description:
    "Diagnóstico orientativo sobre presença pública, proteção formal e pontos de atenção para marcas autorais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
