import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">About Excel Marketing</h1>
          <p className="text-center text-muted-foreground mb-12">
            Your trusted real estate partner since 2008
          </p>
          {/* About content will be added here */}
          <div className="text-center py-20">
            <p className="text-muted-foreground">About page content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;