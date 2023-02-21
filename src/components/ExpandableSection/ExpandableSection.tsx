import { CodeBlock, dracula } from 'react-code-blocks'

import { useState } from 'react'

const useExpandableSection = () => {
  const SECTION_CONTENT = [
    {
      id: 1,
      title: 'Connect to a Node',
      description:
        'Start by connecting to a Bundlr node, simply provide a node address and your preferred payment currency. When working with NodeJS on the server, link a private key and when building browser-based dApps, use injected providers to link a user’s wallet.',
      snippet: `const bundlr = new Bundlr("https://node1.bundlr.network", "matic", "<eth-private-key");`
    },
    {
      id: 2,
      title: 'Fund a Node',
      description:
        'Fund a node to pay for uploads using any of the 14 tokens we support. Bundlr supports both upfront funding, sending over enough funds to cover all of a project’s uploads, and lazy funding where you fund per upload.',
      snippet: `await bundlr.fund(1e18); // 1 matic`
    },
    {
      id: 3,
      title: 'Upload your Data, Forever',
      description:
        'Upload data, files, or an entire folder of files with only one line of code. You’ll instantly get back a transaction id you can use to download the data.',
      snippet: `await bundlr.upload("GM Bundloooors!");`
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
                <>
                  <p
                    className={`text-base lg:text-lg font-robotoMono max-w-5xl text-center md:text-left`}
                  >
                    {section.description}
                  </p>
                  <CodeBlock
                    text={section.snippet}
                    language={'javascript'}
                    theme={dracula}
                    showLineNumbers={false}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`z-50 text-3xl lg:text-5xl cursor-pointer text-whitfont-bold text-center md:text-left ${currentlyOpen != 4 && 'text-onyx hover:text-onyx/90 '
            }`}
          onClick={() => handleSectionClick(4)}
        >
          Here’s the Full Code!
        </div>
        {currentlyOpen === 4 && (
          <div className="overflow-scroll md:overflow-y-hidden lg:overflow-hidden max-w-[calc(100vw-30px)] z-50">
            <CodeBlock
              text={CODE_EXAMPLE}
              language={'javascript'}
              theme={dracula}
              showLineNumbers={false}
            />
          </div>
        )}
      </section>
    </>
  )
}

export default ExpandableSection
