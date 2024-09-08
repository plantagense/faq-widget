import { useCrystallize } from "@crystallize/reactjs-hooks";
import { useEffect, useState } from "react";
import { FAQ } from "./graphql/faq";
import { CONTACTS } from "./graphql/contacts";
import FaqWidget from "./components/FaqWidget";

import type { ContactUs, FAQRoot } from "./types";

function App() {
    const { apiClient } = useCrystallize();
    const [faq, setFaq] = useState<FAQRoot>();
    const [contacts, setContacts] = useState<ContactUs>();
    useEffect(() => {
        (async () => {
            const caller = apiClient.catalogueApi;
            const query = FAQ;
            const response = await caller(query, {
                language: "en",
                path: "/apps/customer-service/frequently-asked-questions",
            });
            setFaq(response.catalogue);
        })();

        (async () => {
            const caller = apiClient.catalogueApi;
            const query = CONTACTS;
            const response = await caller(query, {
                language: "en",
                path: "/sites/plantagencom/contact-us",
            });
            setContacts(response.catalogue);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (faq && contacts)
        return (
            <>
                <FaqWidget contacts={contacts} faq={faq} />
            </>
        );
}

export default App;
