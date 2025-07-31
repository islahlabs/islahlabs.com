// A clean, professional landing page for Islah Labs using Next.js + TypeScript
// Tailored to express your values: AI + utility, purpose, simplicity

import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Islah Labs</h1>
        <p className="text-lg text-gray-600 mb-8">
          We build purposeful, AI-powered tools to help people live, work, and learn better.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          <Link href="/about-islah" className="text-blue-600 hover:text-blue-800 underline">Learn about the meaning of &ldquo;Islah&rdquo; →</Link>
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Build AI-augmented apps that improve productivity and clarity</li>
              <li>Empower job seekers with personalized resume and cover letter tools</li>
              <li>Help learners engage deeply with reading and study material</li>
              <li>Develop thoughtful software rooted in purpose and integrity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>ResumeMD</strong> – AI Resume Tailoring with Markdown</li>
              <li><strong>[Unnamed App]</strong> – PDF-powered AI study guides and visual aids (coming soon)</li>
              <li><em>More coming soon...</em></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Standing with Palestine: A Moral Responsibility</h2>
                      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-800 mb-4 leading-relaxed">
                We unequivocally denounce the ongoing holocaust in Gaza and the systematic violence against Palestinians in Gaza, the West Bank, and throughout occupied Palestine. The targeting of civilians, destruction of homes, farms, hospitals, and schools, and the humanitarian crisis unfolding before our eyes demand immediate action and accountability.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                As the Qur&apos;an teaches us: &ldquo;Whoever kills an innocent person, it is as if they have killed all of humanity. And whoever saves a life, it is as if they have saved all of humanity&rdquo; (5:32). Whether this is classified as genocide or not is beside the point. The fact remains that countless innocent civilians and non-combatants have been killed, and that is never acceptable, regardless of where they are or who they are.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                The evil and inhumane use of food as a weapon to cause mass starvation of an entire population is a crime against humanity. The deliberate blocking of humanitarian aid, destruction of agricultural infrastructure, and prevention of basic necessities from reaching civilians in Gaza represents a calculated strategy of collective punishment. The governments of the United States and Israel bear direct responsibility for not putting an end to this barbaric practice and for actively enabling the conditions that make it possible.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                As a company committed to purpose and human dignity, we stand in solidarity with the Palestinian people and their right to self-determination, freedom, and justice. We call for an immediate ceasefire, unrestricted humanitarian aid, and an end to the oppressive occupation.
              </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">How to Help:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Support humanitarian organizations providing aid to Gaza</li>
                <li>Contact your representatives to demand action</li>
                <li>Educate yourself and others about the history and current reality</li>
                <li>Amplify Palestinian voices and stories</li>
                <li>Support Palestinian-owned businesses and organizations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-2">Interested in collaborating, consulting, or just checking in?</p>
          <p className="text-blue-600">contact@islahlabs.com</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}