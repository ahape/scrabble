# scrabble

## 1. Prereqs

- Node ([download](https://nodejs.org/en/download/))
- dotnet ([download](https://dotnet.microsoft.com/download))
- Entity Framework Core tool ([info](https://docs.microsoft.com/en-us/ef/core/cli/dotnet))

For the EF tool, once you have `dotnet` installed, just run this command:
```
dotnet tool install --global dotnet-ef
```

That's for doing code-first DB configuration through EF.

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
dotnet ef database update --context SqliteApplicationDbContext
```

That should build the project, configure the local SQLite database, and load whatever migrations it needs to.

## 4. Running

You're all set! Once you're ready to run the app locally, just run:

```
dotnet run
```

and follow the instructions on the command line.

## Database Migrations

When you change one of the database models, you will need to also produce migration files for each provider.  

### SQLite

```
dotnet ef migrations add <useful migration name> -c SqliteApplicationDbContext -- --DbProvider Sqlite
```

### SQL Server

```
dotnet ef migrations add <useful migration name> -c SqlServerApplicationDbContext -- --DbProvider SqlServer
```

## Using SSO locally

For Google authentication, you need to add the Client ID and Secrets to the local secrets store.  To obtain these, you can create your autorization credentials by following the guide [here](https://developers.google.com/identity/sign-in/web/sign-in).

To add these credentials to your local user store, run the following commands:

```
dotnet user-secrets set "Authentication:Google:ClientId" "<client-id>"
dotnet user-secrets set "Authentication:Google:ClientSecret" "<client-secret>"
```

### If you run into certificate issues, especially on Firefox

Check out [this article](https://docs.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-5.0&tabs=netcore-cli) on how to fix that.

## Rough Roadmap

https://coda.io/d/Scrabble-Requirements-MVP_dNFDDTqdu2q
