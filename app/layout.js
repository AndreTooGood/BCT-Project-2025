import "./globals.css";

//INTERNAL IMPORT
import { TrackingProvider } from "../Conetxt/TrackingContext";
import { NavBar, Footer } from '../Components';

export const metadata = {
  title: "AirCargo Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TrackingProvider>
          <NavBar />
          {children} {/* This will render the children passed from each page */}
          <Footer />
        </TrackingProvider>
      </body>
    </html>
  );
}