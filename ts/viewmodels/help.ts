export class Help {
    public twoLetterWords: string[];
    public qWithoutU: string[];
    public letterValues: Array<[string, number]>;

    public constructor(
        freebies: {
            twoLetterWords: string[];
            qWithoutU: string[];
        },
        letterValueMap: Record<string, number>
    ) {
        this.twoLetterWords = freebies.twoLetterWords;
        this.qWithoutU = freebies.qWithoutU;
        // Get rid of 'unset' entry.
        this.letterValues = Object.entries(letterValueMap).slice(1);
    }
}
