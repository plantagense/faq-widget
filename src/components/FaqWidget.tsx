import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "./ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { ContentTransformer, NodeProps } from "@crystallize/react-content-transformer";

import { ReactNode, useState } from "react";
import type { ContactItem, ContactUs, FAQRoot, FolderItem } from "../types";

type FaqWidgetProps = {
    faq: FAQRoot;
    contacts: ContactUs;
};
export default function FaqWidget({ faq, contacts }: FaqWidgetProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed -right-2 bottom-2 z-50 flex flex-col items-end gap-4 rounded-ss-lg p-6 ">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetDescription className="sr-only">customer support</SheetDescription>
                <SheetTrigger className="animate-fade-in shadow" asChild>
                    <button className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-secondary-eucalyptus transition-all duration-300 hover:w-36">
                        <img
                            src="/question-circle.svg"
                            alt="Question mark"
                            width={30}
                            height={30}
                            className="w-6 transition-all duration-300 group-hover:w-12 group-hover:translate-y-20"
                        />
                        <span className="absolute left-1/2 top-0 w-32 -translate-x-1/2 translate-y-3.5 transform text-sm text-white opacity-0 transition-all duration-300 group-hover:w-40 group-hover:opacity-100">
                            Tarvitsetko apua?
                        </span>
                    </button>
                </SheetTrigger>
                <SheetContent className="flex flex-col overflow-y-scroll rounded-md py-10">
                    <SheetTitle className="relative text-left">{faq.name}</SheetTitle>
                    <Accordion type="single" collapsible>
                        {faq.children.map((category) => {
                            const subcategories = category.children.filter((child) => child?.type === "folder");
                            return (
                                <CategorySection
                                    key={category.id}
                                    category={category}
                                    className={
                                        "rounded-t-md border-b-2 border-secondary-sand p-2 py-3 text-left data-[state=open]:bg-secondary-sand/20"
                                    }>
                                    <Accordion type="single" collapsible>
                                        {subcategories.length > 0 &&
                                            subcategories.map((subcategory) => (
                                                <CategorySection
                                                    key={subcategory.id}
                                                    category={subcategory}
                                                    className={
                                                        "ml-2 lg:ml-4 rounded-t-md border-b-2 border-secondary-sand p-2 py-3 text-left data-[state=open]:bg-secondary-sand/20"
                                                    }
                                                />
                                            ))}
                                    </Accordion>
                                </CategorySection>
                            );
                        })}
                    </Accordion>
                    <div className="flex flex-col gap-5">
                        {contacts && (
                            <div className="flex flex-col gap-2">
                                {contacts.contacts.content.items.map((contact, index) => (
                                    <KontaktOssSection contact={contact} key={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}

type CategorySectionProps = {
    category: FolderItem;
    children?: ReactNode;
    className?: string;
};
function CategorySection({ category, children, className }: CategorySectionProps) {
    const imageURL = category.icon?.content?.firstImage?.url;
    const faqData = category.children?.find((child) => child?.type === "document");
    return (
        <AccordionItem value={category.id} className={"overflow-hidden rounded"}>
            <AccordionTrigger className={className}>
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-eucalyptus p-2">
                        <img className="object-contain" src={imageURL} width={20} height={20} alt="test" />
                    </div>
                    <span className="">{category.name}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2">
                {faqData && (
                    <Accordion type="single" collapsible className="flex flex-col gap-2">
                        {faqData?.faqs?.content?.chunks.map((faq, index) => {
                            if (!faq[0]?.content?.text || !faq[1]?.content?.json) return;
                            return (
                                <FrequentQuestionsSection
                                    question={faq[0].content.text}
                                    answer={faq[1]?.content?.json}
                                    value={`${category}-faq-${index}`}
                                    key={`${category}-faq-${index}`}
                                />
                            );
                        })}
                    </Accordion>
                )}
                {children}
            </AccordionContent>
        </AccordionItem>
    );
}

function KontaktOssSection({ contact }: { contact: ContactItem }) {
    const title = contact.title?.content.text;
    const description = contact.description.content.json;
    const icon = contact.icon.content.firstImage;
    const email = contact.email.content.text;

    return (
        <div className="mb-2 border-b pb-2">
            <div className="mb-2 flex items-center gap-2">
                <img alt={icon.altText || "icon"} src={icon.url} height={40} width={40} />
                <h4>{title}</h4>
            </div>
            <div className="text-sm [&>*]:mb-2">
                <ContentTransformer json={description} />
            </div>
            <a href={`mailto:${email}`} className="text-sm text-secondary-terracotta hover:underline">
                {email}
            </a>
        </div>
    );
}

function FrequentQuestionsSection({ question, answer, value }: { question: string; answer: NodeProps; value: string }) {
    return (
        <AccordionItem
            value={value}
            className="richTextLink mb-1 mt-2 rounded-md border-[1px] border-accent px-4 shadow">
            {<AccordionTrigger className="text-left">{question}</AccordionTrigger>}
            <AccordionContent className="flex flex-col gap-2 border-t border-primary-soil/20 py-4">
                {<ContentTransformer json={answer} />}
            </AccordionContent>
        </AccordionItem>
    );
}
