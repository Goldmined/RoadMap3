const years = []  //1911-2016
for (let i = 2016; i>=1911; i--){
  years.push(i)
}
const FilterPanel = ({changeGenre, changeYear}) => {
  const genres = ["Biography","Comedy","Sci-Fi","Action","Thriller","Drama","Sport","Crime","Music","Fantasy","War","Short","Horror","Musical","Adventure","Documentary","News","Western","Animation","History","Family","Mystery","Romance"]
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select onChange={(event)=>{
                    changeGenre(event.target.value)
                  }} className="form-control" name="genre">
                    <option>Genre</option>
                    {genres.map((genre)=>{
                       return <option key={genre} value={genre}>{genre}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="input-view-flat input-group">
                  <select onChange={(event)=>{
                    changeYear(event.target.value)
                  }} className="form-control" name="year">
                    <option>year</option>
                    {years.map((year)=>{
                       return <option key={year} value={year}>{year}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select className="form-control" name="sortBy">
                    <option selected="true">sort by</option>
                    <option>name</option>
                    <option>release year</option>
                    <option>rating</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 my-md-auto d-flex">
          <span className="info-title d-md-none mr-3">Select view:</span>
          <ul className="ml-md-auto h5 list-inline">
            <li className="list-inline-item">
              <a
                className="content-link transparent-link"
                href="movies-blocks.html"
              >
                <i className="fas fa-th" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="content-link transparent-link active"
                href="movies-list.html"
              >
                <i className="fas fa-th-list" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
