import { useEffect } from 'react';
import { toast } from 'sonner';
import { Title, PageHeader } from '@components';
import { AddNewBookForm } from './components/AddNewBookForm';
import { useCreateBook } from '@hooks/useCreateBook';
import Book from '@app/domain/Book';
import { StyledNewBook } from './NewBook.styled';

export default function NewBook() {
  const { createBook, isLoading, message, hasError } = useCreateBook();

  const handleOnSubmit = (
    data: Record<PropertyKey, FormDataEntryValue | FormDataEntryValue[]>,
    callback: () => void,
  ): void => {
    createBook(data as unknown as Omit<Book, 'id'>);
    callback();
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        className: `toaster ${hasError ? 'toaster--error' : 'toaster--success'}`,
      });
    }
  }, [message]);

  // if (isLoading) return null;

  return (
    <StyledNewBook>
      <PageHeader>
        <Title>Add new book</Title>
      </PageHeader>
      <div className="form-container">
        <AddNewBookForm onSubmit={handleOnSubmit} />
      </div>
    </StyledNewBook>
  );
}
