export class TopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
}

export class Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url;
    urlToImage;
    publishedAt: string;
    content: string;
}

export class Source {
    id: string;
    name: string;
}