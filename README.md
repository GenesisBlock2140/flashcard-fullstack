# Description

Cette application permet a n'importe qui de se connecter  / inscrire en moins de 10 secondes en utilisant son compte Google ou Github afin de créer des Flashcards pour apprendre / réviser des sujets intelligemment.

Demo en ligne: 'soon'

## Stack

* Typescript
* React
* Next JS 13.2
* Prisma
* NextAuth
* Tailwind CSS
* MongoDB
* Zod

## Features Tech
* Next.js 13.2 with new ```/app``` dir
* New Loading and NotFound from Next.js
* **NextAuth.js** for Authentication
* Register / Login using **Google & Github**
* New **Server Components**
* Built using **Typescript**
* ORM with **Prisma**
* **Tailwind CSS** for style
* Database on MongoDB Atlas
* Validation with **Zod**


## Getting Started

### Prerequisites
* Node install
* npm or yarn
* MongoDB instance ( Mongodb Atlas free working )
### Installation
* **Clone** repository
```
git clone https://github.com/GenesisBlock2140/flashcard-fullstack
```
* **Install** dependencies using npm or yarn
```
npm i
```
* **Setup .env file** ( check .env.example )
```
NODE_ENV="develop"
DATABASE_URL=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```
* **Database setup** with prisma ( after linking MongoDB )
```
npx prisma db push
```
* **Start the app**
```
npm run dev
```