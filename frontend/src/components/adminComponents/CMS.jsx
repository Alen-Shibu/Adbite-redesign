import React, { useEffect, useState } from 'react'
import styles from './CMS.module.css'
import axios from '../../api/axios.js'
import CreateModal from './modals/CreateModel.jsx'
import DeleteModal from './modals/DeleteModal.jsx'
import EditModal from './modals/EditModal.jsx'
import LoadingScreen from '../LoadingScreen.jsx'


const CMS = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [districts, setDistricts] = useState([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [loading, setLoading] = useState(true)

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
  },[modal])

  const getLocations = async()=>{
    try {
    const res = await axios.get('/locations');
    setDistricts(res.data)
    } catch (error) {
      console.error('Failed to fetch:', error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getLocations();
  },[])

  const toggleAccordion = (index) =>{
    if(openIndex===index){
      setOpenIndex(null);
    }else{
      setOpenIndex(index)
    }
  }

  const closeModal = () => {
    setModal(null)
  }

  const toggleCreateModal = () => {
    setModal("create")
  }
  const toggleDeleteModal = (district) => {
    setSelectedDistrict(district)
    setModal("delete")
  }
  const toggleEditModal = (district) => {
    setSelectedDistrict(district);
    setModal("edit")
  }

  const filterDistricts = districts.filter((district)=> (
    district.district.toLowerCase().includes(search.toLowerCase())
  ))

  if(loading){
    return <LoadingScreen />
  }

  return (
    <>
    {modal==='create' && (<CreateModal toggleCreateModal={closeModal} refreshLocations={getLocations} />)}
    {modal==='delete' && (<DeleteModal toggleDeleteModal={closeModal} refreshLocations={getLocations}  id={selectedDistrict}/>)}
    {modal==='edit' && (<EditModal toggleEditModal={closeModal} refreshLocations={getLocations}  id={selectedDistrict}/>)}


    <div className={styles.admin_body}>
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
          <button className={styles.add_btn} onClick={toggleCreateModal}>
          <svg className={styles.plus_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add District
          </button>
      </div>

      {/* Desktop View */}
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
            <tbody>
      {
        filterDistricts.map((district,idx)=>(
          <React.Fragment key={idx}>
              <tr>
                <td>
                  <button  onClick={()=> toggleAccordion(idx)} className={`${styles.btn_ghost} ${styles.btn_sm} ${openIndex===idx && styles.rotate}`}><svg className={styles.btn_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                </button>
                </td>
                <td className={styles.td_name}>{district.district}</td>
                <td className={styles.td_description}>{district.description}</td>
                <td className={styles.venue}><span className={`${styles.badge} ${styles.badge_rust}`}>{district.venues.length}</span></td>
                <td className={styles.td_buttons}>
                  <button onClick={()=> toggleEditModal(district)} className={`${styles.btn_ghost} ${styles.btn_sm}`}>Edit</button>
                  <button onClick={()=> toggleDeleteModal(district)} className={`${styles.btn_danger} ${styles.btn_sm}`}>Delete</button>
                </td>
              </tr>
              <tr className={`${styles.venues_row} ${openIndex===idx && styles.active}`}>
                  <td colSpan={5}> 
                    <div className={styles.venue_label}>Venues in {district.district}</div>
                    <div className={styles.venue_pills} >
                    {
                      district.venues.map((venue,idx)=>(
                        
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
            
          </React.Fragment>
        ))
      }
      </tbody>
          </table>
      </div>

      {/* Mobile View  */}
      <div className={styles.cards_list}>
        <div className={styles.card}>

            {
              filterDistricts.map((district,districtIndex)=> (
              <div key={districtIndex} className={styles.district_card}>
              <div onClick={()=> toggleAccordion(districtIndex)} className={styles.district_card_header}>
                <div className={styles.district_card_left}>
                  <button className={`${styles.btn_ghost} ${styles.btn_sm}`}>
                    <svg className={styles.btn_icon} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                  <div className={styles.card_details}>
                    <h2>{district.district}</h2>
                    <p>{district.description}</p>
                  </div>
                  <span className={`${styles.badge} ${styles.badge_rust}`}>{district.venues.length}</span>
                </div>
                <div className={styles.district_card_actions}>
                    <button onClick={()=> toggleEditModal(district)} className={`${styles.btn_ghost} ${styles.btn_sm}`}>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button onClick={()=> toggleDeleteModal(district)} className={`${styles.btn_danger} ${styles.btn_sm}`}>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path></svg>
                    </button>
                </div>
              </div>

              {
                district.venues.map((venue,idx)=>(
                <div key={idx} className={`${styles.district_card_body} ${openIndex===districtIndex && styles.active_venue}`}> 
                <h2>Venues</h2>
                <div className={styles.card_venue_item}>
                  <span className={styles.venue_dot}></span>
                  <span>{venue.name}</span>
                  <span className={styles.venue_coords}>{venue.lat},{venue.lng}</span>
                </div>
              </div>
                ))
              }
            </div>
              ))
            }
        </div>
      </div>

    </main>
    </div>
    </>
  )
}

export default CMS





