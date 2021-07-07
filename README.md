# scrabble

## 1. Prereqs

You'll need to download the [Entity Framework Core tool](https://docs.microsoft.com/en-us/ef/core/cli/dotnet).

```
dotnet tool install --global dotnet-ef
```

This is for doing code-first DB configuration through EF.

## 2. Setup

Once you clone the repo, run the following (with your package manager of choice):

`yarn`
```sh
yarn install
```
_or_ `npm`
```sh
npm install
```

next do:

`yarn`
```sh
yarn run build
```
_or_ `npm`
```sh
npm run-script build
```

That loads all the JS dependencies and whatnot.

## 3. Configuration

Next, run:

```
dotnet ef database update
```

That should build the project, configure the local SQLite database, and load whatever migrations it needs to.

## 4. Running

You're all set! Once you're ready to run the app locally, just run:

```
dotnet run
```

and follow the instructions on the command line.

## Rough Roadmap

https://coda.io/d/Scrabble-Requirements-MVP_dNFDDTqdu2q
