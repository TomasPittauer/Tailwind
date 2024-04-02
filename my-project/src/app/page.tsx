import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <button className="border-2 rounded-full my-6  px-2 hover:bg-sky-700 ">Change mode</button>
        <div className="fixed inset-y-[700px] left-[1300px] text-2xl ">Buy for 9.99€</div>

        <img src="data:image/jpeg;base64,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" className="justify-center rounded-full" alt="ahoj"/>
        <div className="justify-center text-6xl font-bold  my-12"> Tomáš Pittauer </div>

        <div className="flex flex-row gap-2 py-4">
            <div className="w1/8 border-2 p-2 rounded-xl hover:bg-sky-700">Product Designer</div>
            <div className="w1/8 border-2 p-2 rounded-xl hover:bg-sky-700">Prague</div>
            <div className="w1/8 border-2 p-2 rounded-xl hover:bg-sky-700">Email</div>
            <div className="w1/8 border-2 p-2 rounded-xl hover:bg-sky-700">Website</div>
            <div className="w1/8 border-2 p-2 rounded-xl hover:bg-sky-700">About Me</div>
        </div>

      <div className="relative flex flex-col gap-20">

          <div className="flex flex-row space-x-14 justify-center">
              <div className="text-3xl underline font-bold">About</div>
              <div className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores ex, impedit maxime minus quis reprehenderit sapiente sunt unde voluptatibus. Ea enim facere facilis, numquam quia recusandae rem repellat voluptates. Adipisci corporis deserunt ea eos harum, iure quae. Blanditiis, culpa debitis deleniti perspiciatis veritatis voluptatibus. Accusantium aperiam architecto beatae delectus dolore doloribus eius illum, incidunt iste, labore laudantium magnam nam natus nesciunt perspiciatis porro quas quasi qui quibusdam rem reprehenderit sunt ut! Animi autem cupiditate doloribus est, et illo ipsum iste odio quasi quia repellendus sapiente unde velit? Animi consequuntur, dolore eius illo magnam maxime obcaecati quos sed sit vitae?</div>
          </div>


          <div className="flex flex-row space-x-14 justify-center">
              <div className="text-3xl underline font-bold">Skills</div>
              <div className="w-1/2">
              <ul className="gap-2">
                  <li className= "flex flex-col">
                      <div className="text-2xl">Teamwork</div>
                      <div className= "my-2 text-slate-400">I was a great Team player since childhood</div>
                  </li>
                  <li className= "flex flex-col">
                      <div className="text-2xl">Smart</div>
                      <div className= "my-2 text-slate-400">I Am very smart boi</div>
                  </li>
                  <li className= "flex flex-col">
                      <div className="text-2xl">Friendly</div>
                      <div className= "my-2 text-slate-400">I get along with everyone</div>
                  </li>
                  <li className= "flex flex-col">
                      <div className="text-2xl">Can work alone</div>
                      <div className= "my-2 text-slate-400">I am a lone wolf</div>
                  </li>
                  <li className= "flex flex-col">
                      <div className="text-2xl">Problem solving</div>
                      <div className= "my-2 text-slate-400">No puzzle will stay unsolved in my presence</div>
                  </li>
              </ul>
              </div>
          </div>

          <div className="flex flex-row space-x-14 justify-center">
              <div className="text-3xl underline font-bold">Education</div>
<div className="flex flex-col w-1/2">
              <div className="w-3/4 backdrop-blur-0 border-2 border-slate-700 p-6 bg-slate-950">
                  <div className="text-3xl underline">Zš Milíčov</div>
                  <div className="my-4 text-slate-400"> I studied here for nine years and left with honorary certificate</div>
              </div>
              <div className="w-3/4 backdrop-blur-0 border-2 border-slate-700 p-6 bg-slate-950 my-8">
                  <div className="text-3xl underline">Educanet</div>
                  <div className="my-4 text-slate-400"> I am still studying</div>
              </div>
</div>
          </div>


          <div className="flex flex-row space-x-14 justify-center">
              <div className="text-3xl underline font-bold">Contact</div>
              <div className="w-1/2">
                  <div className="text-2xl text-slate-400">Email: blabla@seznam.cz</div>
                  <div className="text-2xl text-slate-400">Phone Number: 314 159 265 358</div>
                  <div className="text-2xl text-slate-400">Facebook: www.facebook.com/blabla</div>

              </div>
          </div>
      </div>
    </main>
  );
}


