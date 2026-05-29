import React, { useEffect, useState } from 'react'
import styles from './CMS.module.css'
import axios from '../../api/axios.js'
import Modal from './modals/Modal.jsx'


const CMS = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [districts, setDistricts] = useState([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(()=>{
    const getLocations = async()=>{
      try {
        const res = await axios.get('/locations');
        setDistricts(res.data)
      } catch (error) {
        console.log('Error in fetching locations',error)
      }
    }
    getLocations();
  }
  ,[])

  useEffect(()=>{
    if(modal){
      document.body.classList.add('active-modal')
    }
    else{
      document.body.classList.remove('active-modal')
    }

    return () => {
      document.body.classList.remove('active-modal')
    }
  },[])

  const toggleAccordion = (index) =>{
    if(openIndex===index){
      setOpenIndex(null);
    }else{
      setOpenIndex(index)
    }
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const filterDistricts = districts.filter((district)=> (
    district.district.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <>
    {modal && <Modal toggleModal={toggleModal} />}
    <main>
      <h2 className={styles.page_header}>Locations</h2>
      <p className={styles.page_sub}>Manage districts and their mapped venues.</p>

      <div className={styles.page_top}>
        <div className={styles.search_bar}> 
          <svg className={styles.search_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" 
          placeholder='Search' 
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className={styles.search_input} />
        </div>
          <button className={styles.add_btn} onClick={toggleModal}>
          <svg className={styles.plus_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add District
          </button>
      </div>

      <div className={styles.table_wrap}>
          <table>
            <thead>
              <tr>
                <th style={{width:'32px'}}></th>
                <th>District</th>
                <th>Description</th>
                <th>Venues</th>
                <th></th>
              </tr>
            </thead>

      {
        filterDistricts.map((disctrict,idx)=>(
          <React.Fragment key={idx}>
            <tbody>
              <tr>
                <td><button  onClick={()=> toggleAccordion(idx)} className={`${styles.btn_ghost} ${styles.btn_sm} ${openIndex===idx && styles.rotate}`}><svg className={styles.btn_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg></button></td>
                <td className={styles.td_name}>{disctrict.district}</td>
                <td className={styles.td_description}>{disctrict.description}</td>
                <td className={styles.venue}><span className={`${styles.badge} ${styles.badge_rust}`}>{disctrict.venues.length}</span></td>
                <td className={styles.td_buttons}>
                  <button className={`${styles.btn_ghost} ${styles.btn_sm}`}>Edit</button>
                  <button className={`${styles.btn_danger} ${styles.btn_sm}`}>Delete</button>
                </td>
              </tr>
              <tr className={`${styles.venues_row} ${openIndex===idx && styles.active}`}>
                  <td colSpan={5}> 
                    <div className={styles.venue_label}>Venues in {disctrict.district}</div>
                    <div className={styles.venue_pills} >
                    {
                      disctrict.venues.map((venue,idx)=>(
                        
                          <div className={styles.venue_pill} key={idx}>
                            <span className={styles.venue_dot}></span>
                            <span>{venue.name}</span>
                            <span>{venue.lat},{venue.lng}</span>
                          </div>
                      ))
                    }
                    </div>
                  </td>
              </tr>
            
            </tbody>
          </React.Fragment>
        ))
      }
          </table>
          </div>

    </main>
    </>
  )
}

export default CMS





