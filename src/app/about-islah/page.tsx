import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AboutIslah() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Islah</h1>
        <p className="text-lg text-gray-600 mb-8">
          Understanding the meaning and significance behind our name.
        </p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">🌿 Meaning of Islah (إصلاح)</h2>
            <p className="text-gray-800 mb-4">
              The word <strong>إصلاح</strong> (Islāḥ) in Arabic comes from the root <strong>ص-ل-ح</strong> (ṣ-l-ḥ), which broadly relates to righteousness, soundness, goodness, and rectification.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Linguistic Roots</h2>
            <p className="text-gray-800 mb-4">
              Islāḥ (إصلاح) is the verbal noun (masdar) of the form IV verb <strong>أصلح</strong> (aṣlaḥa), meaning:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>To reform</li>
              <li>To improve</li>
              <li>To rectify</li>
              <li>To reconcile</li>
              <li>To make right or sound</li>
            </ul>
            <p className="text-gray-800">
              So, <strong>Islāḥ</strong> means: <em>&ldquo;Reformation,&rdquo; &ldquo;rectification,&rdquo; or &ldquo;the act of making something better, more righteous, or more functional.&rdquo;</em>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🌟 Qur&apos;anic Usage</h2>
            <p className="text-gray-800 mb-4">
              The term is used throughout the Qur&apos;an in many contexts, always conveying the idea of restoring goodness, bringing harmony, or acting with positive, corrective intention.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-4">
              <h3 className="font-semibold text-green-800 mb-2">Examples:</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 mb-1"><strong>1. Personal reform and repentance:</strong></p>
                  <p className="text-gray-700 italic">&ldquo;Except for those who repent and correct themselves (أصلح) and make evident [what they concealed]…&rdquo;</p>
                  <p className="text-sm text-gray-600">— Surah Al-Baqarah 2:160</p>
                </div>
                <div>
                  <p className="text-gray-800 mb-1"><strong>2. Peacemaking and community reform:</strong></p>
                  <p className="text-gray-700 italic">&ldquo;There is no good in most of their private conversations except those who enjoin charity, or that which is right, or make peace between people (إصلاح بين الناس)…&rdquo;</p>
                  <p className="text-sm text-gray-600">— Surah An-Nisa&apos; 4:114</p>
                </div>
                <div>
                  <p className="text-gray-800 mb-1"><strong>3. Opposite of corruption:</strong></p>
                  <p className="text-gray-700 italic">&ldquo;Do not cause corruption on the earth after it has been set in order (بعد إصلاحها)…&rdquo;</p>
                  <p className="text-sm text-gray-600">— Surah Al-A&apos;raf 7:56</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">✅ Conceptual Dimensions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Moral/Spiritual</h3>
                <p className="text-gray-700">Turning back to truth, repentance, betterment of soul</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Social</h3>
                <p className="text-gray-700">Reconciliation, peacemaking, justice, improving conditions</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-semibold text-teal-800 mb-2">Practical</h3>
                <p className="text-gray-700">Fixing something broken, restoring usefulness, enhancing function</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-800">✨ Why &ldquo;Islah&rdquo; Is a Powerful Name</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>It suggests positive transformation — both internal and external.</li>
              <li>It carries deep Qur&apos;anic and ethical weight, while also being practical and action-driven.</li>
              <li>It aligns beautifully with a company that builds tools that make people&apos;s lives better — whether by organizing, assisting, learning, or uplifting.</li>
            </ul>
          </div>

          <div className="mt-12 border-t pt-6">
            <p className="text-gray-600">
              <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 