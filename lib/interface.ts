export interface MenuItemType {
    id: string;
    title: string;
    url: string;
    extention: {
        urlIcon: string;
        titleIcon: string;
    }[]
}

export interface PostingTable {
    id: string;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
}

export interface InfoJob {
    id: string;
    urlLogo: string;
    title: string;
    titleCompany: string[];
    nameCompany: string;
    salary: string;
    location: string[];
    locationDetail: string[];
    exp: string;
    interest: string[];
    working_time: string;
    request: string[];
}