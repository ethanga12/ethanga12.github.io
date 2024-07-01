/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MElRdKn8dNb
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import Image from "next/image"

export function Component() {
  return (
    <Tabs className="w-full" defaultValue="software">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="software">Software Engineering Projects</TabsTrigger>
        <TabsTrigger value="ml">Machine Learning Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="software">
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
      <TabsContent value="ml">
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
              users listening history, music genres, and favorite artists to generate custom-tailored playlists and
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
    </Tabs>
  )
}
