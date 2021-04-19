export class MovieModel {

    constructor(
        public id: string,
        public title: string,
        public genre: string,
        public description: string,
        public imageURL: string,
        public rating: number
    ) {}
}