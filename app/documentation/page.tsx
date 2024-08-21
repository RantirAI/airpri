import React from "react";

import img1 from "@/assets/docs/1.png";
import img2 from "@/assets/docs/2.png";
import img3 from "@/assets/docs/3.png";
import img4 from "@/assets/docs/4.png";
import img5 from "@/assets/docs/5.png";

function Documentation() {
  return (
    <div className="flex flex-col min-h-screen pt-0">
      <main className="flex-grow p-6 pt-0">
        <div
          className="text-3xl text-center md:text-4xl font-bold md:pb-10 
           bg-gradient-to-r
        from-blue-500
        to-green-400
    bg-clip-text
    text-transparent"
        >
          Introduction
        </div>
        <p className="mb-4">
          Introducing Framecast AI, an intuitive SaaS platform powered by Astria
          that generates Professional AI Headshots in minutes. This product is
          built to give developers & makers a great starting point into building
          AI applications that can generate real revenue. This is your launch
          pad - modify it, and make it your own to build a popular AI SaaS app.
        </p>
        <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
        <p className="mb-4">
          This section will guide you through the initial setup and installation
          process.
        </p>

        {/* Installing dependencies */}
        <h3 className="text-lg font-semibold mb-2">
          1. Installing dependencies
        </h3>
        <p className="mb-6">
          Once you purchase the code, move into the folder named{" "}
          <code>framecast-ai</code> and install the necessary dependencies, make
          sure that you have{" "}
          <a
            href="https://nodejs.org/en"
            className="italic hover:underline text-blue-500"
          >
            node/npm
          </a>{" "}
          or{" "}
          <a
            href="https://yarnpkg.com/"
            className="italic hover:underline  text-blue-500"
          >
            yarn
          </a>{" "}
          installed in your system:
        </p>
        <pre className="mb-2">
          <code className="bg-slate-300 p-2 rounded-sm">cd "source code"</code>
        </pre>
        <p className="mt-6 mb-6">For npm:</p>
        <pre>
          <code className="bg-slate-300 p-2 rounded-sm">
            npm install --legacy-peer-deps
          </code>
        </pre>
        <p className="mt-6 mb-6">For yarn:</p>
        <pre>
          <code className="bg-slate-300 p-2 rounded-sm">
            yarn --legacy-peer-deps
          </code>
        </pre>
        <div className="flex justify-center mt-10 mb-10">
          <img
            src={img1.src}
            alt="installing dependencies via terminal"
            height={850}
            width={850}
          />
        </div>

        {/* Create an .env file */}
        <h3 className="text-lg font-semibold mb-2">
          2. Create an{" "}
          <a
            href="https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables"
            className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
          >
            .env
          </a>{" "}
          file
        </h3>
        <p className="mb-6">Use the following titles for your file:</p>
        <pre className="mb-2 bg-slate-300 p-2 rounded-sm w-3/4">
          <code>
            {`# LEAP VARS (AI service)
# Get API key - https://docs.tryleap.ai/authentication
LEAP_API_KEY=

## Generate a random secret
LEAP_WEBHOOK_SECRET=
APP_WEBHOOK_SECRET=

# Get Leap Workflow ID - https://docs.workflows.tryleap.ai/reference/Workflow%20Runs/run_workflow
LEAP_WORKFLOW_ID=

# For local development, you can use the following values:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ANON_KEY=
SUPABASE_URL=

# RESEND VARS (Email service)
RESEND_API_KEY=

# STRIPE VARS (Payment service)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID_ONE_CREDIT=
STRIPE_PRICE_ID_THREE_CREDITS=
STRIPE_PRICE_ID_FIVE_CREDITS=
NEXT_PUBLIC_STRIPE_IS_ENABLED=true

# set to true to enable Stripe payments
# DEPLOYMENT (Leave them empty if you're not deploying)
DEPLOYMENT_PROVIDER= # vercel, replit or any of your choice
VERCEL_URL=
REPLIT_URL=`}
          </code>
        </pre>
        <div className="flex justify-center mt-10 mb-10">
          <img
            src={img2.src}
            alt="installing dependencies via terminal"
            height={850}
            width={850}
          />
        </div>

        {/* Create an Astria account */}
        <h3 className="text-lg font-semibold mb-2">
          3. Create an{" "}
          <a
            href="https://www.astria.ai/users/sign_in"
            className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
          >
            Astria
          </a>{" "}
          account
        </h3>
        <p className="mb-6">
          In your
          <code className="bg-slate-300 p-2 m-2 rounded-sm">.env</code>
          file:
        </p>
        <ul style={{ listStyleType: "disc" }} className="ml-8">
          <li>
            Fill in{" "}
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              your_api_key
            </code>{" "}
            with your{" "}
            <a
              href="https://www.astria.ai/users/edit#api"
              className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
            >
              {" "}
              Astria API key
            </a>
          </li>
          <li className="mt-6">
            Fill in{" "}
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              your-webhook-secret{" "}
            </code>{" "}
            with any arbitrary URL friendly string eg.
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              shadf892yr398hq23h{" "}
            </code>
          </li>
        </ul>

        {/* Create an Astria account */}
        <h3 className="text-lg font-semibold mb-2 mt-10">
          4. Create a{" "}
          <a
            href="https://resend.com/"
            className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
          >
            Resend
          </a>{" "}
          account
        </h3>
        <ul style={{ listStyleType: "disc" }} className="ml-8 mt-4">
          <li>
            Fill in{" "}
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              your-resend-api-key
            </code>{" "}
            with your Resend API Key if you wish to use Resend to email users
            when their model has finished training.
          </li>
        </ul>

        {/* Configure Stripe to bill users on a credit basis */}
        <h3 className="text-lg font-semibold mb-2 mt-10">
          5. Configure{" "}
          <a
            href="https://stripe.com/"
            className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
          >
            Stripe
          </a>{" "}
          to bill users on a credit basis
        </h3>
        <p className="mb-2">
          The current setup is for a credit based system. 1 credit = 1 model
          train.
        </p>
        <p>
          To enable Stripe billing, you will need to fill out the following
          fields in your{" "}
          <code className="bg-slate-300 p-2 m-2 rounded-sm">.env</code> file:
        </p>
        <ul style={{ listStyleType: "disc" }} className="ml-8 mt-4">
          <li>
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              STRIPE_SECRET_KEY=your-stripe-secret-key
            </code>
          </li>
          <li className="mt-6">
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
            </code>
          </li>
          <li className="mt-6">
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              STRIPE_PRICE_ID_ONE_CREDIT=your-stripe-price-id-one-credit
            </code>
          </li>
          <li className="mt-6">
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              STRIPE_PRICE_ID_THREE_CREDITS=your-stripe-price-id-three-credit
            </code>
          </li>
          <li className="mt-6">
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              STRIPE_PRICE_ID_FIVE_CREDITS=your-stripe-price-id-five-credit
            </code>
          </li>
          <li className="mt-6">
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              your_api_keNEXT_PUBLIC_STRIPE_IS_ENABLED=false # set to true to
              enable Stripe payments
            </code>
          </li>
        </ul>
        <p className="mt-6">
          You need to do multiple things to get Stripe working:{" "}
        </p>
        <ul style={{ listStyleType: "disc" }} className="ml-8 mt-4">
          <li>
            Get your Stripe API secret key from the{" "}
            <a
              href="https://dashboard.stripe.com/test/apikeys"
              className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
            >
              Stripe Dashboard
            </a>
          </li>
          <li className="mt-6">
            Create a{" "}
            <a
              href="https://dashboard.stripe.com/test/webhooks"
              className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
            >
              Stripe Webhook
            </a>{" "}
            that will point to your hosted URL. The webhook should be listening
            for the
            <code className="bg-slate-300 p-2 m-2 rounded-sm">
              checkout.session.completed
            </code>
            . The webhook should point to
            your-hosted-url/stripe/subscription-webhook.
          </li>
          <li className="mt-6">
            Create a{" "}
            <a
              href="https://dashboard.stripe.com/test/products"
              className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
            >
              Stripe Price
            </a>{" "}
            for each credit package you want to offer.
          </li>
          <li className="mt-6">
            Create a{" "}
            <a
              href="https://dashboard.stripe.com/test/pricing-tables"
              className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
            >
              Stripe Pricing
            </a>{" "}
            Table and replace the script @/components/stripe/StripeTable.tsx
            with your own values. It should look like this:
          </li>
        </ul>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`<stripe-pricing-table
  pricing-table-id="your-stripe-pricing-table-id"
  publishable-key="your-stripe-publishable-key"
  client-reference-id={user.id}
  customer-email={user.email}
  ></stripe-pricing-table>`}
        </pre>
        <p className="mt-6">
          Here are the products you need to create to get Stripe working with
          our example:
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <img
            src={img3.src}
            alt="installing dependencies via terminal"
            height={850}
            width={850}
          />
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <img
            src={img4.src}
            alt="installing dependencies via terminal"
            height={850}
            width={850}
          />
        </div>
        <div className="flex justify-center mt-10 mb-10">
          <img
            src={img5.src}
            alt="installing dependencies via terminal"
            height={850}
            width={850}
          />
        </div>
        <p>
          To create them go on the Stripe dashboard, search for Product Catalog
          and then click on the add product button on the top right of the
          screen. You will need to create 3 products, one for each credit
          package as shown in the images before. We set them to One time
          payments, but you can change that if you want to and you can set the
          price too. After creating the products make sure to update the
          variables in the .env [your-stripe-price-id-one-credit,
          your-stripe-price-id-three-credit, your-stripe-price-id-five-credit]
          with their respective price ids, each price id is found in the product
          page at the bottom.
        </p>

        {/* Download Docker */}
        <h3 className="text-lg font-semibold mb-2 mt-6">
          6. Download{" "}
          <a
            href="https://www.docker.com/products/docker-desktop/"
            className="text-lg font-semibold italic hover:underline  text-blue-500 cursor-pointer"
          >
            Docker
          </a>
        </h3>
        <p className="mb-6">
          Once you have downloaded and installed docker in your system, open it
          and execute the following in your project codebase to run your db
          server locally:
        </p>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`npx install supabase
npx supabase start`}
        </pre>
        <p className="mt-6 mb-6">
          This will start a virtual container in your docker application and
          provide you with the following variables:
        </p>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_ANON_KEY=your-supabase-anon-key (again)
SUPABASE_URL=our-supabase-url (again)`}
        </pre>

        {/* Start the development server */}
        <h3 className="text-lg font-semibold mb-2 mt-6">
          7. Start the development server:
        </h3>
        <p className="mb-4">
          Now you need to run the development server at the same time, do not
          close the last server and run your dev server using the following:
        </p>
        <p className="mb-6">For npm:</p>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`npm run dev`}
        </pre>
        <p className="mb-6 mt-4">For yarn:</p>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`yarn dev`}
        </pre>

        {/* Running app */}
        <h3 className="text-lg font-semibold mb-2 mt-8">
          8. Visit{" "}
          <code className=" bg-slate-300 p-2 rounded-sm">
            http://localhost:3000
          </code>{" "}
          in your browser to see the running app.
        </h3>

        {/* Authentication */}
        <h3 className="text-lg font-semibold mb-2 mt-8">9. Authentication</h3>
        <p>
          Once your app is running, you can sign in using your email address.
          This is a local environment for now, so you need to visit your docker
          container terminal, the place where its server is running and get the
          Inbucket URL. Go to that URL after you have signed in using your email
          address. You will recieve a link on Inbucket verifying your email
          address. Go to the monitor tab, click on the email you recieved using
          Supabase magic link and click on login. Now you will be redirected to
          your logged in page.
        </p>

        {/* Stopping the running container */}
        <h3 className="text-lg font-semibold mb-2 mt-8">
          10. Stopping running container
        </h3>
        <p>
          If you want to stop the running container, you can use the following:
        </p>
        <pre className="mb-2 mt-4 bg-slate-300 p-4 rounded-sm w-3/4">
          {`npx supabase stop framecast-ai`}
        </pre>
      </main>
    </div>
  );
}

export default Documentation;
