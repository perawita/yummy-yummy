https://www.google.com/maps/place/Yummy+Yummy+Food+%26+Drink/@-8.7124429,115.1666371,17z/data=!4m11!1m3!2m2!1sRestaurants!6e5!3m6!1s0x2dd247c9cdefa0dd:0x32584837dbe55ca1!8m2!3d-8.7124429!4d115.1714007!15sCgtSZXN0YXVyYW50c1oNIgtyZXN0YXVyYW50c5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnFPRXBMZFZkM0VBReABAPoBBAgAED4!16s%2Fg%2F11s2l6z9x9?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D


<!-- old table -->
        {/* ================= MINUMAN ================= */}
        <div>
          <h3 className="mb-10 text-center text-xl tracking-[0.3em] uppercase text-white/80">
            — Minuman —
          </h3>

          {Object.entries(MENU.minuman).map(([subCat, items]) => (
            <div key={subCat} className="mb-10">
              <p className="mb-4 text-center text-xs tracking-widest uppercase text-white/60">
                {subCat}
              </p>

              <table className="mx-auto w-full max-w-2xl border-collapse">
                <tbody>
                  {items.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-dotted border-white/25 hover:bg-white/5 transition"
                    >
                      <td className="py-4 pl-6 text-lg text-white/90 tracking-wide">
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        

        {/* ================= MAKANAN ================= */}
        <div className="mb-20">
          <h3 className="mb-10 text-center text-xl tracking-[0.3em] uppercase text-white/80">
            — Makanan —
          </h3>

          {Object.entries(MENU.makanan).map(([subCat, items]) => (
            <div key={subCat} className="mb-10">
              <p className="mb-4 text-center text-xs tracking-widest uppercase text-white/60">
                {subCat}
              </p>

              <table className="mx-auto w-full max-w-2xl border-collapse">
                <tbody>
                  {items.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-dashed border-white/25 hover:bg-white/5 transition"
                    >
                      <td className="py-4 pl-6 text-lg text-white/90 tracking-wide">
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
