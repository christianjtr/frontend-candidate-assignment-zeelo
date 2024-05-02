import { useRef } from 'react';
import { Button } from '@components';
import { useFetchGenres } from '@hooks/useFetchGenres';
import Book from '@app/domain/Book';
import { StyledAddNewBookForm } from './AddNewBookForm.styled';

export interface AddNewBookFormProps {
  onSubmit: (data: Record<PropertyKey, FormDataEntryValue | FormDataEntryValue[]>, callback: () => void) => void;
  isEditMode?: boolean;
  initialValues?: Book;
}

export default function AddNewBookForm(props: AddNewBookFormProps) {
  const { onSubmit, isEditMode = false, initialValues = undefined } = props;

  const { genres, isLoading: isLoadingGenres } = useFetchGenres();

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = (): void => {
    if (formRef) formRef.current?.reset();
  };

  const validateForm = (dataToValidate: Record<PropertyKey, FormDataEntryValue | FormDataEntryValue[]>): boolean => {
    const { title, author, price, genres } = dataToValidate;

    const isValidTitle = typeof title === 'string' && title.length > 0;
    const isValidAuthor = typeof author === 'string' && author.length > 0;
    const isValidPrice = !!price;
    const isValidGenre = Array.isArray(genres) && genres.length >= 3;

    const validations = [isValidTitle, isValidAuthor, isValidPrice, isValidGenre];

    return validations.every((validation) => validation);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const dataToProcess: Record<PropertyKey, FormDataEntryValue | FormDataEntryValue[]> = {};
    const formData = new FormData(event.currentTarget);
    for (let inputData of formData.entries()) {
      const [key, value] = inputData;
      let valueToProcess: FormDataEntryValue | FormDataEntryValue[] = value;
      if (key === 'genres') {
        valueToProcess = formData.getAll('genres');
      }
      dataToProcess[key] = valueToProcess;
    }

    if (validateForm(dataToProcess)) {
      onSubmit(dataToProcess, resetForm);
    }
  };

  return (
    <StyledAddNewBookForm>
      <div className="form-header">
        <h3>Details</h3>
        <small>* Field is required.</small>
      </div>
      <form name="new-book-form" id="new-book-form" onSubmit={handleOnSubmit} ref={formRef}>
        <fieldset className="form-field">
          <label htmlFor="title">
            Title
            <span aria-hidden="true">*</span>
          </label>
          <input type="text" id="title" name="title" defaultValue={initialValues?.title} required autoComplete="off" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="author">
            Author
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={initialValues?.author}
            required
            autoComplete="off"
          />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="price">
            Price
            <span aria-hidden="true">*</span>
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="1"
            step="any"
            defaultValue={initialValues?.price}
            required
            autoComplete="off"
          />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="coverUrl">Cover image URL</label>
          <input type="url" id="coverUrl" name="coverUrl" defaultValue={initialValues?.coverUrl} autoComplete="off" />
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="genres">
            Genres
            <span aria-hidden="true">*</span>
          </label>
          <select id="genres" name="genres" disabled={isLoadingGenres} multiple required>
            {genres?.map(({ id, genre }) => (
              <option key={`${genre}_${id}`} selected={initialValues?.genres?.includes(genre)} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <span className="help-block help-block--info">Please, select at least three (3) genres.</span>
          <span className="help-block">
            Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.
          </span>
        </fieldset>
        <fieldset className="form-field">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" defaultValue={initialValues?.description} />
        </fieldset>
        <Button type="submit" id="btn-sumbit" name="btn-submit">
          {isEditMode ? 'Edit' : 'Add'}
        </Button>
      </form>
    </StyledAddNewBookForm>
  );
}
