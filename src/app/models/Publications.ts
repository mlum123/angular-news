export class Publications {
    status: string;
    sources: Source[];
}

export class Source {
    id: string;
    name: string;
    description: string;
    url;
    category: string;
    language: string;
    country: string;
}