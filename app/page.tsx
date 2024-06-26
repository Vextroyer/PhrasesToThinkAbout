import Phrase from './components/Phrase';
import Author from './components/Author';
import Reflect from './components/Reflect';


/*Making Home a server component and fetching data on the server before sending it to the client*/
export default async function Home() {

  let res = await fetch("https://zenquotes.io/api/random").then((value: Response) => value.json());
  const { q: quote, a: author } = res[0];

  return (
    <div className="mx-auto max-w-lg flex flex-col mt-36">
      <div className='mx-5 lg:mx-0'>
        <Phrase phrase={quote} />
        <div className='flex flex-row justify-end'>
          <Author author={author} />
        </div>
        <div className='mt-36'>
          <Reflect />
        </div>
      </div>
    </div>
  );
}
