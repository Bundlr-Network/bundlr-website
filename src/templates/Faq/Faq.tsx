import { Button, CtaCentralized, Footer, NavbarDesktop } from '@/components'
import {
  ChevronDownIcon,
  DevIcon,
  DiscordIcon,
  MinusFooterDetailIcon,
  PlusFooterDetailIcon,
  SearchIcon
} from '@/svg'
import {
  CtaCentralizedProps,
  CtaScheme
} from '@/components/CtaCentralized/CtaCentralized'
import { ReactNode, useEffect, useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { emit } from 'process'
import { options } from 'preact'

enum FaqCategory {
  All = 'All Categories',
  General = 'General',
  Developer = 'Developer',
  Testnet = 'Testnet',
}

const CTA: React.FC = () => {
  return (
    <div className="h-[616px] relative bg-black text-white py-4 px-6 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white font-light font-fkDisplay text-6xl max-w-[670px] text-center leading-none mb-11">
        Can&apos;t Find What You&apos;re Looking For?
      </h2>
      <button className="font-robotoMono uppercase text-sm bg-white text-black flex items-center gap-3 px-4 py-3 rounded-full hover:font-bold">
        Ask us on discord
        <DiscordIcon className="w-5" />
      </button>

      <div className="hidden lg:flex absolute top-0 right-0 overflow-hidden transform rotate-180">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image1"
        />
      </div>
      <div className="hidden lg:flex absolute top-0 left-0 overflow-hidden">
        <img
          src="/assets/community/cta-blocks-2.png"
          className="w-full h-full rounded-lg"
          alt="image2"
        />
      </div>
    </div>
  )
}

const useFaq = () => {

  const [currentCategory, setCurrentCategory] = useState(FaqCategory.General)

  const [search, setSearch] = useState('')

  const PAGE_SEO = {
    title: 'Page Title',
    description: 'Page Description'
  }

  const FAQ_CONTENT = [
    {
      "title": "Where should I subscribe to receive the latest news?",
      "description": "Please follow us on <a className=\"underline\" href=\"https://discord.gg/bundlr\">Discord</a> and <a className=\"underline\" href=\"https://twitter.com/BundlrNetwork\">Twitter</a> to keep up with the latest updates and news.",
      "category": FaqCategory.General
    },
    {
      "title": "What is Bundlr?",
      "description": "Bundlr is a new data layer for the internet. Through decentralized consensus, Bundlr transparently shows the source and time at which data originated and proves that it has not been censored. For censorship resistance and permanence, this data is stored on Arweave’s blockchain. Bundlr is the foundational infrastructure that enables the creation of solutions to data integrity issues.",
      "category": FaqCategory.General
    },
    {
      "title": "What is Arweave?",
      "description": "An incentivized/immutable storage protocol that lets users store their data permanently with a one-time fee. Arweave is a new type of storage that backs data with a sustainable and perpetual endowment, allowing users and developers to truly store data forever for the very first time.As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.",
      "category": FaqCategory.General
    },
    {
      "title": "What does Bundlr solve?",
      "description": "Bundlr is solving the data integrity challenge by making permanent decentralized data storage performant and scalable. Bundlr allows you to upload data in ~8ms while being able to scale to tens of thousands of transactions per second.",
      "category": FaqCategory.General
    },
    {
      "title": "How does Bundlr work?",
      "description": "Please check out <a className=\"underline\" href=\"https://docs.bundlr.network/docs/overview\">the Bundlr docs</a> to get a deeper understanding of how Bundlr works.",
      "category": FaqCategory.General
    },
    {
      "title": "What is a bundle?",
      "description": "A set of Bundlr transactions joined into a single Arweave transaction.",
      "category": FaqCategory.General
    },
    {
      "title": "What are bundlers?",
      "description": "Bundlers are nodes on the Bundlr network that receive Bundlr transactions, handle payment channels, and produce bundles.",
      "category": FaqCategory.General
    },
    {
      "title": "Why bundles?",
      "description": "Bundles allow for infinite transaction scaling. Arweave is limited to 1000 transactions per block (one every 2 minutes). This limits Arweave to an absolute maximum of 8.3 Arweave transactions per second. Bundles can contain an unlimited number of transactions, whilst only counting as one Arweave transaction. For example, If every one of those 1000 Arweave transactions was a bundle that contained 1000 transactions, Arweave would be effectively capable of 8,333 transactions per second. If the network needs higher transaction throughput, you simply have to increase the number of transactions per bundle.",
      "category": FaqCategory.General
    },
    {
      "title": "Is there a max size limit for a bundle?",
      "description": "Bundles do not have a size limit.",
      "category": FaqCategory.General
    },
    {
      "title": "How can I use Bundlr?",
      "description": "You can use <a className=\"underline\" href=\"https://docs.bundlr.network/tutorials/bundlr-nodejs\">Bundlr via Nodejs on the server</a> or <a className=\"underline\" href=\"https://docs.bundlr.network/tutorials/file-uploader\">directly in the browser.</a> View more on how to use Bundlr <a className=\"underline\" href=\"https://docs.bundlr.network/CLI/installation-setup\">in the CLI section.</a>",
      "category": FaqCategory.General
    },
    {
      "title": "How long does it take to upload data on Bundlr?",
      "description": "~8ms.",
      "category": FaqCategory.General
    },
    {
      "title": "How long does it take to retrieve my data?",
      "description": "Once the data is uploaded, you can instantly retrieve your data.",
      "category": FaqCategory.General
    },
    {
      "title": "Where can I see my data before it gets seeded onto Arweave?",
      "description": "`gateway.bundlr.network/tx/:txid/data` (Bundlr uploads only).Or, `arweave.net/<your transaction id>`",
      "category": FaqCategory.General
    },
    {
      "title": "How long does it take for data to be seeded onto Arweave?",
      "description": "It takes ~100 minutes for a transaction to be final on Arweave.",
      "category": FaqCategory.General
    },
    {
      "title": "Is there an explorer for Bundlr/Arweave?",
      "description": "<a className=\"underline\" href=\"https://v2.viewblock.io/arweave\">Arweave Explorer</a> | <a className=\"underline\" href=\"https://v2.viewblock.io/arweave\">ViewBlock</a><a className=\"underline\" href=\"https://scar.vercel.app/\">SCAR</a>",
      "category": FaqCategory.General
    },
    {
      "title": "Is there any limitation for uploads/storage on Bundlr?",
      "description": "There’s no limitation on the number of uploads and you can store as much as data you need.",
      "category": FaqCategory.General
    },
    {
      "title": "Is there a public sale, Airdrop or etc?",
      "description": "We do not have a public token yet. Anyone claiming a presale, token airdrop, etc via DM is a scam. Please follow the announcements on <a className=\"underline\" href=\"https://discord.gg/bundlr\">Discord</a> and <a className=\"underline\" href=\"https://twitter.com/BundlrNetwork\">Twitter.</a>",
      "category": FaqCategory.General
    },
    {
      "title": "What currencies does Bundlr support?",
      "description": "Please <a className=\"underline\" href=\"https://docs.bundlr.network/sdk/using-other-currencies\">view all supported currencies here.</a>",
      "category": FaqCategory.General
    },
    {
      "title": "Does Bundlr offer free uploads?",
      "description": "Yes. Uploads below 100KB are free. Please note that free uploads are only on node2.",
      "category": FaqCategory.General
    },
    {
      "title": "Do I need to have a balance on my node for free uploads?",
      "description": "No. For uploads below 100KB you do not need a balance on your node.",
      "category": FaqCategory.General
    },
    {
      "title": "How does Bundlr facilitate payment in any token?",
      "description": "Bundlr registers funding / withdraw transactions off-chain in payment channels.Example: With Polygon, you will send MATIC and the Polygon tx is recorded off-chain which will credit your Polygon (MATIC) account on Bundlr.",
      "category": FaqCategory.General
    },
    {
      "title": "How does the payment channel work?",
      "description": "You can submit an on-chain transaction using the chains we support via their own cryptography.Then, this transaction is recorded off-chain by the bundlers and you receive the equivalent amount of token(s) in your Bundlr account.",
      "category": FaqCategory.General
    },
    {
      "title": "How are funds secure?",
      "description": "Each bundler stakes $BNDLR which acts as leverage for their balances. A bundler can’t hold more balance than a fraction of their stake. The higher the stake, the more balances they can handle.",
      "category": FaqCategory.General
    },
    {
      "title": "How long does the funding process take?",
      "description": "The funding process varies depending on which chain you use for funding and the speed of that network.Example: Funding with Arweave takes ~20 minutes to show up, whereas funding with Polygon/Solana can be pretty instant.",
      "category": FaqCategory.General
    },
    {
      "title": "How does the fee function work on Bundlr?",
      "description": "Please check out <a className=\"underline\" href=\"https://docs.bundlr.network/learn/fees\">the fee function here.</a>",
      "category": FaqCategory.General
    },
    {
      "title": "Is there a calculator for Arweave fees?",
      "description": "<a className=\"underline\" href=\"https://ar-fees.arweave.dev/\">Arweave Fees</a>",
      "category": FaqCategory.General
    },
    {
      "title": "What is the difference between Devnet and Testnet?",
      "description": "\nBundlr has a Devnet that allows you to use Testnet/Devnet cryptocurrency networks to pay for storage. On Devnet, data is never moved to Arweave and will be cleared from Bundlr after a week.\nWhereas, Bundlr’s testnet is an isolated test network of bundlers and validators.\n\n",
      "category": FaqCategory.General
    },
    {
      "title": "What is the difference between node1 and node2?",
      "description": "Each node has different pricing. From network design, it creates competition.Higher Competition = Higher user value for money (to a point). Nodes do not share funding balances, you can only upload to a node you have funded.",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is the difference between `<uploadFile>` and `<uploadFolder>` ?",
      "description": "`<uploadFile>` is one by one.`<uploadFolder>` uploads all + a manifest. A manifest is a way to describe a directory accessible via `https://arweave.net/<tx-id>/<filename>`After a successful folder upload, two files are written to your local project directory [folder_name].csv and [folder_name].json, each contains the transaction id for each file uploaded. That transaction id can be used to retrieve the uploaded data by forming an URL with this format: `[https://arweave.net]/[transaction_id]`. You can also retrieve the uploaded data using the manifest id combined with the original relative file URL.We have <a className=\"underline\" href=\"/sdk/basic-features/uploading-folder\">a detailed guide here</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is the difference between Bundlr class and WebBundlr class?",
      "description": "The Bundlr class is used for NodeJS applications on the server.Whereas WebBundlr is used in the browser. To learn more, we have tutorials on working with <a className=\"underline\" href=\"/tutorials/bundlr-nodejs\">Bundlr+NodeJS.</a>and <a className=\"underline\" href=\"/tutorials/file-uploader\">WebBundlr+React</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "How do I use WebBundlr in a create-react-app project?",
      "description": "Bundlr and WebBundlr are fully compatible with React. However, if you are using npx create-react-app, you will need to do a few extra steps when setting up your project. We have <a className=\"underline\" href=\"/recipes/bundlr-react\">a fully detailed recipe here.</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "How do I use WebBundlr when working with RainbowKit?",
      "description": "Internally, WebBundlr and RainbowKit use a slightly different Provider class with different function signatures. It is possible to make the classes compatible, however it takes one extra step. We have <a className=\"underline\" href=\"/recipes/bundlr-rainbowkit\">a detailed recipe here.</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "Can I host a website using Bundlr?",
      "description": "Yes. You can host static websites. We have <a className=\"underline\" href=\"/recipes/bundlr-uploading-static-sites\">a detailed recipe on how to do it here.</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is the difference between two npm packages - arbundles and bundlr/js-client?",
      "description": "Arbundles is a package designed to create cryptographically verifiable ANS104 bundles with supported cryptocurrencies and is specialized for this use case. The js-client is a client designed to allow you to programmatically interact with bundler nodes, including funding, withdrawals, and uploads.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is there a way to mint atomic NFTs via Bundlr?",
      "description": "Yes. It is possible with Warp.cc",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is optimistic finalization?",
      "description": "Optimistic finalization is an incentive mechanism used by Bundlr to provide instant upload times.When working directly with Arweave, a block is considered confirmed after 50 block confirmations. Data is considered seeded after it is stored by a minimum number of miners. This all can take up to to 100 minutes.When you post a transaction to Bundlr, you are given back a signed receipt from the node you upload to. At this point, we can optimistically consider the transaction final because there is a greater financial incentive for nodes to behave honestly than there is for malicious behavior. If your transaction does not make it to Arweave, you can submit your transaction receipt to Bundlr and that node’s stake gets slashed.",
      "category": FaqCategory.Developer
    },
    {
      "title": "How does optimistic finalization work?",
      "description": "When you post a transaction, a set of validators co-sign the transaction which acts as a proof of existence/data availability. At that point, if a bundler does not get the data on-chain, the bundler’s stake in question is slashed.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is it possible to assign an api key to a funded Bundlr account so that I as a service provider can pay for my client's uploads?",
      "description": "No, but it is possible to pay for your client's uploads using Server-Side Signing.",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is Server-Side Signing?",
      "description": "Server-Side Signing is a method that allows you to sign and pay for your user’s data securely without exposing your private key.You can <a className=\"underline\" href=\"/recipes/server-side-signing\">learn more about Server-Side Signing here.</a>",
      "category": FaqCategory.Developer
    },
    {
      "title": "Which Ethereum Testnet is supported on Devnet?",
      "description": "Goerli.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Which other Testnets does Bundlr support in other chains on Devnet?",
      "description": "Solana (devnet), GoerliEth, Matic, Fantom, BNB, Chainlink, Avalanche, Near, Algorand, arbEth, Aptos.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is it possible to use Bundlr to interact with contracts?",
      "description": "If you add the required SmartWeave tags to your bundlr transaction, it will allow you to interact with smartweave contracts.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Are node1 and node2 interconnected?",
      "description": "No. The nodes are separate from each other. You can only upload to the actual nodes you have funded.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is there any kind of limitation on the number of requests from one IP to a node?",
      "description": "There is no limitation on the number of requests from one IP to a node.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is it possible to know an upload’s id before uploading?",
      "description": "Yes. You can create/sign/upload transactions in multiple steps.",
      "category": FaqCategory.Developer
    },
    {
      "title": "What is the format of the transaction id?",
      "description": "It is 32 bytes base64url encoded.",
      "category": FaqCategory.Developer
    },
    {
      "title": "Is there an expected max/min length of a transaction id?",
      "description": "\n43 bytes.\n\n",
      "category": FaqCategory.Developer
    },
    {
      "title": "How can I participate in the testnet?",
      "description": "<a className=\"underline\" href=\"/learn/setup-validator-node\">Here is a full guide.</a>",
      "category": FaqCategory.Testnet
    },
    {
      "title": "What are the hardware requirements?",
      "description": "Memory: 8GB RAM-   CPU: Quad-Core-   Disk: 250 GB SSD Storage-   Bandwidth: 1 Gps for download/ 100 Mbps for upload.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Which wallet should I use for participating in the testnet?",
      "description": "Arweave.appHere is <a className=\"underline\" href=\"/tutorials/get-arweave-wallet\">a tutorial on how to get an Arweave wallet</a>",
      "category": FaqCategory.Testnet
    },
    {
      "title": "I have generated a wallet via cargo, how can I see the address?",
      "description": "Run: `cargo run --bin wallet-tool show-address --wallet ./wallet.json`",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Do I need Arweave tokens to participate in the testnet?",
      "description": "No. In order to participate, you will receive testnet tokens <a className=\"underline\" href=\"https://bundlr.network/faucet\">from the Bundlr faucet.</a>",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Where can I get the test tokens?",
      "description": "From <a className=\"underline\" href=\"https://bundlr.network/faucet\">the Faucet.</a> These tokens are NOT on the main Arweave blockchain, but you will need an Arweave wallet to receive them.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Do I need to pass KYC for participating in the testnet?",
      "description": "No. KYC is not required.However, you should verify your Twitter account in order to claim test tokensfrom <a className=\"underline\" href=\"https://bundlr.network/faucet\">the Faucet.</a>",
      "category": FaqCategory.Testnet
    },
    {
      "title": "How can I check to see if I have received test tokens or not?",
      "description": "Run: `testnet-cli balance <address>`",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Can I participate in TESTNET I as a delegator?",
      "description": "No. Delegation and staking will be available on TESTNET II.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "I did everything but have not received test tokens. What should I do?",
      "description": "Simply join our <a className=\"underline\" href=\"https://discord.gg/bundlr\">Discord channel</a> and post your tweet URL in #faucet-issues channel.Ps: Please note that you can ONLY verify 1 address with each Twitter account.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "I have received test tokens but cannot see them in my Arweave wallet. Is it fine?",
      "description": "Yes. We use a separate Arweave network.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Is there any incentivization for TESTNET I ?",
      "description": "TESTNET I is unincentivized.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Is there going to be an incentivized testnet in the future?",
      "description": "Yes. TESTNET II is going to be incentivized.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Will there be any advantage for those who participated in TESTNET I in the future?",
      "description": "There is no public info available for this. You can participate in both phases.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "How can I check to see if my node is running?",
      "description": "Run the command: `docker-compose ps` - you should see three entries (or more if you’re running other containers) - check that there are containers called `gateway`, `validator`, and `postgres`, and that they are running.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "What is the current validator contract address?",
      "description": "RkinCLBlY4L5GZFv8gCFcrygTyd5Xm91CzKlR6qxhKA",
      "category": FaqCategory.Testnet
    },
    {
      "title": "When does TESTNET I end?",
      "description": "There is no confirmed end date for TESTNET I. Please follow the announcements.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "Should I keep my validator live until Testnet II?",
      "description": "Yes. You can keep your validator as long as you want.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "How can I prove that a validator belongs to me?",
      "description": "You only need to backup the wallet.json file.",
      "category": FaqCategory.Testnet
    },
    {
      "title": "I want to move my node to a better server, which file should I backup before migrating?",
      "description": "\nYou only need to backup the wallet.json file.\n\n",
      "category": FaqCategory.Testnet
    }
  ]

  const CTA_CONTENT: CtaCentralizedProps = {
    title: "Can't Find What You're Looking For?",
    cta: 'ASK US ON DISCORD',
    ctaIcon: <DiscordIcon className="w-5" />,
    href: 'https://discord.gg/bundlr',
    newTab: true,
    scheme: CtaScheme.black
  }

  const [mobileExpanded, setMobileExpanded] = useState(false)

  return {
    PAGE_SEO,
    FAQ_CONTENT,
    CTA_CONTENT,
    currentCategory,
    setCurrentCategory,
    search,
    setSearch,
    mobileExpanded,
    setMobileExpanded
  }
}

const ExpandableSection = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <details className="last:border-b-0 border-b-[2.5px] border-dotted pt-4 pb-8 border-gray-400 border-spacing-4">
      <summary className="text-2xl font-light mt-[26px] flex justify-between items-center cursor-pointer font-fkDisplay">
        {title}
        <PlusFooterDetailIcon />
        <MinusFooterDetailIcon />
      </summary>
      <p className="font-robotoMono mt-5" dangerouslySetInnerHTML={{
        __html: description
      }}></p>
    </details>
  )
}

const Faq: NextPage = () => {
  const {
    PAGE_SEO,
    FAQ_CONTENT,
    CTA_CONTENT,
    currentCategory,
    setCurrentCategory,
    search,
    setSearch,
    mobileExpanded,
    setMobileExpanded
  } = useFaq()

  return (
    <>
      <NextSeo {...PAGE_SEO} />
      <NavbarDesktop />
      {/* Categories filter  */}
      <section className="max-w-[976px] ml-auto mr-auto">
        <div className="flex justify-between items-start lg:items-center gap-4 lg:gap-0 pb-9 pt-32 flex-col lg:flex-row px-4">
          <h1 className="font-fkDisplay text-5xl font-light">FAQs</h1>
          {/* search box with icon on left of the input area */}
          <div className="flex items-center border border-gray-400 rounded-full py-2 px-4 text-lg font-robotoMono gap-3 w-full lg:w-auto">
            <SearchIcon className="ml-2 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none focus:outline-none text-gray-600"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className={`mt-8 flex justify-between items-center mx-4 lg:hidden font-bold bg-black text-white cursor-pointer text-sm uppercase font-robotoMono p-[15px] lg:p-[5px]`}
        >
          {
            Object.values(FaqCategory)[
            Object.keys(FaqCategory).indexOf(currentCategory)
            ]
          } <ChevronDownIcon className={`w-5 transition-all ${mobileExpanded ? 'transform rotate-180' : ''
            }`} />
        </div>
        {
          mobileExpanded && (
            <ul className="lg:hidden flex-col lg:flex-row justify-between items-center pt-2 px-4 lg:px-0">

              {Object.values(FaqCategory).map((key) => {
                return (
                  <li
                    key={key}
                    onClick={() => {
                      if (key && Object.values(FaqCategory).includes(key)) {
                        setCurrentCategory(
                          Object.keys(FaqCategory).find(
                            (k) =>
                              FaqCategory[k as keyof typeof FaqCategory] === key
                          ) as FaqCategory
                        )
                      }
                      setMobileExpanded(false)
                    }}
                    className={`
                ${currentCategory ===
                        Object.keys(FaqCategory).find(
                          (k) => FaqCategory[k as keyof typeof FaqCategory] === key
                        )
                        ? 'font-bold cursor-default bg-black text-white'
                        : ''
                      } cursor-pointer text-sm uppercase font-robotoMono w-full lg:w-auto p-[15px] lg:p-[5px]

              
                `}
                  >
                    {key}
                  </li>
                )
              })}
            </ul>
          )
        }
        <ul className="hidden lg:flex flex-col lg:flex-row justify-between items-center pt-12 px-4 lg:px-0">
          {Object.values(FaqCategory).map((key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  if (key && Object.values(FaqCategory).includes(key)) {
                    setCurrentCategory(
                      Object.keys(FaqCategory).find(
                        (k) =>
                          FaqCategory[k as keyof typeof FaqCategory] === key
                      ) as FaqCategory
                    )
                  }
                }}
                className={`
                ${currentCategory ===
                    Object.keys(FaqCategory).find(
                      (k) => FaqCategory[k as keyof typeof FaqCategory] === key
                    )
                    ? 'font-bold cursor-default bg-black text-white'
                    : ''
                  } cursor-pointer text-sm uppercase font-robotoMono w-full lg:w-auto p-[15px] lg:p-[5px]

              
                `}
              >
                {key}
              </li>
            )
          })}
        </ul>
        <ul className="pt-4 lg:pt-12 px-4 lg:px-0">
          {FAQ_CONTENT.filter((faq) =>
            (currentCategory as string) === 'All'
              ? true
              : // @ts-ignore
              FaqCategory[faq.category] === currentCategory
          )
            .filter(
              (faq) =>
                faq.title.toLowerCase().includes(search.toLowerCase()) ||
                faq.description.toLowerCase().includes(search.toLowerCase())
            )
            .map((faq, index) => (
              <>
                <ExpandableSection {...faq} key={`expandable-${index}`} />
              </>
            ))}
        </ul>
      </section>

      <section className="mt-10 lg:mt-40">
        <CtaCentralized {...CTA_CONTENT} />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Faq
