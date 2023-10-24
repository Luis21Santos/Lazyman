const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>status:</p>
          <select
            value={filter}
            onChange={(event) => {
              setFilter(event.target.value);
            }}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button
            onClick={() => {
              setSort("ASC");
            }}
          >
            ASC
          </button>
          <button
            onClick={() => {
              setSort("DESC");
            }}
          >
            DESC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
