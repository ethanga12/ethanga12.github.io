/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/XgEOLGa0wSe
 */
import Link from "next/link"
import { Input } from "../../portfolio-site/components/ui/input"
import Image from "next/image"
import TypingComponent from "../../portfolio-site/components/typing"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"

export function V0devTemplate() {
  return (
    <>
      <div className="scroll-smooth">
        <div className="bg-gray-50/90 w-full py-12 rounded-md text-black">
          <div className="container grid gap-6 px-4 md:px-6 self-end">
            <div className="flex justify-between space-between items-center">
              <div className="space-y-2 ">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">by Ethan Asis</h1>
                <TypingComponent />
              </div>
              <div className="flex items-center space-x-10 p-2 rounded-md">
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors scroll-smooth"
                  href="/Ethan Asis Resume 4_24.pdf"
                  download
                >
                  Resume
                </a>
                <Link
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors scroll-smooth"
                  href="#contact"
                >
                  Contact Me
                </Link>
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover:scale-125"
                    href="https://www.linkedin.com/in/ethanasis/"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </Link>
                  <Link
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover:scale-125 duration-300"
                    href="https://github.com/ethanga12"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-12 md:py-16 xl:py-20 scroll-smooth">
          <div className="container grid max-w-5xl gap-10 px-4 md:px-6">
            <div className="space-y-4">
              <p className="text-lg leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400 fade-in">
                I&apos;m an entry-level software and machine learning engineer with a passion for building intelligent
                applications. My skills include full-stack web development, Python programming, and data analysis. I&apos;m
                excited about the potential of AI to transform industries and am eager to contribute to innovative
                projects.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">Projects<br /><br /></h1>
        <Tabs className="w-full" defaultValue="professional">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="coursework">Coursework</TabsTrigger>
          </TabsList>
          <TabsContent value="professional">
            <div className="grid gap-10 md:gap-8 fade-in">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl dark:text-gray-800">foreverfan</h3>
                <p className="text-gray-500 dark:text-gray-400">Fullstack and Business Development</p>
              </div>
              <Image
                alt="Personal Task Manager"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="400"
                src="/Screenshot 2024-06-27 at 12.50.01 PM.png"
                width="800"
              />
              <div className="space-y-4 text-lg max-w-prose mx-auto">
                <p className="text-gray-500 dark:text-gray-400">
                  Foreverfan is a Brown University B-Lab sponsored startup aimed at helping new musicians analyze and bolster their growth with our data and
                  social tools. I built out core technical features and business strategies with the CEO and CTO to continue
                  growing the venture.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl dark:text-gray-800">Alarm.com</h3>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer Intern</p>
              </div>
              <Image
                alt="Recipe Finder"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="200"
                src="/adc.png"
                width="400"
              />
              <div className="space-y-4 text-lg max-w-prose mx-auto">
                <p className="text-gray-500 dark:text-gray-400">
                  In the Summer of 2022, I had the opportunity to work as a Software Engineering Intern at Alarm.com, where I was responsible for researching the conversion and implementation of a proprietary AI model with another proprietary middleware sdk in order to run the model on embedded systems nationwide. In order to do this, I worked with a small team as the only intern, where I provided frequent updates on my findings and attempts to join the two softwares together. With my thorough research and exhaustive approach, coupled with my superiors&apos; support and guidance, we were able to achieve something that we were uncertain was possible at the beginning of my internship, which the team plans to bring to consumers in the near future. As a result, I have left this internship with a strong ability to plan and execute longer-term projects&and to understand and work through complex, unintuitive solutions.
                </p>
              </div>
              <div className="grid gap-10 md:gap-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl dark:text-gray-800">Webscraping and Leads Generation</h3>
                  <p className="text-gray-500 dark:text-gray-400">Various Startups</p>
                </div>
                <Image
                  alt="Sentiment Analysis"
                  className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                  height="100"
                  src="/coding.png"
                  width="200"
                />
                <div className="space-y-4 text-lg max-w-prose mx-auto">
                  <p className="text-gray-500 dark:text-gray-400">
                    In my earlier days as a software engineer, I worked at multiple startups to produce valuable data for their teams. I worked with C-suite officers to understand their needs and then built out webscrapers to gather the necessary data. I was able to apply this tool to multiple early stage SaaS companies. 
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="research">
            <div className="grid gap-10 md:gap-8 fade-in">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl dark:text-gray-800">VR Teleop</h3>
                <p className="text-gray-500 dark:text-gray-400">Research Assistant</p>
              </div>
              <Image
                alt="Spot Robotics"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="800"
                src="/IMG_0099.png"
                width="400"
              />
              <div className="mx-auto space-y-4 text-lg max-w-prose">
                <p className="text-gray-500 dark:text-gray-400">
                  PI: Dr. Stefanie Tellex
                  <br />
                  Assisting in the early development of long distance low-latency teleoperations with Robotics, VR, Computer Vision, AI, and
                  Unity. Working on a team of five graduate students to help facilitate additional undergraduate research. The final goal of this project was to create a system that could be used to control robots from a distance with minimal delay from across the globe in a fully rendered 3D Virtual Reality Environment.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="coursework">
            <div className="grid gap-10 md:gap-8 fade-in">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Stock Price Prediction</h3>
                <p className="text-gray-500 dark:text-gray-400">Forecasting stock prices with machine learning</p>
              </div>
              <Image
                alt="Stock Price Prediction"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="400"
                src="/placeholder.svg"
                width="800"
              />
              <div className="space-y-4 text-lg max-w-prose">
                <p className="text-gray-500 dark:text-gray-400">
                  The Stock Price Prediction project uses historical stock price data and machine learning algorithms to
                  forecast future price movements. The model analyzes various factors such as trading volume, price trends,
                  and market indicators to make predictions about the direction of stock prices. The project includes a web
                  interface where users can enter the symbol of a stock they want to forecast, and the model will provide
                  the predicted price trajectories. The Stock Price Prediction tool is designed to help investors make
                  informed decisions about buying or selling stocks based on the projected price trends, improving their
                  ability to manage their investment portfolios.
                </p>
              </div>
            </div>
          </TabsContent>
          </Tabs>
      <div className="w-full py-12 md:py-16 xl:py-20 text-black scroll-smooth">
        <div className="container">
          <div className="space-y-4 scroll-smooth">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-8 text-black scroll-smooth">
            <div className="flex-1 space-y-2">
              <h3 className="text-1xl font-bold tracking-tighter sm:text-3xl">
                Bachelor of Science in Computer Science <br />
                <p className="text-gray-500 dark:text-gray-400">Artificial Intelligence and Software Principles Pathways</p>
                Bachelor of Art in Music
                <p className="text-gray-500 dark:text-gray-400">Production Pathway</p>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Brown University</p>
            </div>
            <div className="flex-shrink-0">
              <Image
                alt="Brown University"
                className="overflow-hidden rounded-lg object-cover object-center"
                height="100"
                src="/Brown University.jpg"
                width="150"
              />
            </div>
          </div>
          <br />
          <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Relevant Coursework</h3>
              <p className="text-gray-500 dark:text-gray-400">Deep Learning</p>
              <p className="text-gray-500 dark:text-gray-400">Machine Learning</p>
              <p className="text-gray-500 dark:text-gray-400">Computer Vision</p>
              <p className="text-gray-500 dark:text-gray-400">UI/UX</p>
              <p className="text-gray-500 dark:text-gray-400">Programming Languages</p>
              <p className="text-gray-500 dark:text-gray-400">Embedded Systems</p>
              <p className="text-gray-500 dark:text-gray-400">Logic for Systems</p>
              <p className="text-gray-500 dark:text-gray-400">Statistical Inference</p>
            </div>
          <br />
          <div className="space-y-10 text-black scroll-smooth" id="contact">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <br />
          </div>

          <div className="grid max-[700px] gap-4 text-black">
            <div className="grid gap-2">
              <label className="block text-sm font-medium text-gray-900" htmlFor="name">
                Name
              </label>
              <Input id="name" placeholder="Your name" className="text-gray-400"/>
            </div>
            <div className="grid gap-2 bg-white">
              <label className="block text-sm font-medium text-gray-900 text-black" htmlFor="email">
                Email
              </label>
              <Input id="email" placeholder="Your email" type="email" className="text-gray-400"/>
            </div>
            <div className="grid gap-2" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
