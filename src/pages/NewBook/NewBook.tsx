import { useParams, useNavigate, Link } from 'react-router-dom';
import { Title, PageHeader, LoaderSpinner } from '@components';
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
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { book, isLoading: isLoadingBook, refetch } = useFetchBook(+bookId!);
  const { createBook, isLoading: isCreatingBook } = useCreateBook();
  const { editBook, isLoading: isEditingBook } = useEditBookById();

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

  if (isLoadingBook || isCreatingBook || isEditingBook) return <LoaderSpinner />;

  return (
    <StyledNewBook>
      <PageHeader>
        <div className="grouped-elements">
          <Link
            className="go-back"
            to={'..'}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </Link>
          <Title>{`${isEditMode ? 'Edit book' : 'Add new book'}`}</Title>
        </div>
      </PageHeader>
      <div className="form-container waves">
        <AddNewBookForm onSubmit={handleOnSubmit} isEditMode={isEditMode} initialValues={book!} />
      </div>
    </StyledNewBook>
  );
}
