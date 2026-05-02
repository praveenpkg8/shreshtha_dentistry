import type { Metadata } from "next";
import "./styles.css";
import { site } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingHost from "@/components/BookingHost";

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const palette = site.theme?.palette && site.theme.palette !== "default" ? site.theme.palette : undefined;
  const density = site.theme?.density === "compact" ? "compact" : undefined;
  return (
    <html lang="en" data-palette={palette} data-density={density}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body>
        <BookingHost>
          <Nav />
          {children}
          <Footer />
        </BookingHost>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", function (user) {
                  if (!user) {
                    window.netlifyIdentity.on("login", function () {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
