import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Books, BookDetails, NewBook, NotFound } from '@pages';

export const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/books">
        <Route index element={<Books />} />
        <Route path=":bookId" element={<BookDetails />} />
        <Route path="/books/add" element={<NewBook />} />
      </Route>
      <Route path="/" element={<Navigate to="/books" replace />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
