import VerticalList from "./components/VerticalList";
import FetchPhrases from "./utils/FetchPhrases";

/*Making Home a server component and fetching data on the server before sending it to the client*/
export default async function Home() {
  const phrases = await FetchPhrases()

  return (
    <>
      {/** Begin Navbar */}
      <div className="bg-gray-200">
        <div className="h-2"></div>
        <div className="flex flex-row justify-center gap-2 text-lg">
          <p className="">Try out the</p>
          <h2 className="text-xl text-red-600 hover:text-red-800 hover:underline"><a href="ask" target="_self">Phrase Generator</a></h2>
        </div>
        <div className="h-2"></div>
      </div>
      {/** End Navbar */}
      
      <VerticalList title="Random Quotes" items={phrases}></VerticalList>

      <VerticalList title="Starred Quotes" items={[]}></VerticalList>

    </>
  );
}