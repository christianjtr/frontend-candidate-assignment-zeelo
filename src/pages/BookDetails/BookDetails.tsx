import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useFetchBook } from '@hooks/useFetchBookById';

export default function BookDetails() {
  const { bookId } = useParams<string>();

  const { book, isLoading, hasError } = useFetchBook(+bookId!);

  if (isLoading) return null;

  return (
    <div>
      <pre>{JSON.stringify(book, null, 2)}</pre>
    </div>
  );
}
