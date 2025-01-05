# Next.js Google Shopping 🛍

Welcome to the **Next.js Google Shopping** repository! This project aims to integrate **Next.js** with Google Shopping functionality, offering a foundation for building modern and performant e-commerce experiences.

![alt text](preview.png "Title")

![alt text](preview2.png "Title")


## ✨ Overview

- **Next.js-based**: Enjoy the benefits of server-side rendering and automatic static optimization.  
- **Google Shopping Integration**: Designed to help you list products and manage data feeds for Google Shopping.  
- **Modular & Extensible**: Easily add or remove components to fit your e-commerce requirements.

## 📂 Project Structure

```
nextjs-google-shopping/
├─ components/         # Reusable UI components
├─ pages/              # Next.js pages
├─ public/             # Public assets (images, icons)
├─ styles/             # Global or modular CSS
├─ utils/              # Helper functions, API calls, etc.
├─ supabase/           # Contains DB schema and migration info
├─ package.json
└─ ...
```

## 🏁 Getting Started

1. **Clone the Repo**
   ```
   git clone https://github.com/alexgenovese/nextjs-google-shopping.git
   cd nextjs-google-shopping
   ```

2. **Install Dependencies**
   ```
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```
   npm run dev
   # or
   yarn dev
   ```
   Access the site at [http://localhost:3000](http://localhost:3000).

4. **Build for Production**
   ```
   npm run build
   npm run start
   ```

## ⚙️ Main Features

- **Google Shopping Data Feeds**: Set up and manage product listing data for Google Merchant Center.  
- **SEO-Friendly**: Next.js optimizes your pages for search engines.  
- **Responsive Layout**: Works seamlessly on desktops, tablets, and mobile devices.  
- **Scalable Architecture**: Easily add pages, APIs, or third-party integrations as your store grows.

## 🗄️ Database Migration on Supabase

This project uses **Supabase** as the database layer. In the `supabase` folder of this repository, you’ll find a file describing the necessary table schema.

Below is a step-by-step guide to set up and migrate your database on Supabase:

1. **Create a Supabase Project**  
   - Sign in or create an account at [Supabase](https://app.supabase.com/).  
   - Complete the setup to create a new project.  

2. **Install the Supabase CLI (optional but recommended)**  
   - [CLI Installation Guide](https://supabase.com/docs/guides/cli#installing-the-cli).  
   - Example (macOS/Homebrew):
     ```
     brew install supabase/tap/supabase
     ```

3. **Configure Your Environment Variables**  
   - Obtain your `SUPABASE_URL` and `SUPABASE_ANON_KEY` from the [Supabase Project Settings](https://app.supabase.com/).  
   - Create a `.env.local` file in the root of your project (if not already present) and add:
     ```
     SUPABASE_URL=<YOUR_SUPABASE_PROJECT_URL>
     SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
     ```
   - These variables allow your Next.js app to communicate with your Supabase database.

4. **Review the Supabase Schema File**  
   - Navigate to the `supabase` folder in this repo.  
   - Inside, you should find a **schema file** or SQL file describing the table structure needed. For example:
     ```
     CREATE TABLE IF NOT EXISTS products (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       title TEXT NOT NULL,
       description TEXT,
       price NUMERIC(10, 2),
       created_at TIMESTAMP DEFAULT now()
     );
     ```
   - This is the table necessary for the project to properly function.

5. **Apply the Migration**  
   - Option 1 (Supabase Dashboard):  
     - Go to your project’s SQL Editor on the [Supabase web interface](https://app.supabase.com/).  
     - Copy and paste the content of the **schema file** into a new query and run it.  

   - Option 2 (Supabase CLI):  
     - Login via CLI (if you haven’t already):
       ```
       supabase login
       ```  
     - Navigate to your project folder and run the migration directly, for example:
       ```
       supabase db push
       ```  
       This command will push your local database changes to your Supabase project.  
     - Alternatively, you can use:
       ```
       supabase migration new "initial-schema"
       ```  
       and place your SQL file (or contents) into the newly created migration folder, then run:
       ```
       supabase db push
       ```

6. **Confirm the Table is Created**  
   - In the Supabase Dashboard, navigate to the **Table Editor** and confirm you see the new `products` (or similarly named) table.

Once the table is created, your Next.js Google Shopping application can interact with the database seamlessly.

## 🎨 Customization

- **Update Content**: Swap out product details, texts, and images to match your branding.  
- **Change Styling**: Edit or add global and modular CSS in the `styles/` directory.  
- **Extend Functionality**: Add new APIs or external integrations in the `utils/` folder or within the Next.js API routes (`pages/api/`).

## 🌐 Deployment

You can deploy this Next.js app on:
- **Vercel** (official Next.js hosting)  
- **Netlify**  
- **Your Custom Node.js Hosting**  

After building, just upload the `.next` folder or follow your hosting provider's instructions.

## 🤝 Contributing

1. **Fork** the repo  
2. Create a new **branch** (e.g., `feature/my-improvement`)  
3. **Commit** your changes  
4. Open a **Pull Request**  

We welcome any contributions—bug fixes, optimizations, or new features!

## ⚖️ License

This project is licensed under the **MIT License**, so feel free to use, modify, and distribute it for personal or commercial purposes.
[Link to this repo](https://github.com/alexgenovese/nextjs-google-shopping)