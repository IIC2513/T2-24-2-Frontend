'use client'

import { useState, useEffect } from "react";
import React from "react";

interface PageSelectorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({ currentPage, totalPages, onPageChange }) => {
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) {
            return;
        }
        setPage(page);
        onPageChange(page);
    }

    return (
        <div className="flex justify-center items-center gap-4">
            <button onClick={() => handlePageChange(1)}>&lt; &lt;</button>
            <button onClick={() => handlePageChange(page - 1)}>&lt;</button>
            <p>{page} of {totalPages}</p>
            <button onClick={() => handlePageChange(page + 1)}>&gt;</button>
            <button onClick={() => handlePageChange(totalPages)}>&gt; &gt;</button>
        </div>
    );
}

export default PageSelector;