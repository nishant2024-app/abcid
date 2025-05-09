// app/page.js
import StudentDashboard from '@/components/StudentDashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StudentDashboard />
      </div>
    </main>
  );
}