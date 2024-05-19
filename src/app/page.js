import FormPage from "@/components/layout/Form";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div>
         <Header/>
         <Hero/>
         <FormPage/>
         <section className="mx-w-2xl mx-auto mt-16 text-center" id="about">
            <h2 className="font-semibold text-4xl text-blue-500 italic">About Us</h2>
            <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, animi laboriosam sint libero unde dolor numquam aliquid? Modi sint voluptate at et, vel veritatis minima nihil fuga, neque quos necessitatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quidem labore? Eligendi reprehenderit consectetur aperiam assumenda, voluptatum nam autem amet repellendus? Ipsum veniam quia facilis obcaecati odio! Ducimus, labore soluta?
              </p>
            </div>
         </section>
         <section className="mx-w-2xl mx-auto mt-16 text-center" id="contact">
           <h2 className="font-semibold text-4xl text-blue-500 italic">Contact</h2>
            <div className="text-center m-8 text-3xl underline p-2 py-2 mb-2">
              <span className="text-gray-500">+91 90884 41474</span>
            </div>
         </section>
         <Footer/>
      </div>
    </>
  );
}
