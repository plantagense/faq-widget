import { NodeProps } from "@crystallize/react-content-transformer";

export type ImageContent = {
    firstImage: {
        url: string;
        altText: string | null;
    };
};

export type Icon = {
    content: ImageContent;
};

export type TextContent = {
    text: string;
};

export type Paragraph = {
    kind: "block";
    type: "paragraph";
    textContent: string;
};

export type Description = {
    content: {
        json: Paragraph[];
    };
};

export type ContactItem = {
    icon: Icon;
    title: {
        content: TextContent;
    };
    description: Description;
    email: {
        content: TextContent;
    };
};

export type Contacts = {
    content: {
        items: ContactItem[];
    };
};

export type ContactUs = {
    name: string;
    contacts: Contacts;
};

export type FirstImage = {
    url: string;
};

export type IconContent = {
    firstImage: FirstImage;
};

export type FAQQuestion = {
    id: "question";
    content: {
        text: string;
    };
};

export type FAQAnswer = {
    id: "anwser";
    content: {
        json: NodeProps;
    };
};

export type FAQInlineText = {
    kind: "inline";
    textContent: string;
};

export type FAQLink = {
    kind: "inline";
    type: "link";
    metadata: {
        href: string;
    };
    textContent: string;
};

export type FAQChunk = [FAQQuestion, FAQAnswer];

export type FAQsContent = {
    chunks: FAQChunk[];
};

export type FAQs = {
    content: FAQsContent;
};

export type FAQDocument = {
    type: "document";
    faqs: FAQs;
};

export type FolderItem = {
    id: string;
    name: string;
    type: "folder";
    icon: Icon;
    children: (FolderItem | FAQDocument)[];
};

export type FAQRoot = {
    name: string;
    children: FolderItem[];
};
