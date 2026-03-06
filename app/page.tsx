import Image from "next/image";
import { CopyFromProductInfoForm } from "./CopyFromProductInfoForm";
import { CopyFromUrlForm } from "./CopyFromUrlForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center py-16 px-6 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-12 w-full">
          <Image
            className="dark:invert mb-4"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={22}
            priority
          />
          <h1 className="w-full text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-black dark:text-zinc-50 mb-3">
            CopyNest
          </h1>
          <h2 className="w-full text-lg text-zinc-600 dark:text-zinc-400 font-medium mb-4">
            Instantly generate conversion-focused landing page copy from product info or any website URL.
          </h2>
        </div>

        {/* Product Info Form */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 md:p-8 mb-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-zinc-100">Generate Copy From Product Info</h3>
          <p className="mb-5 text-zinc-700 dark:text-zinc-300">Just describe your product—get your headline, benefits, and CTA in seconds.</p>
          <CopyFromProductInfoForm />
        </section>

        {/* URL Form */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 md:p-8 mb-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-zinc-100">Generate Copy From Website URL</h3>
          <p className="mb-5 text-zinc-700 dark:text-zinc-300">Paste a URL—we’ll analyze and rewrite better landing copy for you.</p>
          <CopyFromUrlForm />
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center w-full text-sm text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          Made by <a href="mailto:hi@chirag.co" className="font-semibold text-zinc-700 dark:text-zinc-100 hover:underline">Chirag Dodiya</a>
          <br />
          <span className="block mt-1">Contact: hi@chirag.co</span>
        </footer>
      </main>
    </div>
  );
}