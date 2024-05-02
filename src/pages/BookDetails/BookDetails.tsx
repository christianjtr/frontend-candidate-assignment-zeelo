import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button, PageHeader, Chip, Title } from '@components';
import { useFetchBook } from '@hooks/useFetchBookById';
import { useDeleteBookById } from '@hooks/useDeleteBookById';
import { formatAsCurrency } from '@utils/formatNumber';
import { StyledBookDetails } from './BookDetails.styled';

export default function BookDetails() {
  const navigate = useNavigate();
  const { bookId } = useParams<string>();
  const [isDeleteToastOpened, setIsDeleteToastOpened] = useState<boolean>(false);

  const { book, isLoading, hasError } = useFetchBook(+bookId!);
  const { deleteBook, isLoading: isDeletingBook, message, hasError: hasErrorAtDeletingBook } = useDeleteBookById();

  const handleOnClickEditButton = (): void => {
    navigate(`/books/edit/${book?.id}`);
  };

  const handleOnClickDeleteButton = (): void => {
    if (book) {
      toast('Are you sure you want to delete this book?', {
        duration: 10000,
        position: 'bottom-center',
        className: 'toaster toaster--standard',
        action: {
          label: 'Delete',
          onClick: () => deleteBook(book.id),
        },
        cancel: {
          label: 'Cancel',
          onClick: () => {
            toast.dismiss();
            setIsDeleteToastOpened(false);
          },
        },
        onAutoClose: () => setIsDeleteToastOpened(false),
        onDismiss: () => setIsDeleteToastOpened(false),
      });
      setIsDeleteToastOpened(true);
    }
  };

  const formattedPrice = formatAsCurrency(book?.price ?? 0);

  useEffect(() => {
    if (message) {
      toast(message, {
        className: `toaster ${hasErrorAtDeletingBook ? 'toaster--error' : 'toaster--success'}`,
      });
      navigate('/', { replace: true });
    }
  }, [message]);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  if (isLoading) return null;

  return (
    <StyledBookDetails>
      <PageHeader>
        <div className="grouped-elements">
          <Link className="go-back" to={'/'}>
            Home
          </Link>
          <Title>Book details</Title>
        </div>
        <div className="grouped-elements">
          <Button
            id="btn-edit"
            name="btn-edit"
            className="secondary"
            onClick={handleOnClickEditButton}
            aria-label="Edit book buton"
          >
            Edit
          </Button>
          <Button
            id="btn-delete"
            name="btn-delete"
            className="secondary"
            onClick={handleOnClickDeleteButton}
            aria-label="Delete book buton"
            disabled={isDeleteToastOpened}
          >
            Delete
          </Button>
        </div>
      </PageHeader>
      <div className="card">
        <div className="ribbon">{formattedPrice}</div>
        <figure className="card-image">
          <img src={book?.coverUrl} alt={book?.title} />
        </figure>
        <div className="card-body">
          <span className="card-pre-heading">{book?.author}</span>
          <h3 className="card-title">{book?.title}</h3>
          <p className="card-description">{book?.description}</p>
          <div className="card-chips-container">
            {book?.genres?.map((genre, index) => <Chip key={`genre_${genre}_${index}`}>{genre}</Chip>)}
          </div>
        </div>
      </div>
    </StyledBookDetails>
  );
}
