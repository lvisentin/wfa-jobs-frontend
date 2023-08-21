import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "../styles/globals.scss";

export const metadata = {
  title: "WFA Jobs",
  description: "WFA Jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
