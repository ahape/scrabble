# scrabble

## Setup

You'll need to download the [Entity Framework Core tool](https://docs.microsoft.com/en-us/ef/core/cli/dotnet).

```
dotnet tool install --global dotnet-ef
```

This is for doing code-first DB configuration through EF.

NOTE: You can do the `yarn install` stuff and `yarn run <script name>`
with `npm install` and `npm run-script <name>`, but I suggest installing `yarn`
globally because it's better.

Once you clone the repo, run the following:

```
yarn install
```

then

```
yarn run build
```

That loads all the JS dependencies and whatnot.

Next, run:

```
dotnet ef database update
```

That should build the project, configure the local SQLite database, and load whatever migrations it needs to.

You're all set! Once you're ready to run the app locally, just run:

```
dotnet run
```

and follow the instructions on the command line.

## Rough Roadmap

https://coda.io/d/Scrabble-Requirements-MVP_dNFDDTqdu2q
