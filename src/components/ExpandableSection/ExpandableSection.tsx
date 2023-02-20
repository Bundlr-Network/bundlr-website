import { CodeBlock, anOldHope } from 'react-code-blocks'

import { useState } from 'react'

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
        <p className="text-lg font-robotoMono text-center md:text-left">
          There are three simple steps to building on Bundlr:
        </p>
        <ul className="flex flex-col gap-10 lg:gap-16">
          {SECTION_CONTENT.map((section) => (
            <li
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="cursor-pointer flex flex-col gap-2 lg:gap-9 items-center justify-center md:items-start"
            >
              <h2
                className={`flex items-center gap-3 text-3xl lg:text-5xl text-white text-center md:text-left ${currentlyOpen !== section.id && 'text-onyx hover:text-onyx/90'
                  }`}
              >
                <span
                  className={`hidden lg:flex bg-white text-base rounded-full w-6 h-6 text-black items-center justify-center ${currentlyOpen !== section.id &&
                    'bg-onyx hover:bg-onyx/90'
                    }`}
                >
                  {section.id}
                </span>{' '}
                {section.title}
              </h2>
              {currentlyOpen === section.id && (
                <p
                  className={`text-base lg:text-lg font-robotoMono max-w-5xl text-center md:text-left`}
                >
                  {section.description}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`z-50 text-3xl lg:text-5xl cursor-pointer text-whitfont-bold text-center md:text-left ${currentlyOpen != 4 && 'text-onyx hover:text-onyx/90 '
            }`}
          onClick={() => handleSectionClick(4)}
        >
          Here’s the Code!
        </div>
        {currentlyOpen === 4 && (
          <div className="overflow-scroll md:overflow-y-hidden lg:overflow-hidden max-w-[calc(100vw-30px)] z-50">
            <CodeBlock
              text={CODE_EXAMPLE}
              language={'javascript'}
              theme={anOldHope}
              showLineNumbers={false}
            />
          </div>
        )}
      </section>
    </>
  )
}

export default ExpandableSection
