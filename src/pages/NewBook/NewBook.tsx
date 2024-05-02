import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Title, PageHeader } from '@components';
import { AddNewBookForm } from './components/AddNewBookForm';
import { useCreateBook } from '@hooks/useCreateBook';
import { useEditBookById } from '@hooks/useEditBookById';
import { useFetchBook } from '@hooks/useFetchBookById';
import Book from '@app/domain/Book';
import { StyledNewBook } from './NewBook.styled';

export interface NewBookProps {
  isEditMode?: boolean;
}

export default function NewBook(props: NewBookProps) {
  const { isEditMode = false } = props;
  const { bookId } = useParams();

  const { book, isLoading: isLoadingBook, hasError: hasErrorFetchingBook, refetch } = useFetchBook(+bookId!);
  const { createBook, isLoading: isCreatingBook, hasError: hasErrorCreatingBook } = useCreateBook();
  const { editBook, isLoading: isEditingBook, hasError: hasErrorEditingBook } = useEditBookById();

  const handleOnSubmit = async (
    data: Record<PropertyKey, FormDataEntryValue | FormDataEntryValue[]>,
    callback: () => void,
  ): Promise<void> => {
    const payload = data as unknown as Omit<Book, 'id'>;
    if (isEditMode) {
      await editBook(+book?.id!, payload);
      refetch();
    } else {
      createBook(payload);
    }
    callback();
  };

  // if (isLoading) return null;

  return (
    <StyledNewBook>
      <PageHeader>
        <Title>{`${isEditMode ? 'Edit book' : 'Add new book'}`}</Title>
      </PageHeader>
      <div className="form-container">
        <AddNewBookForm onSubmit={handleOnSubmit} isEditMode={isEditMode} initialValues={book!} />
      </div>
    </StyledNewBook>
  );
}
