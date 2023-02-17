import { CiSearch } from 'react-icons/ci'

export const Filter = () => {
    return (
        <div className='filterArea'>
        <div className='filterItem'>
          <input className='input' type='text' placeholder='Street, City, State or Zip' />
          <span className='searchButton'><CiSearch /></span>
        </div>
        <div className='filterItem'>

          <select className='input-select input bg-white' name='all-status' id='all-status'>
            <option value='' selected disabled>All statuses</option>
            <option value=''>For Sale</option>
            <option value=''>For Rent</option>
            <option value=''>For Sale or Rent</option>
            <option value=''>Leased</option>
            <option value=''>New addition</option>
          </select>
        </div>
        <div className='filterItem'>
          <select className='input-select input bg-white' name='cities' id='cities'>
            <option value='' selected disabled>Cities</option>
            <option value=''>Cardiff</option>
            <option value=''>Carlsbad</option>
            <option value=''>Del Mar</option>
            <option value=''>La Jolla</option>
          </select>
        </div>

    

        <div className='filterItem'>
          <select className='input-select input bg-white' name='sort' id='sort'>
            <option value=''>Newest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>

        <div className='filterItem'>
          <button type="submit" className='input btn-primary'>Search</button>
        </div>

        <div className='filterItem'>
          <button type="submit" className='input btn-secondary'>MORE</button>
        </div>
      </div>
    )
}