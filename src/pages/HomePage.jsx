function HomePage() {
    return (
      <section
        id="home"
        className="relative text-center mb-8 bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/12.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Purrfect Cat Shop</h2>
          <p className="text-lg">
            Explore our wide range of feline-friendly products. From toys to beds, we have
            everything to make your cat happy!
          </p>
        </div>
      </section>
    );
  }
  
  export default HomePage;
  