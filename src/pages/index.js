import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useEffect } from "react";

export default function HomepageFeatures() {
    const url = useBaseUrl("/introduction/what-is-exabits");
    useEffect(() => {
        window.location.pathname = url;
        return "";
    }, []);

    return <></>;
}
