import { CodeBlock, anOldHope } from 'react-code-blocks'

import { useState } from 'react';

const useExpandableSection = () => {
  const SECTION_CONTENT = [
    {
      id: 1,
      title: 'Connect to a Node',
      description:
        'To connect to a Bundlr node, provide your private key to allow for access to stored funds and for signing transactions.'
    },
    {
      id: 2,
      title: 'Fund a Node',
      description:
        'The function bundlr.fund(amountInAtomicUnits) funds the specified node using the wallet you linked when creating the Bundlr object. When working with WebBundlr in the browser, the end user’s private key is automatically linked using their wallet software using injected providers. Bundlr supports both upfront funding, sending over enough funds to cover all of a project’s uploads, and lazy funding where you fund per upload. Fund the node you intend to upload to, funded balances are not shared between nodes.'
    },
    {
      id: 3,
      title: 'Upload your Data, Forever',
      description:
        'The function bundlr.upload(data) uploads any arbitrary data passed to it. The transaction id returned as part of the response is used to download the data, simply create a URL with the following format https://arweave.net/[transaction_id].'
    }
  ]

  // handle individual section state
  const [currentlyOpen, setCurrentlyOpen] = useState(1)

  const handleSectionClick = (id: number) => {
    setCurrentlyOpen(id)
  }

  const CODE_EXAMPLE = `import Bundlr from '@bundlr-network/client';
import { default as fsWithCallbacks } from 'fs';
const fs = fsWithCallbacks.promises;

const bundlr = new Bundlr('https://node1.bundlr.network', 'solana', myPrivateKey);

const pathToFile = './llama.png';
const size = (await fs.stat(pathToFile)).size;
const price = await bundlr.getPrice(size);
await bundlr.fund(price);

const { id } = await bundlr.uploadFile(pathToFile);
console.log(\`\${pathToFile} --> Uploaded to https://arweave.net/\${id}\`);`

  return {
    SECTION_CONTENT,
    currentlyOpen,
    handleSectionClick,
    CODE_EXAMPLE
  }
}

const ExpandableSection = () => {
  const { SECTION_CONTENT, currentlyOpen, handleSectionClick, CODE_EXAMPLE } =
    useExpandableSection()

  return (
    <>
      <section className="flex flex-col gap-10">
        <p className="text-lg font-robotoMono">
          There are three simple steps to building on Bundlr:
        </p>
        <ul className="flex flex-col gap-24">
          {SECTION_CONTENT.map((section) => (
            <li
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="cursor-pointer flex flex-col gap-9"
            >
              <h2
                className={`text-7xl text-white ${currentlyOpen !== section.id && 'text-onyx hover:text-onyx/90'
                  }`}
              >
                0{section.id} {section.title}
              </h2>
              {currentlyOpen === section.id && (
                <p className={`text-lg font-robotoMono max-w-5xl`}>
                  {section.description}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className="text-7xl text-onyx font-bold">Here’s the Code!</div>
        <div className="overflow-scroll lg:overflow-hidden max-w-[calc(100vw-30px)] lg:max-w-none">
          <CodeBlock
            text={CODE_EXAMPLE}
            language={'javascript'}
            theme={anOldHope}
          />
        </div>
      </section>
    </>
  )
}

export default ExpandableSection
