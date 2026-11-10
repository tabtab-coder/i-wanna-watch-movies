import {useState} from "react";
import {useDropzone} from "react-dropzone";
import Papa from "papaparse";
import {useShowtimes} from '../context/ShowtimesContext'


export const ImportPage = () => {
  const [rows, setRows] = useState([]);
  const [parseErrors, setParseErrors] = useState([]);

  const { showtimes, loading, error } = useShowtimes();
  const showtimeFilms = [...new Map(showtimes.map(s => [s.film.id, s.film.title])).values()]
  console.log(showtimeFilms)


  const importedFilmNames = rows.map(e => e.Name)
  const availableWatchlist = importedFilmNames.filter(f => showtimeFilms.includes(f))
  console.log(availableWatchlist)

  const onDrop = (accepted) => {
    const file = accepted[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: ({data, errors}) => {
        console.log(data)
        console.log(data.map(e => e.Name))
        setRows(data);
        setParseErrors(errors);
      },
      error: (err) => setParseErrors([{message: err.message}]),
    });
  };

  const {acceptedFiles, getRootProps, getInputProps, isDragGlobal, isDragActive, isDragAccept, isDragReject, open} = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    noKeyboard: true,
    useFsAccessApi: true,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".csv"],
    },
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">

      {isDragGlobal && !isDragActive && <div className="overlay">Drop files anywhere on this page...</div>}

      <div {...getRootProps({className: "dropzone"})}>
        <input {...getInputProps()} />
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
        {isDragGlobal && !isDragActive && <p>🌐 Drag detected on page!</p>}
        {isDragAccept && <p>✅ Drop to upload these files</p>}
        {isDragReject && <p>❌ Some files will be rejected</p>}
        <p>Drag 'n' drop or click to select your Letterboxd watchlist export here!</p>
      </div>

      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        {rows.length > 0 && <p>Parsed {rows.length} rows</p>}

        
        {availableWatchlist.length > 0 && 
        <>
          <>Currently available from your watchlist: </>
          <p>{JSON.stringify(availableWatchlist, null, 2)}</p>
        </>
        }

        {parseErrors.map((e, i) => (
          <p key={i}>⚠️ {e.row !== undefined ? `Row ${e.row + 1}: ` : ""}{e.message}</p>
        ))}
        
        {rows.length > 0 && 
        <>
          <>Your watchlist:</>
          <pre>{JSON.stringify(rows.map(r => r.Name), null, 2)}</pre>
        </>
        }
      </aside>
    </section>
  );
}