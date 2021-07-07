yarn run build
dotnet clean
rm -rf ../scrabble-azure
mkdir ../scrabble-azure
cp -rf * ../scrabble-azure/
cd ../scrabble-azure
rm package.json
rm tsconfig.json
rm yarn*
rm build.sh
rm -rf node_modules/
rm -rf ts/
rm -rf scripts/
