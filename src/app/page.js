import { redirect } from "next/navigation";

// Root page just redirects — users only arrive via QR scan to /p/[batch_number]
export default function Home() {
  redirect("https://bioamrut.com");
}
