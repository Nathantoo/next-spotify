import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/supabase-provider";
import UserProvider from "@/providers/user-provider";
import ModalProvider from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toaster-provider";
import getSongsByUserId from "@/actions/get-songs-by-userId";
import Player from "@/components/player";
import getProductWithPrice from "@/actions/get-active-products-with-prices";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description: "Listen to music!",
};
export const revalidate = 0;

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const userSongs = await getSongsByUserId();
  const products = await getProductWithPrice();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
