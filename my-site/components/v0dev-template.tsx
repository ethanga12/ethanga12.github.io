/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/XgEOLGa0wSe
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import TypingComponent from "./typing"
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
              <Link
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors scroll-smooth"
                href="#contact"
              >
                Contact Me
              </Link>
              <div className="flex space-x-4">
                <Link
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  href="https://www.linkedin.com/in/ethanasis/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
                <Link
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
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
            <p className="text-lg leading-loose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
              I&apos;m an entry-level software and machine learning engineer with a passion for building intelligent
              applications. My skills include full-stack web development, Python programming, and data analysis. I&apos;m
              excited about the potential of AI to transform industries and am eager to contribute to innovative
              projects.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">Projects <br /><br /></h1>
      <Tabs className="w-full" defaultValue="software">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="coursework">Coursework</TabsTrigger>
            </TabsList>
            <TabsContent value="professional">
              <div className="grid gap-10 md:gap-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Personal Task Manager</h3>
                  <p className="text-gray-500 dark:text-gray-400">Simple task manager app</p>
                </div>
                <Image
                  alt="Personal Task Manager"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="800"
                />
                <div className="space-y-4 text-lg max-w-prose">
                  <p className="text-gray-500 dark:text-gray-400">
                    The Personal Task Manager is a sleek and intuitive task management application that allows users to
                    organize their daily tasks with ease. The app features a clean and user-friendly interface, making it
                    simple to add, edit, and complete tasks. Users can create multiple task lists, set due dates and
                    reminders, and mark tasks as complete once they are done. The app is designed to help users stay organized
                    and productive, whether they are managing work projects, household chores, or personal to-do lists.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Recipe Finder</h3>
                  <p className="text-gray-500 dark:text-gray-400">Search and save your favorite recipes</p>
                </div>
                <Image
                  alt="Recipe Finder"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="800"
                />
                <div className="space-y-4 text-lg max-w-prose">
                  <p className="text-gray-500 dark:text-gray-400">
                    The Recipe Finder app allows users to search for recipes based on ingredients, cuisine, or dietary
                    preferences. Users can save their favorite recipes to their profile, create shopping lists, and share
                    recipes with friends. The app also includes a meal planning feature that helps users organize their weekly
                    meals and automatically generates shopping lists based on their meal choices. With the Recipe Finder,
                    users can discover new and delicious dishes, reduce food waste by using up ingredients in their pantry,
                    and simplify the meal planning process.
                  </p>
                </div>
                <div className="grid gap-10 md:gap-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Sentiment Analysis</h3>
                    <p className="text-gray-500 dark:text-gray-400">Analyzing the sentiment of customer reviews</p>
                  </div>
                  <Image
                    alt="Sentiment Analysis"
                    className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                  <div className="space-y-4 text-lg max-w-prose">
                    <p className="text-gray-500 dark:text-gray-400">
                      The Sentiment Analysis project uses natural language processing and machine learning to analyze the
                      sentiment of customer reviews. The model is trained to classify text as positive, negative, or neutral
                      and can accurately identify the overall sentiment expressed in the reviews. The project includes a web
                      interface where users can input text, and the model will provide the sentiment analysis results. The
                      Sentiment Analysis tool is designed to help businesses automatically process and understand customer
                      feedback, identify areas of improvement, and make data-driven decisions to enhance the customer
                      experience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Image Classification</h3>
                    <p className="text-gray-500 dark:text-gray-400">Classifying images using deep learning</p>
                  </div>
                  <Image
                    alt="Image Classification"
                    className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                  <div className="space-y-4 text-lg max-w-prose">
                    <p className="text-gray-500 dark:text-gray-400">
                      The Image Classification project leverages convolutional neural networks (CNNs) to classify images into
                      different categories. The model is trained on a dataset of images and can accurately identify objects,
                      animals, and scenes in the pictures. Users can upload an image to the web interface, and the model will
                      predict the most likely class or classes for the image. The Image Classification tool is useful for
                      applications such as automated image tagging, content moderation, and visual search, allowing users to
                      quickly and accurately categorize and analyze large collections of images.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="grid gap-10 md:gap-8">
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
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Chatbot</h3>
                  <p className="text-gray-500 dark:text-gray-400">Building a conversational AI chatbot</p>
                </div>
                <Image
                  alt="Chatbot"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="800"
                />
                <div className="space-y-4 text-lg max-w-prose">
                  <p className="text-gray-500 dark:text-gray-400">
                    The Chatbot project demonstrates the creation of a conversational AI chatbot using natural language
                    understanding and generation models. The chatbot is trained to understand user queries and provide
                    relevant and helpful responses in natural language. Users can interact with the chatbot through a
                    web-based interface, asking questions on various topics, seeking information, or requesting assistance.
                    The chatbot showcases the capabilities of AI-powered virtual assistants in understanding human language
                    and engaging in meaningful conversations, making it a valuable addition to customer support services,
                    information retrieval systems, and other applications that require human-like communication.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Music Recommendation System</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Personalized music recommendations using machine learning
                  </p>
                </div>
                <Image
                  alt="Music Recommendation System"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="800"
                />
                <div className="space-y-4 text-lg max-w-prose">
                  <p className="text-gray-500 dark:text-gray-400">
                    The Music Recommendation System project showcases the application of machine learning algorithms to create
                    personalized music recommendations for users based on their listening preferences. The system analyzes the
                    user&apos;s listening history, music genres, and favorite artists to generate custom-tailored playlists and
                    suggest new songs and albums that the user is likely to enjoy. The project includes a web interface where
                    users can explore their personalized recommendations, discover new music, and create their own playlists.
                    The Music Recommendation System enhances the music discovery experience, helping users find the perfect
                    soundtrack for their mood and taste, and increasing engagement on music streaming platforms.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Fraud Detection</h3>
                  <p className="text-gray-500 dark:text-gray-400">Detecting fraudulent transactions with machine learning</p>
                </div>
                <Image
                  alt="Fraud Detection"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="800"
                />
                <div className="space-y-4 text-lg max-w-prose">
                  <p className="text-gray-500 dark:text-gray-400">
                    The Fraud Detection project demonstrates the use of machine learning models to identify and prevent
                    fraudulent transactions in financial systems. The system analyzes transaction data, user behavior, and
                    other relevant features to detect anomalies and patterns associated with fraudulent activity. The project
                    includes a web interface for financial institutions and merchants to integrate the fraud detection system
                    into their payment processing workflows. The system can automatically flag suspicious transactions for
                    further review, reducing the risk of fraud and enhancing security for customers. The Fraud Detection
                    project showcases the application of AI and data analytics to combat financial crime and safeguard the
                    integrity of digital transactions.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="coursework">
              <div className="grid gap-10 md:gap-8">
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
          <div className="space-y-4 scroll-smooth">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
          </div>
          <div className="grid gap-10 md:gap-8 text-black scroll-smooth">
            <div className="space-y-2">
              <h3 className="text-1xl font-bold tracking-tighter sm:text-3xl">
                Bachelor of Science in Computer Science <br />
                Bachelor of Art in Music
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Brown University</p>
            </div>
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
          </div>
          <br />
          <div className="space-y-4 text-black scroll-smooth" id="contact">
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
    </>
  )
}