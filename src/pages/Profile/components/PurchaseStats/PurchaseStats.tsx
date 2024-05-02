import { useRef, useEffect, useCallback } from 'react';
import Plotly, { Data } from 'plotly.js-dist';
import { formatAsCurrency } from '@utils/formatNumber';
import Book from '@app/domain/Book';
import type { Genre } from '@app-types/Genre';
import { StyledPurchaseStats } from './PurchaseStats.styled';

export interface PurchaseStatsProps {
  purchasedBooks: Book[];
}

export default function Stats(props: PurchaseStatsProps) {
  const { purchasedBooks } = props;
  const chartWrapperRef = useRef<HTMLDivElement | null>(null);

  const bookGenres = purchasedBooks
    .map((purchasedBook) => purchasedBook.genres as unknown as Genre[])
    .flat()
    .map(({ genre }) => genre);

  const occurrences = bookGenres.reduce(
    (acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    },
    {} as Record<PropertyKey, number>,
  );

  const totalInvestedInBooks = purchasedBooks.reduce((a, b) => a + b.price, 0);

  const totalInvestedInBooksByGenre = bookGenres.map((genre) => {
    return {
      genre,
      total: purchasedBooks
        .filter(
          (purchasedBook) => (purchasedBook.genres as unknown as Genre[])?.map((item) => item.genre)?.includes(genre),
        )
        .reduce((a, b) => a + b.price, 0),
    };
  });

  const uniqueInvestmentByGenre = Array.from(new Set(totalInvestedInBooksByGenre.map((i) => JSON.stringify(i)))).map(
    (i) => JSON.parse(i),
  );

  const renderChart = useCallback(() => {
    const data = [
      {
        type: 'funnel',
        y: Object.keys(occurrences),
        x: Object.values(occurrences),
      },
    ];

    const layout = { margin: { l: 110, r: 110, t: 20, b: 10 } };

    Plotly.newPlot('myDiv', data as Data[], layout, {
      displayModeBar: false,
      staticPlot: true,
      scrollZoom: false,
      responsive: true,
    });
  }, [occurrences]);

  useEffect(() => {
    renderChart();
  }, [chartWrapperRef, bookGenres]);

  return (
    <StyledPurchaseStats>
      <div className="stats-card-container">
        <div>
          <small>Books purchased</small>
          <span>{purchasedBooks.length}</span>
        </div>
        <div>
          <small>Total Invested</small>
          <span>{formatAsCurrency(totalInvestedInBooks)}</span>
        </div>
      </div>
      <h5>Favorite genres</h5>
      <div id="myDiv" ref={chartWrapperRef}></div>
      <h5>Investments by book's genre*</h5>
      <div className="table-container">
        <div className="table-body">
          {uniqueInvestmentByGenre.map(({ genre, total }) => (
            <div className="table-row" key={genre}>
              <div className="genre-cell">{genre}</div>
              <div className="total-cell aling--right">{formatAsCurrency(total)}</div>
            </div>
          ))}
        </div>
      </div>
      <small>*Consider books may belong to multiple genres.</small>
    </StyledPurchaseStats>
  );
}
