import FullMenu from '../components/FullMenu';

import Footer    from '../components/Footer';

export const metadata = {
  title: 'Full Menu — Cafe Janoshi | 155+ Items',
  description: 'Browse all 155+ items at Cafe Janoshi — shakes, coffee, steaks, burgers, pizza, desserts and more. Okara\'s finest dining.',
};

export default function MenuPage() {
  return (
    <>
      <FullMenu />
      <Footer />
    </>
  );
}