import type { Metadata } from "next";
import { LOGOS } from "@/lib/logos";
import { LogosClient } from "@/components/logos/logos-client";

export const metadata: Metadata = {
  title: "Logos & Marks",
  description:
    "Identities, wordmarks and emblems designed by Ameen Ali — hover a mark to bring it to life.",
};

export default function LogosPage() {
  return <LogosClient logos={LOGOS} />;
}
