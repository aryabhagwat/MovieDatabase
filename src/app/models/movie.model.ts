export class MovieModel {

    constructor(
        public title: string,
        public genre: string,
        public description: string,
        public imageURL: string,
        public rating: number
    ) {}
}