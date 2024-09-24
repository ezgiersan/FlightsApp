import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getAction } from '../../redux/action/getAction';
import MyFlights from './MyFlights'
import Top from './Top'

export default function Index() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAction("my-flights"))
  }, [dispatch])
  

  return (
    <div className=''>
      <Top />
      <MyFlights />
    </div>
  )
}
