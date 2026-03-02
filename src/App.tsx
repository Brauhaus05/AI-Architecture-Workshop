/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Curriculum } from "./components/Curriculum";
import { Gallery } from "./components/Gallery";
import { Stack } from "./components/Stack";
import { Instructor } from "./components/Instructor";
import { FAQ } from "./components/FAQ";
import { Corporate } from "./components/Corporate";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-body selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Gallery />
        <Stack />
        <Instructor />
        <FAQ />
        <Corporate />
      </main>
      <Footer />
    </div>
  );
}
