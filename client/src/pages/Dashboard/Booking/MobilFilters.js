import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import Filters from './Filters'

export default function MobilFilters() {
  return (
    <div className='d-flex justify-content-end mt-3'>

        <Dropdown>
      <Dropdown.Toggle className='menu-container'>

        <FontAwesomeIcon icon={faBars} />
     
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Filters />
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
