import { Ubuntu } from "next/font/google";
import variables from "./variables.module.scss";
import "./global.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ridlo achmad ghifary",
  description: "ridlo`s portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} ${variables.body}`}>
        {children}
      </body>
    </html>
  );
}
