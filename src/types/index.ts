export interface Product {
    _id: string;
    title: string;
    images: {
        thumbnails: string[];
        mainImage: string;
    };
    price: {
        originalPrice: number;
        discountedPrice?: number;
        discountedRatio?: string;
    };
    ratings: {
        value: number;
        noOfReviews: number;
    };
    category: string;
    description: {
        shortDescription: string;
        longDescription: string[];
    };
    flashSale: boolean;
}

export interface ProductId {
    params: {
        productId: string;
    };
}

export interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

export interface QueryParams {
    [key: string]: string | string[] | undefined
}

export interface CategoryStats {
    count: number;
    name: string;
}