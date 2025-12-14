import Header from '@/components/Header';
import QuickStats from '@/components/QuickStats';
import CategoryCards from '@/components/CategoryCards';
import PriceTable from '@/components/PriceTable';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-12">
        <QuickStats />
        <CategoryCards />
        <PriceTable />
      </main>

      <Footer />
    </div>
  );
}
