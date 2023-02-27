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
        <p className="text-center font-robotoMono text-lg md:text-left">
          There are three simple steps to building on Bundlr:
        </p>
        <ul className="flex flex-col gap-10 lg:gap-16">
          {SECTION_CONTENT.map((section) => (
            <li
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 md:items-start lg:gap-9"
            >
              <h2
                className={`flex items-center gap-3 text-center text-3xl text-white md:text-left lg:text-5xl ${
                  currentlyOpen !== section.id && 'text-onyx hover:text-onyx/90'
                }`}
              >
                <span
                  className={`hidden h-6 w-6 items-center justify-center rounded-full bg-white text-base text-black lg:flex ${
                    currentlyOpen !== section.id && 'bg-onyx hover:bg-onyx/90'
                  }`}
                >
                  {section.id}
                </span>{' '}
                {section.title}
              </h2>
              {currentlyOpen === section.id && (
                <>
                  <p
                    className={`max-w-5xl text-center font-robotoMono text-base md:text-left lg:text-lg`}
                  >
                    {section.description}
                  </p>
                  <div className="w-full">
                    <CodeBlock
                      text={section.snippet}
                      language={'javascript'}
                      theme={dracula}
                      showLineNumbers={false}
                    />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`text-whitfont-bold z-50 cursor-pointer text-center text-3xl md:text-left lg:text-5xl ${
            currentlyOpen != 4 && 'text-onyx hover:text-onyx/90 '
          }`}
          onClick={() => handleSectionClick(4)}
        >
          Here’s the Full Code!
        </div>
        {currentlyOpen === 4 && (
          <div className="z-50 max-w-[calc(100vw-30px)] overflow-scroll md:overflow-y-hidden lg:overflow-hidden">
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
